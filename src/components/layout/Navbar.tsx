
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Cases", path: "/cases" },
  { title: "Art Gallery", path: "/gallery" },
  { title: "Donate", path: "/donate" },
  { title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-poppins font-bold text-brand">
            Habesha<span className="text-gray-800">Impact</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-brand ${
                location.pathname === link.path
                  ? "text-brand"
                  : isScrolled
                  ? "text-gray-800"
                  : "text-gray-800"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium px-4 py-2 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-brand bg-gray-100"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
