import { motion } from "framer-motion";
import { siteData } from "@/data/content";

const CreativeMenu = () => {
  const images = [
    "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent font-display font-medium tracking-[0.3em] uppercase text-sm block mb-4">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter">
            Our <br />
            <span className="italic text-gradient">Creative Aura</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {siteData.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-6"
            >
               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                  <img 
                    src={images[index % images.length]} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                     <span className="text-sm font-display font-medium text-accent tracking-[0.3em] uppercase">0{index + 1}</span>
                  </div>
               </div>
               
               <div className="space-y-3">
                  <h3 className="text-3xl font-display font-bold">{service.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed max-w-md">
                    {service.description}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default CreativeMenu;
