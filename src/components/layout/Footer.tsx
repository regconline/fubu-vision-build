import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Company Profile", href: "/about/company-profile" },
  { name: "Our Team", href: "/about/team" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "General Building Construction", href: "/services/general-building" },
  { name: "Civil Engineering Works", href: "/services/civil-engineering" },
  { name: "Telecommunications Infrastructure", href: "/services/telecommunications" },
  { name: "Structural Works", href: "/services/structural-works" },
  { name: "Fire Safety Upgrades", href: "/services/fire-safety" },
  { name: "Roof Services", href: "/services/roof-services" },
  { name: "Damage & Storm Restoration", href: "/services/storm-restoration" },
  { name: "Window Factory", href: "/services/window-factory" },
  { name: "Kitchen Factory", href: "/services/kitchen-factory" },
  { name: "Transport & Logistics", href: "/services/transport-logistics" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-deep-charcoal text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="KS FUBU Building Construction" className="h-16 w-16 object-contain bg-white rounded-full p-1" />
              <div className="flex flex-col gap-0.5">
                <span className="font-heading font-bold text-white text-xl tracking-tight leading-none">K.S FUBU</span>
                <span className="font-medium text-white/60 text-[10px] tracking-wide uppercase">Building Construction</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A fully registered South African construction company specialising in civil engineering,
              general building, telecom infrastructure, fire safety, and renovations.
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

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Phone size={18} className="mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:+27793640439" className="hover:text-primary transition-colors">+27 79 364 0439</a>
                    <a href="tel:0110526717" className="hover:text-primary transition-colors">011 052 6717</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="mailto:info@ksfubuconstruction.co.za" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} className="mt-1 shrink-0" />
                  <span>info@ksfubuconstruction.co.za</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  Block B, Woodmead North Office Park,<br />
                  Maxwell Drive, Waterval City,<br />
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

      <div className="border-t border-white/10">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 KS FUBU Building Construction (Pty) Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
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
