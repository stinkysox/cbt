import { motion } from "framer-motion";
import { siteData } from "@/data/content";

const TeamGrid = () => {
  return (
    <div className="py-24 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Creative <span className="italic text-gradient">Minds</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            The visionary team behind your brand's digital evolution.
          </p>
        </motion.div>

        {/* Changed flex-wrap to a responsive grid that forces a single row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 justify-items-center">
          {siteData.team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full max-w-[240px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                {/* Background energy glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl z-0"
                  style={{ backgroundColor: member.energy }}
                />
                
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Overlay content on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                   <p className="text-white font-display font-bold text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     {member.name}
                   </p>
                   <p className="text-white/70 font-body text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                     {member.role}
                   </p>
                </div>
              </div>

              {/* Static text below card - hidden on hover to match your design intent */}
              <div className="text-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-display font-bold text-base md:text-lg">{member.name}</h3>
                <p className="text-muted-foreground font-body text-xs md:text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;