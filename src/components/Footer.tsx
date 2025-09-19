import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import pmLogo from "@/assets/pm-internship-logo-new.png";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", path: "/" },
      { name: "Find Internships", path: "/recommend" },
      { name: "About Scheme", path: "/about" },
    ],
    "Government Links": [
      { name: "Digital India", url: "https://digitalindia.gov.in", external: true },
      { name: "MyGov", url: "https://mygov.in", external: true },
      { name: "India.gov.in", url: "https://india.gov.in", external: true },
      { name: "PMO India", url: "https://pmo.gov.in", external: true },
    ],
  };

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={pmLogo} alt="PM Internship" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold text-gradient">PM Internship Scheme</h3>
                <p className="text-sm text-muted-foreground">Learn from the Best</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering India's youth with world-class internship opportunities across diverse sectors.
              Building skills, creating opportunities, and shaping the future of our nation.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-8 h-5 gradient-flag rounded-sm"></div>
              <span>Government of India Initiative</span>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.path!}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@pminternship.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1800-11-4477</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} PM Internship Scheme - Government of India. All rights reserved. |{" "}
            <Link to="/privacy" className="hover:text-primary transition-smooth">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="hover:text-primary transition-smooth">
              Terms of Service
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;