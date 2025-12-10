import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Award } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern construction site at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/90 via-deep-charcoal/70 to-deep-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide section-padding">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Est. 2020 • Fully Compliant
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6"
          >
            Turning Visions Into{" "}
            <span className="text-primary">Exceptional Buildings</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            Architectural plans, renovations and full-turnkey construction for
            homeowners and developers in Kempton Park and beyond. Award-winning
            workmanship, reliable project management.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Request Free Quote</Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="border-white text-white hover:bg-white hover:text-deep-charcoal" asChild>
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Fully Insured</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Industry Certified</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <a
              href="tel:+27793640439"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>+27 79 364 0439</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full"
      >
        <div className="w-full h-full border-l-4 border-primary/20" />
      </motion.div>
    </section>
  );
}
