import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Lightbulb,
  TrendingUp,
  Globe,
  Heart
} from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Users,
      title: "Skill Development",
      description: "Enhance practical skills and industry knowledge among youth"
    },
    {
      icon: TrendingUp,
      title: "Employment Readiness",
      description: "Prepare young minds for future career opportunities"
    },
    {
      icon: Globe,
      title: "Industry Exposure",
      description: "Provide real-world experience across diverse sectors"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Create meaningful contributions to national development"
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Lives Transformed" },
    { number: "1,000+", label: "Partner Organizations" },
    { number: "28", label: "States & UTs Covered" },
    { number: "95%", label: "Placement Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About PM Internship
              <span className="text-gradient block">Scheme</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A transformative initiative by the Government of India to empower youth with practical skills, 
              industry exposure, and meaningful career opportunities across diverse sectors.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full shadow-card border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To bridge the gap between academic learning and industry requirements by providing 
                  comprehensive internship opportunities that develop practical skills, foster innovation, 
                  and create a skilled workforce ready to contribute to India's growth story.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-8 h-full shadow-card border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To build a digitally empowered and skilled India where every young individual has access 
                  to quality internship opportunities, enabling them to become confident professionals and 
                  contribute meaningfully to the nation's development.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Key Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Key Objectives</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 text-center h-full shadow-card border-border hover:border-primary/20 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <objective.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{objective.title}</h3>
                    <p className="text-muted-foreground">{objective.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Card className="p-8 gradient-hero text-white">
              <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-lg opacity-90">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Profile",
                  description: "Fill out your educational background, skills, and career interests"
                },
                {
                  step: "02", 
                  title: "Get Matched",
                  description: "Our AI algorithm finds the best internship opportunities for you"
                },
                {
                  step: "03",
                  title: "Start Learning",
                  description: "Begin your internship journey with top organizations across India"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Card className="p-12 shadow-card border-border">
              <Lightbulb className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Shape Your Future?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the PM Internship Scheme and take the first step towards a successful career. 
                Connect with industry leaders and gain invaluable experience.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-6 h-4 gradient-flag rounded-sm"></div>
                <span>A Government of India Initiative</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;