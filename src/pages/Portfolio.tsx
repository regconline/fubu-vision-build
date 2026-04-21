import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import residentialModern1 from "@/assets/portfolio/residential-modern-1.jpg";
import residentialModern2 from "@/assets/portfolio/residential-modern-2.jpg";
import residentialLuxury1 from "@/assets/portfolio/residential-luxury-1.jpg";
import residentialLuxury2 from "@/assets/portfolio/residential-luxury-2.jpg";
import residentialDouble1 from "@/assets/portfolio/residential-double-storey-1.jpg";
import residentialDouble2 from "@/assets/portfolio/residential-double-storey-2.jpg";
import structural1 from "@/assets/portfolio/structural-1.jpg";
import structural2 from "@/assets/portfolio/structural-2.jpg";
import structural3 from "@/assets/portfolio/structural-3.jpg";
import structural4 from "@/assets/portfolio/structural-4.jpg";
import structural5 from "@/assets/portfolio/structural-5.jpg";
import civilPlumbing1 from "@/assets/portfolio/civil-plumbing-1.jpg";
import commercial1 from "@/assets/portfolio/commercial-1.jpg";
import commercialRender1 from "@/assets/portfolio/commercial-render-1.jpg";
import architecturePlans1 from "@/assets/portfolio/architecture-plans-1.jpg";
import interiorKitchen1 from "@/assets/portfolio/interior-kitchen-1.jpg";
import interiorKitchen2 from "@/assets/portfolio/interior-kitchen-2.jpg";
import interiorBathroom1 from "@/assets/portfolio/interior-bathroom-1.jpg";
import interiorHallway1 from "@/assets/portfolio/interior-hallway-1.jpg";
import commercialMagubane1 from "@/assets/portfolio/commercial-magubane-1.jpg";
import commercialMagubane2 from "@/assets/portfolio/commercial-magubane-2.jpg";
import commercialMagubane3 from "@/assets/portfolio/commercial-magubane-3.jpg";
import commercialMagubane4 from "@/assets/portfolio/commercial-magubane-4.jpg";
import telecomCabling1 from "@/assets/portfolio/telecom-cabling-1.jpg";
import telecomRooftop1 from "@/assets/portfolio/telecom-rooftop-1.jpg";
import telecomTowerInstall1 from "@/assets/portfolio/telecom-tower-install-1.jpg";
import telecomTeam1 from "@/assets/portfolio/telecom-team-1.jpg";
import telecomTeam2 from "@/assets/portfolio/telecom-team-2.jpg";

type Category =
  | "All"
  | "Residential Construction"
  | "Commercial Construction"
  | "Structural Works"
  | "Civil Engineering"
  | "Architecture & Design"
  | "Interior & Finishes"
  | "Telecommunications";

interface Project {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
}

const projects: Project[] = [
  { src: residentialModern1, title: "Modern Double Storey Residence", category: "Residential Construction" },
  { src: residentialModern2, title: "Contemporary Concrete Residence", category: "Residential Construction" },
  { src: residentialLuxury1, title: "Luxury Family Home", category: "Residential Construction" },
  { src: residentialLuxury2, title: "Luxury Pillared Mansion Build", category: "Residential Construction" },
  { src: residentialDouble1, title: "Double Storey Brickwork Build", category: "Residential Construction" },
  { src: residentialDouble2, title: "Completed Double Storey Home", category: "Residential Construction" },
  { src: structural1, title: "Reinforced Slab & Roof Trusses", category: "Structural Works" },
  { src: structural2, title: "Structural Columns & Beams", category: "Structural Works" },
  { src: structural3, title: "Suspended Slab Construction", category: "Structural Works" },
  { src: structural4, title: "Brickwork & Scaffolding Stage", category: "Structural Works" },
  { src: structural5, title: "Steel Door Frame Installation", category: "Structural Works" },
  { src: civilPlumbing1, title: "Slab Plumbing & Reinforcement", category: "Civil Engineering" },
  { src: commercial1, title: "Commercial Block Development", category: "Commercial Construction" },
  { src: commercialRender1, title: "Commercial Building Design", category: "Architecture & Design" },
  { src: architecturePlans1, title: "Architectural Plans & Elevations", category: "Architecture & Design" },
  { src: interiorKitchen1, title: "Modern Kitchen Installation", category: "Interior & Finishes" },
  { src: interiorKitchen2, title: "Compact Kitchen Fit-Out", category: "Interior & Finishes" },
  { src: interiorBathroom1, title: "Tiled Bathroom & Vanity", category: "Interior & Finishes" },
  { src: interiorHallway1, title: "Interior Hallway & Built-In Cupboards", category: "Interior & Finishes" },
  { src: commercialMagubane1, title: "Magubane Block A — Street View", category: "Architecture & Design" },
  { src: commercialMagubane2, title: "Magubane Block A — Aerial Render", category: "Architecture & Design" },
  { src: commercialMagubane3, title: "Magubane Blocks A & B — Site Layout", category: "Commercial Construction" },
  { src: commercialMagubane4, title: "Magubane Twin Block Development", category: "Commercial Construction" },
  { src: telecomCabling1, title: "Fibre & Power Cable Management", category: "Telecommunications" },
  { src: telecomRooftop1, title: "Rooftop Antenna & Microwave Site", category: "Telecommunications" },
  { src: telecomTowerInstall1, title: "Tower Climb & Antenna Installation", category: "Telecommunications" },
  { src: telecomTeam1, title: "On-Site Safety & Site Survey", category: "Telecommunications" },
  { src: telecomTeam2, title: "KS FUBU Telecom Field Crew", category: "Telecommunications" },
];

const categories: Category[] = [
  "All",
  "Residential Construction",
  "Commercial Construction",
  "Structural Works",
  "Civil Engineering",
  "Architecture & Design",
  "Interior & Finishes",
  "Telecommunications",
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
                      style={{ filter: "sepia(1) saturate(2.2) hue-rotate(5deg) brightness(0.95)" }}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:!filter-none group-hover:scale-110 group-focus-within:!filter-none group-focus-within:scale-110"
                      onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                      onMouseLeave={(e) => (e.currentTarget.style.filter = "sepia(1) saturate(2.2) hue-rotate(5deg) brightness(0.95)")}
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
