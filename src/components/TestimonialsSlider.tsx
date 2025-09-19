import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineering Intern",
      company: "TCS",
      location: "Bangalore",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "The PM Internship Scheme transformed my career. I gained hands-on experience in cutting-edge technology and built connections that will last a lifetime."
    },
    {
      name: "Arjun Patel",
      role: "Healthcare Research Intern", 
      company: "AIIMS",
      location: "Delhi",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "Working on healthcare innovations through this program opened my eyes to how technology can save lives. An incredible learning experience."
    },
    {
      name: "Sneha Gupta",
      role: "Digital Marketing Intern",
      company: "Infosys",
      location: "Pune",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "The mentorship and real-world projects helped me develop skills I never knew I had. This program is a game-changer for Indian youth."
    },
    {
      name: "Rohit Kumar",
      role: "Manufacturing Intern",
      company: "Tata Motors",
      location: "Chennai",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "From classroom theory to factory floors - this internship bridged the gap perfectly. I'm now confident about my engineering career."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Voices of Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from young Indians who transformed their careers through the PM Internship Scheme.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 text-center border-border shadow-card">
                    <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-20" />
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                      "{testimonial.testimonial}"
                    </p>
                    
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="text-left">
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary font-medium">{testimonial.company}, {testimonial.location}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Slider indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;