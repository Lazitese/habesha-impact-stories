
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Habesha Impact</h3>
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-brand transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-300 hover:text-brand transition-colors">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-brand transition-colors">
                  Art Gallery
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-brand transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Bole Road, Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand shrink-0" />
                <a href="tel:+251912345678" className="text-gray-300 hover:text-brand transition-colors">
                  +251 91 234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-brand shrink-0" />
                <a href="mailto:info@habeshaimpact.org" className="text-gray-300 hover:text-brand transition-colors">
                  info@habeshaimpact.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to stay updated on our latest projects and initiatives.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
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
