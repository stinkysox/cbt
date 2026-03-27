import { motion } from "framer-motion";
import { siteData } from "@/data/content";

const BentoGallery = () => {
  const { items, sectionTag, titleLine1, titleHighlight } = siteData.bentoGallery;

  return (
    <section className="section-padding relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            {sectionTag}
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold overflow-visible">
            {titleLine1} <span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">{titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${
                item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
              } ${item.rowSpan === 2 ? "md:row-span-2" : "md:row-span-1"}`}
            >
              <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">
                  {item.category}
                </p>
                <h3 className="text-white font-display text-2xl md:text-3xl font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;
