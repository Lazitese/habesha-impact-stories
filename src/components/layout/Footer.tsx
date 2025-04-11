
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-poppins font-bold mb-4 relative inline-block">
              Habesha Impact
              <span className="absolute -bottom-1 left-0 h-0.5 bg-brand w-12"></span>
            </h3>
            <p className="mb-4 text-gray-300">
              Empowering communities in Ethiopia through sustainable development, 
              education, and healthcare initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-brand transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-brand transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-brand transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-poppins font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-0.5 bg-brand w-12"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-brand transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-300 hover:text-brand transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-brand transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  Art Gallery
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-brand transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  Donate
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-poppins font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 h-0.5 bg-brand w-12"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="mr-3 h-5 w-5 text-brand shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">
                  123 Bole Road, Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-3 h-5 w-5 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+251912345678" className="text-gray-300 hover:text-brand transition-colors">
                  +251 91 234 5678
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-3 h-5 w-5 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@habeshaimpact.org" className="text-gray-300 hover:text-brand transition-colors">
                  info@habeshaimpact.org
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Habesha Impact Stories. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
