import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";

type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const COOKIE_KEY = "cbt_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: true,
    marketing: true,
    preferences: true,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Slight delay so the page renders first
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (accepted: boolean, custom?: ConsentState) => {
    const data = accepted
      ? { accepted: true, ...(custom ?? { analytics: true, marketing: true, preferences: true }) }
      : { accepted: false, analytics: false, marketing: false, preferences: false };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(data));
    setVisible(false);
  };

  const Toggle = ({
    id,
    label,
    description,
    checked,
    disabled,
    onChange,
  }: {
    id: keyof ConsentState;
    label: string;
    description: string;
    checked: boolean;
    disabled?: boolean;
    onChange?: () => void;
  }) => (
    <div className="flex items-start gap-3 py-3 border-b border-border/30 last:border-0">
      <div className="flex-1">
        <p className="text-sm font-display font-semibold mb-0.5">{label}</p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        disabled={disabled}
        className={`relative mt-0.5 shrink-0 w-10 h-5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
          checked ? "bg-accent" : "bg-foreground/20"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop (subtle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-[2px] pointer-events-none"
          />

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[420px] z-[9999]"
          >
            <div className="relative rounded-3xl bg-background/95 border border-border/60 shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden">

              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent/60 to-transparent" />

              <div className="p-6">

                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Cookie size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-bold text-sm">We use cookies 🍪</p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">
                      We collect data to improve your experience and personalise content.{" "}
                      <Link to="/privacy" className="underline hover:text-foreground transition-colors">
                        Privacy Policy
                      </Link>{" "}
                      ·{" "}
                      <Link to="/terms" className="underline hover:text-foreground transition-colors">
                        Terms
                      </Link>
                    </p>
                  </div>
                  <button
                    onClick={() => save(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-foreground/5"
                    aria-label="Decline and close"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Customise panel */}
                <AnimatePresence>
                  {showCustomize && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-4 rounded-2xl bg-foreground/[0.03] border border-border/40 px-4 py-1">
                        <Toggle
                          id="analytics"
                          label="Analytics"
                          description="Helps us understand how visitors use our site (Google Analytics)."
                          checked={consent.analytics}
                          onChange={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                        />
                        <Toggle
                          id="marketing"
                          label="Marketing"
                          description="Allows us to show you relevant ads and measure campaign performance."
                          checked={consent.marketing}
                          onChange={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                        />
                        <Toggle
                          id="preferences"
                          label="Preferences"
                          description="Remembers your settings like theme and language across visits."
                          checked={consent.preferences}
                          onChange={() => setConsent(c => ({ ...c, preferences: !c.preferences }))}
                        />
                        <Toggle
                          id={"analytics" as keyof ConsentState}
                          label="Essential"
                          description="Required for the site to function correctly. Cannot be disabled."
                          checked={true}
                          disabled={true}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => save(true, consent)}
                    className="flex-1 py-2.5 rounded-xl bg-foreground text-primary-foreground text-sm font-display font-bold hover:opacity-90 transition-opacity"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => {
                      if (showCustomize) {
                        save(true, consent);
                      } else {
                        setShowCustomize(true);
                      }
                    }}
                    className="flex-1 py-2.5 rounded-xl border border-border/60 text-sm font-display font-medium hover:bg-foreground/5 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {showCustomize ? (
                      <>
                        <Shield size={13} /> Save Choices
                      </>
                    ) : (
                      <>
                        <Settings size={13} /> Customise
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() => save(false)}
                  className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors mt-2 py-1 font-body"
                >
                  Reject non-essential
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
