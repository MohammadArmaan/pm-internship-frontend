import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Users, 
  Building2, 
  MapPin, 
  Award, 
  TrendingUp, 
  Heart,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Star
} from "lucide-react";
import pmHero from "@/assets/pm-hero.png";
import ImageGallery from "@/components/ImageGallery";
import TestimonialsSlider from "@/components/TestimonialsSlider";

const Index = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Youth Empowered" },
    { icon: Building2, value: "1,000+", label: "Partner Organizations" },
    { icon: MapPin, value: "28", label: "States & UTs" },
    { icon: Award, value: "95%", label: "Success Rate" },
  ];

  const features = [
    {
      icon: Briefcase,
      title: "Diverse Opportunities",
      description: "Explore internships across technology, healthcare, education, and more sectors."
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description: "Gain practical experience and industry-relevant skills from leading organizations."
    },
    {
      icon: Star,
      title: "AI-Powered Matching",
      description: "Get personalized internship recommendations based on your profile and interests."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Build your professional network and accelerate your career journey."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden ps-5 md:ps-0 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/25 via-white/8 via-50% to-green-600/25 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-4 gradient-flag rounded-sm"></div>
                <span className="text-sm font-medium text-muted-foreground">Government of India</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                PM Internship
                <span className="text-gradient block">Scheme</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering India's youth with world-class internship opportunities. 
                Connect with leading organizations and build the skills that shape our nation's future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild className="group">
                  <Link to="/recommend">
                    Find Your Internship
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/70 via-white/8 via-50% to-green-600/70 rounded-2xl blur-2xl opacity-10 animate-pulse"></div>
                <img
                  src={pmHero}
                  alt="Prime Minister Narendra Modi"
                  className="relative rounded-2xl shadow-elegant w-full max-w-md mx-auto bg-transparent"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-card border border-border"
              >
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-success" />
                  <div>
                    <p className="font-semibold text-foreground">Empowering Youth</p>
                    <p className="text-sm text-muted-foreground">Building Tomorrow</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

     
      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose PM Internship?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover opportunities that match your passion and accelerate your career growth with India's premier internship program.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 h-full border-border hover:shadow-card transition-all duration-300 hover:border-primary/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      {/* <TestimonialsSlider /> */}

      {/* Image Gallery */}
      <ImageGallery />

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of young Indians who are building their careers through the PM Internship Scheme.
            </p>
            <Button variant="secondary" asChild className="group w-full">
              <Link to="/recommend">
                Get Personalized Recommendations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
