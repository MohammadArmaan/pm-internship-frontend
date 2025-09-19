import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ImageGallery = () => {
  const galleryImages = [
    {
      src: "/tech-inovation.jpg",
      alt: "Young professionals in modern office",
      title: "Tech Innovation"
    },
    {
      src: "/healthcare-excellence.webp", 
      alt: "Healthcare interns with mentors",
      title: "Healthcare Excellence"
    },
    {
      src: "/education-impact.jpeg",
      alt: "Education sector collaboration",
      title: "Education Impact"
    },
    {
      src: "/digital-transformation.webp",
      alt: "Digital India initiatives",
      title: "Digital Transformation"
    },
    {
      src: "/sustainability.webp",
      alt: "Sustainable development projects",
      title: "Sustainability"
    },
    {
      src: "/make-in-india.webp",
      alt: "Manufacturing and industry",
      title: "Make in India"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness the transformation of India's youth through diverse internship opportunities across sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-border hover:shadow-card transition-all duration-300 hover:border-primary/20">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;