import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Architectural Works", href: "/services/architectural-works" },
  { name: "Building Renovations", href: "/services/renovations" },
  { name: "Engineering Consultants", href: "/services/engineering" },
  { name: "Plumbing & Electrical", href: "/services/plumbing-electrical" },
  { name: "Waterproofing & Landscaping", href: "/services/waterproofing" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-deep-charcoal text-white">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="K.S FUBU Building Construction"
              className="h-20 bg-globe-gray rounded-lg p-2"
            />
            <p className="text-muted-foreground leading-relaxed">
              Turning visions into exceptional buildings since 2020. Professional
              construction, renovations, and architectural services in Gauteng.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/16o5N4GtWo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/katlego_tiago"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+27793640439"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={18} className="mt-1 shrink-0" />
                  <span>+27 79 364 0439</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ksfubuconstruction.co.za"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} className="mt-1 shrink-0" />
                  <span>info@ksfubuconstruction.co.za</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  Block B, Woodmead North Office Park,
                  <br />
                  Maxwell Drive, Waterval City,
                  <br />
                  Midrand, 2090
                </span>
              </li>
            </ul>
            <div className="mt-6 text-sm text-muted-foreground">
              <p className="font-medium text-white">Business Hours:</p>
              <p>Mon–Fri: 08:30–16:30</p>
              <p>Sat: 09:30–14:30</p>
              <p>Sun: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} K.S FUBU Building Construction (Pty) Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-helmet-yellow transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
