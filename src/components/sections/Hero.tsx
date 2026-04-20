import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Award } from "lucide-react";
import office1 from "@/assets/office-exterior-1.jpg";
import office2 from "@/assets/office-exterior-2.jpg";
import office3 from "@/assets/office-exterior-3.jpg";
import office4 from "@/assets/office-construction.jpg";

const heroImages = [office1, office2, office3, office4];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={heroImages[index].src}
            alt="K.S FUBU Building Construction project showcase"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </AnimatePresence>
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
            Building South Africa's{" "}
            <span className="text-primary">Future Infrastructure</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            Civil works, building construction and telecommunications infrastructure
            delivered with quality workmanship and full SHEQ compliance — from
            Midrand to projects across South Africa.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">Request Free Quote</Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="border-white text-white hover:bg-white hover:text-deep-charcoal" asChild>
              <Link href="/portfolio">View Our Portfolio</Link>
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
              <span>SHEQ Compliant</span>
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

          {/* Slide indicators */}
          <div className="flex gap-2 mt-8">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "bg-primary w-10" : "bg-white/40 w-5 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
