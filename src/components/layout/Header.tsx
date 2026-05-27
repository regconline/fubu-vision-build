import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const aboutDropdown = [
  { name: "Company Profile", href: "/about/company-profile" },
  { name: "Our Team", href: "/about/team" },
];

const servicesDropdown = [
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

function DropdownMenu({ items, isOpen }: { items: { name: string; href: string }[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-border z-50 py-2"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <div className="bg-secondary text-secondary-foreground py-2 px-4 hidden lg:block">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0793640439" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              079 364 0439
            </a>
            <a href="tel:0110526717" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              011 052 6717
            </a>
            <a href="mailto:info@ksfubuconstruction.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} />
              info@ksfubuconstruction.co.za
            </a>
          </div>
          <a href="https://wa.me/27793640439" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#E5E7EB]/95 backdrop-blur-md shadow-brand-md py-2" : "bg-[#E5E7EB] py-4"}`}>
        <div className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="KS FUBU Building Construction"
              className={`transition-all duration-300 object-contain ${isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"}`}
              whileHover={{ scale: 1.02 }}
            />
            <div className={`flex flex-col transition-all duration-300 ${isScrolled ? "gap-0" : "gap-0.5"}`}>
              <span className={`font-heading font-bold text-deep-charcoal tracking-tight leading-none transition-all duration-300 ${isScrolled ? "text-sm lg:text-lg" : "text-base lg:text-xl xl:text-2xl"}`}>
                K.S FUBU
              </span>
              <span className={`font-medium text-trust-navy tracking-wide uppercase transition-all duration-300 ${isScrolled ? "text-[8px] lg:text-[10px]" : "text-[9px] lg:text-xs"}`}>
                Building Construction
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 text-sm font-medium text-deep-charcoal hover:text-primary transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
            </Link>

            <div ref={aboutRef} className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-deep-charcoal hover:text-primary transition-colors relative group"
              >
                About
                <ChevronDown size={14} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
              </button>
              <DropdownMenu items={aboutDropdown} isOpen={aboutOpen} />
            </div>

            <div ref={servicesRef} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-deep-charcoal hover:text-primary transition-colors relative group"
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
              </button>
              <DropdownMenu items={servicesDropdown} isOpen={servicesOpen} />
            </div>

            <Link to="/portfolio" className="px-4 py-2 text-sm font-medium text-deep-charcoal hover:text-primary transition-colors relative group">
              Portfolio
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
            </Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-medium text-deep-charcoal hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request Free Quote</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-deep-charcoal hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="w-7 h-0.5 bg-current" />
                <span className="w-7 h-0.5 bg-current" />
              </div>
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-background lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-1">
              <Link to="/" className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                Home
              </Link>

              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  About
                  <ChevronDown size={18} className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4">
                      {aboutDropdown.map((item) => (
                        <Link key={item.href} to={item.href} className="block py-2.5 px-4 text-base text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  Services
                  <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4">
                      {servicesDropdown.map((item) => (
                        <Link key={item.href} to={item.href} className="block py-2.5 px-4 text-base text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/portfolio" className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                Contact
              </Link>

              <div className="mt-6 space-y-3">
                <Button variant="hero" className="w-full" size="lg" asChild>
                  <Link to="/contact">Request Free Quote</Link>
                </Button>
                <div className="flex gap-3">
                  <a href="tel:0793640439" className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium">
                    <Phone size={18} />
                    Call
                  </a>
                  <a href="https://wa.me/27793640439" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg font-medium">
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
