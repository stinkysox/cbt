import { motion } from "framer-motion";
import { siteData } from "@/data/content";

const BentoGallery = () => {
  const { items } = siteData.bentoGallery;

  return (
    <section className="section-padding relative bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            {siteData.bentoGallery.sectionTag}
          </p>
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 transition-colors duration-300">
            Featured
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">
            {siteData.bentoGallery.description}
          </p>
        </div>

        {/* Bento Grid 
            - grid-cols-1: Single column on mobile
            - md:grid-cols-3: Three columns on medium screens and up
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative overflow-hidden rounded-3xl group cursor-pointer
                /* On mobile, every item spans 1 col. On desktop, follow the data. */
                ${item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"}
                /* On mobile, items are square. On desktop, large items are wide. */
                aspect-square ${item.colSpan === 2 ? "md:aspect-[2/1]" : "md:aspect-square"}
              `}
            >
              {/* Darkening overlay on hover */}
              <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Category & Title removed as requested. 
                  If you want to add a "View Project" button or small icon instead, 
                  you can place it here.
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;