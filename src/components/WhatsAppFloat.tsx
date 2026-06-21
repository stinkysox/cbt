import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "918800180670";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I visited your website and I'd like to discuss a project with Creativity Beyond Thoughts."
);

const WhatsAppFloat = () => {
  const [tooltip, setTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after a small delay so it doesn't compete with the cookie banner
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-3"
        >
          {/* Tooltip bubble */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 6 }}
                transition={{ duration: 0.2 }}
                className="relative bg-background border border-border/60 rounded-2xl shadow-xl px-4 py-3 max-w-[220px]"
              >
                {/* Tail */}
                <div className="absolute -bottom-2 right-5 w-4 h-4 bg-background border-r border-b border-border/60 rotate-45 rounded-sm" />
                <button
                  onClick={() => setTooltip(false)}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-foreground/10 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X size={10} />
                </button>
                <p className="text-xs font-display font-bold mb-0.5">Chat with us! 👋</p>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  We typically reply within minutes on WhatsApp.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow"
          >
            <MessageCircle size={26} strokeWidth={2} />

            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;
