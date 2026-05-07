import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import residential1 from "@/assets/portfolio/residential-1.jpg";
import residential2 from "@/assets/portfolio/residential-2.jpg";
import residential3 from "@/assets/portfolio/residential-3.jpg";
import residential4 from "@/assets/portfolio/residential-4.jpg";
import residential5 from "@/assets/portfolio/residential-5.jpg";
import commercial1 from "@/assets/portfolio/commercial-1.jpg";
import structural1 from "@/assets/portfolio/structural-1.jpg";
import structural2 from "@/assets/portfolio/structural-2.jpg";
import structural3 from "@/assets/portfolio/structural-3.jpg";
import finishes1 from "@/assets/portfolio/finishes-1.jpg";

type Category =
  | "All"
  | "Residential Construction"
  | "Commercial Construction"
  | "Structural Works"
  | "Interior & Finishes";

interface Project {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
}

const projects: Project[] = [
  { src: residential1, title: "Double Storey Residential Build", category: "Residential Construction" },
  { src: residential2, title: "Hillside Residential Estate", category: "Residential Construction" },
  { src: residential3, title: "Modern Family Home Construction", category: "Residential Construction" },
  { src: residential4, title: "Contemporary Concrete Residence", category: "Residential Construction" },
  { src: residential5, title: "Luxury Cantilever Residence", category: "Residential Construction" },
  { src: commercial1, title: "Commercial Development Project", category: "Commercial Construction" },
  { src: structural1, title: "Multi-Storey Structural Frame", category: "Structural Works" },
  { src: structural2, title: "Reinforced Concrete Structure", category: "Structural Works" },
  { src: structural3, title: "Suspended Slab & Column Works", category: "Structural Works" },
  { src: finishes1, title: "Architectural Concrete Finishes", category: "Interior & Finishes" },
];

const categories: Category[] = [
  "All",
  "Residential Construction",
  "Commercial Construction",
  "Structural Works",
  "Interior & Finishes",
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 bg-secondary overflow-hidden">
          <div className="container-wide section-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Work</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Project <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                A showcase of our completed projects across civil engineering, building construction,
                telecommunications infrastructure and more.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">Our Completed Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our work by category. We deliver quality across residential, commercial, structural and civil projects.
              </p>
            </motion.div>

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {categories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-brand-md"
                        : "bg-section-alt text-foreground border-border hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Project grid */}
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-section-alt border border-border"
                  >
                    <img
                      src={p.src}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        {p.category}
                      </span>
                      <h3 className="text-white font-heading font-bold text-lg leading-tight">{p.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No projects in this category yet.</p>
            )}
          </div>
        </section>

        <section className="py-16 bg-section-alt">
          <div className="container-wide section-padding text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Start Your Project With Us</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Ready to add your project to our portfolio? Contact us today for a free consultation.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
