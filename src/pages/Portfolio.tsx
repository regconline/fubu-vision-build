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
import residential6 from "@/assets/portfolio/residential-6.jpg";
import residential7 from "@/assets/portfolio/residential-7.jpg";
import residential8 from "@/assets/portfolio/residential-8.jpg";
import residential9 from "@/assets/portfolio/residential-9.jpg";
import residential10 from "@/assets/portfolio/residential-10.jpg";
import residential11 from "@/assets/portfolio/residential-11.jpg";
import commercial1 from "@/assets/portfolio/commercial-1.jpg";
import commercial2 from "@/assets/portfolio/commercial-2.jpg";
import structural1 from "@/assets/portfolio/structural-1.jpg";
import structural2 from "@/assets/portfolio/structural-2.jpg";
import structural3 from "@/assets/portfolio/structural-3.jpg";
import structural4 from "@/assets/portfolio/structural-4.jpg";
import civil1 from "@/assets/portfolio/civil-1.jpg";
import architecture1 from "@/assets/portfolio/architecture-1.jpg";
import finishes1 from "@/assets/portfolio/finishes-1.jpg";
import residential12 from "@/assets/portfolio/residential-12.jpg";
import residential13 from "@/assets/portfolio/residential-13.jpg";
import residential14 from "@/assets/portfolio/residential-14.jpg";
import structural5 from "@/assets/portfolio/structural-5.jpg";
import finishes2 from "@/assets/portfolio/finishes-2.jpg";
import finishes3 from "@/assets/portfolio/finishes-3.jpg";
import finishes4 from "@/assets/portfolio/finishes-4.jpg";
import telecom1 from "@/assets/portfolio/telecom-1.jpg";
import telecom2 from "@/assets/portfolio/telecom-2.jpg";
import telecom3 from "@/assets/portfolio/telecom-3.jpg";
import telecom4 from "@/assets/portfolio/telecom-4.jpg";
import telecom5 from "@/assets/portfolio/telecom-5.jpg";
import telecom6 from "@/assets/portfolio/telecom-6.jpg";
import telecom7 from "@/assets/portfolio/telecom-7.jpg";
import telecom8 from "@/assets/portfolio/telecom-8.jpg";
import telecom9 from "@/assets/portfolio/telecom-9.jpg";
import telecom10 from "@/assets/portfolio/telecom-10.jpg";
import telecom11 from "@/assets/portfolio/telecom-11.jpg";
import telecom12 from "@/assets/portfolio/telecom-12.jpg";
import telecom13 from "@/assets/portfolio/telecom-13.jpg";
import telecom14 from "@/assets/portfolio/telecom-14.jpg";
import telecom15 from "@/assets/portfolio/telecom-15.jpg";
import telecom16 from "@/assets/portfolio/telecom-16.jpg";
import telecom17 from "@/assets/portfolio/telecom-17.jpg";
import telecom18 from "@/assets/portfolio/telecom-18.jpg";
import telecom19 from "@/assets/portfolio/telecom-19.jpg";
import telecom20 from "@/assets/portfolio/telecom-20.jpg";
import fleet1 from "@/assets/portfolio/fleet-1.jpg";
import fleet2 from "@/assets/portfolio/fleet-2.jpg";
import fleet3 from "@/assets/portfolio/fleet-3.jpg";
import fleet4 from "@/assets/portfolio/fleet-4.jpg";
import fleet5 from "@/assets/portfolio/fleet-5.jpg";
import fleet6 from "@/assets/portfolio/fleet-6.jpg";
import fleet7 from "@/assets/portfolio/fleet-7.jpg";
import fleet8 from "@/assets/portfolio/fleet-8.jpg";
import fleet9 from "@/assets/portfolio/fleet-9.jpg";
import fleet10 from "@/assets/portfolio/fleet-10.jpg";
import residential17 from "@/assets/portfolio/residential-17.jpg";
import residential18 from "@/assets/portfolio/residential-18.jpg";
import residential19 from "@/assets/portfolio/residential-19.jpg";
import residential20 from "@/assets/portfolio/residential-20.jpg";
import structural6 from "@/assets/portfolio/structural-6.jpg";
import finishes5 from "@/assets/portfolio/finishes-5.jpg";
import architecture2 from "@/assets/portfolio/architecture-2.jpg";

type Category =
  | "All"
  | "Residential Construction"
  | "Commercial Construction"
  | "Structural Works"
  | "Civil Engineering"
  | "Architecture & Design"
  | "Interior & Finishes"
  | "Telecommunications"
  | "Fleet & Operations";

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
  { src: residential6, title: "Modern Two-Storey Build In Progress", category: "Residential Construction" },
  { src: residential7, title: "Curved Roof Architectural Home", category: "Residential Construction" },
  { src: residential8, title: "Twin Modern Villas Build", category: "Residential Construction" },
  { src: residential9, title: "Courtyard Residence Construction", category: "Residential Construction" },
  { src: residential10, title: "Completed Luxury Family Home", category: "Residential Construction" },
  { src: residential11, title: "Hillside Modern Residence", category: "Residential Construction" },
  { src: commercial1, title: "Commercial Development Project", category: "Commercial Construction" },
  { src: commercial2, title: "Commercial Concrete Structure", category: "Commercial Construction" },
  { src: structural1, title: "Multi-Storey Structural Frame", category: "Structural Works" },
  { src: structural2, title: "Reinforced Concrete Structure", category: "Structural Works" },
  { src: structural3, title: "Suspended Slab & Column Works", category: "Structural Works" },
  { src: structural4, title: "Cantilever Beam & Slab Works", category: "Structural Works" },
  { src: civil1, title: "Site Excavation & Foundations", category: "Civil Engineering" },
  { src: architecture1, title: "Build vs Render Concept Design", category: "Architecture & Design" },
  { src: finishes1, title: "Architectural Concrete Finishes", category: "Interior & Finishes" },
  { src: residential12, title: "Multi-Level Residential Build", category: "Residential Construction" },
  { src: residential13, title: "Architectural Curved-Roof Home", category: "Residential Construction" },
  { src: residential14, title: "Estate Homes Under Construction", category: "Residential Construction" },
  { src: structural5, title: "Cantilever Slab & Formwork", category: "Structural Works" },
  { src: finishes2, title: "Concrete Courtyard Water Feature", category: "Interior & Finishes" },
  { src: finishes3, title: "Stone Courtyard & Entrance Detail", category: "Interior & Finishes" },
  { src: finishes4, title: "Concrete Facade & Entry Design", category: "Interior & Finishes" },
  { src: telecom1, title: "ZTE Radio Unit Installation", category: "Telecommunications" },
  { src: telecom2, title: "Rooftop Antenna Mast Installation", category: "Telecommunications" },
  { src: telecom3, title: "Rooftop Cable Tray & Conduit Works", category: "Telecommunications" },
  { src: telecom4, title: "Tripod Mounted RRU Setup", category: "Telecommunications" },
  { src: telecom5, title: "High-Rise Sector Antenna Installation", category: "Telecommunications" },
  { src: telecom6, title: "Mobile Generator Site Power", category: "Telecommunications" },
  { src: telecom7, title: "Outdoor Cabinet Levelling & Install", category: "Telecommunications" },
  { src: telecom8, title: "Base Station Outdoor Cabinet", category: "Telecommunications" },
  { src: telecom9, title: "Power & Rectifier Cabinet Wiring", category: "Telecommunications" },
  { src: telecom10, title: "Pole-Mounted RRU Installation", category: "Telecommunications" },
  { src: telecom11, title: "Tower Base Bolt & Foundation Works", category: "Telecommunications" },
  { src: telecom12, title: "Site Measurement & Setting Out", category: "Civil Engineering" },
  { src: telecom13, title: "Cable Conduit Routing & Measurement", category: "Civil Engineering" },
  { src: telecom14, title: "On-Site Cabinet Installation Team", category: "Telecommunications" },
  { src: telecom15, title: "ZTE Power & Rectifier System", category: "Telecommunications" },
  { src: telecom16, title: "Outdoor Telecoms Cabinet Build", category: "Telecommunications" },
  { src: telecom17, title: "Cable Duct Concrete Plinth", category: "Civil Engineering" },
  { src: telecom18, title: "Cable Trenching & Cabinet Routing", category: "Civil Engineering" },
  { src: telecom19, title: "ZTE Cabinet Site Commissioning", category: "Telecommunications" },
  { src: telecom20, title: "Huawei Rack & PDU Cabling", category: "Telecommunications" },
  { src: fleet1, title: "Branded Site Vehicle On-Route", category: "Fleet & Operations" },
  { src: fleet2, title: "K.S FUBU Branded Company Car", category: "Fleet & Operations" },
  { src: fleet3, title: "Site PPE & Vehicle Ready For Dispatch", category: "Fleet & Operations" },
  { src: fleet4, title: "Mahindra Scorpio Pickup Fleet", category: "Fleet & Operations" },
  { src: fleet5, title: "Branded 4x4 Site Bakkie", category: "Fleet & Operations" },
  { src: fleet6, title: "Mahindra Scorpio Crew Vehicle", category: "Fleet & Operations" },
  { src: fleet7, title: "Concrete Mixer & Site Trailer", category: "Fleet & Operations" },
  { src: fleet8, title: "Ford Ranger With Tools On-Site", category: "Fleet & Operations" },
  { src: fleet9, title: "Ford Ranger With Site Trailer", category: "Fleet & Operations" },
  { src: fleet10, title: "Site Inspection By KS FUBU Team", category: "Fleet & Operations" },
  { src: residential17, title: "Hillside Modern Residence Build", category: "Residential Construction" },
  { src: residential18, title: "Street Facade Concrete Residence", category: "Residential Construction" },
  { src: residential19, title: "Aerial View Of Concrete Villa Build", category: "Residential Construction" },
  { src: residential20, title: "Estate Residential Development", category: "Residential Construction" },
  { src: structural6, title: "Steel Roof Structure & Concrete Frame", category: "Structural Works" },
  { src: finishes5, title: "Rooftop Terrace & Concrete Finishes", category: "Interior & Finishes" },
  { src: architecture2, title: "Architectural Concrete Column Detail", category: "Architecture & Design" },
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
  "Fleet & Operations",
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
