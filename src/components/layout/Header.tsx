"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 hidden lg:block">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+27793640439"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={14} />
              +27 79 364 0439
            </a>
            <a
              href="mailto:fubu.buildingcompany@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={14} />
              fubu.buildingcompany@gmail.com
            </a>
          </div>
          <a
            href="https://wa.me/27793640439"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main Header - Using globe-gray to match logo background */}
      {/* Main Header - Using exact globe gray (#E5E7EB) to match logo background */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#E5E7EB]/95 backdrop-blur-md shadow-brand-md py-2"
            : "bg-[#E5E7EB] py-4"
        }`}
      >
        <div className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.img
              src={logo.src}
              alt="K.S FUBU Building Construction"
              className={`transition-all duration-300 ${
                isScrolled ? "h-14" : "h-20"
              }`}
              whileHover={{ scale: 1.02 }}
            />
            <div className={`hidden sm:flex flex-col transition-all duration-300 ${isScrolled ? "gap-0" : "gap-0.5"}`}>
              <span className={`font-heading font-bold text-deep-charcoal tracking-tight leading-none transition-all duration-300 ${isScrolled ? "text-lg" : "text-xl lg:text-2xl"}`}>
                K.S FUBU
              </span>
              <span className={`font-medium text-trust-navy tracking-wide uppercase transition-all duration-300 ${isScrolled ? "text-[10px]" : "text-xs"}`}>
                Building Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-deep-charcoal hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">Request Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Two stripes as requested */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-background lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 space-y-3">
                <Button variant="hero" className="w-full" size="lg" asChild>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Request Free Quote
                  </Link>
                </Button>
                <div className="flex gap-3">
                  <a
                    href="tel:+27793640439"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium"
                  >
                    <Phone size={18} />
                    Call
                  </a>
                  <a
                    href="https://wa.me/27793640439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg font-medium"
                  >
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
