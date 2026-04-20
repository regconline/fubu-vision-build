import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HardHat, Layers, Radio, Wrench, Flame, Home, CloudLightning, AppWindow, UtensilsCrossed, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: HardHat, title: "General Building Construction", description: "Residential homes, commercial buildings, renovations, boundary walls, and general building works.", href: "/services/general-building" },
  { icon: Layers, title: "Civil Engineering Works", description: "Concrete structures, foundations, stormwater drainage, roadworks, earthworks and concrete maintenance.", href: "/services/civil-engineering" },
  { icon: Radio, title: "Telecommunications Infrastructure", description: "Telecom tower construction, foundation casting, equipment shelters, fencing and infrastructure maintenance.", href: "/services/telecommunications" },
  { icon: Wrench, title: "Structural Works", description: "Reinforced concrete beams, rib and block slab systems, structural steel and lintel installation.", href: "/services/structural-works" },
  { icon: Flame, title: "Fire Safety Upgrades", description: "Fire doors, fire walls, fire dampers, rated windows and full project management of safety works.", href: "/services/fire-safety" },
  { icon: Home, title: "Roof Services", description: "Roof repair and maintenance, tiled roof restoration, metal roof installation and replacement.", href: "/services/roof-services" },
  { icon: CloudLightning, title: "Damage & Storm Restoration", description: "Fast storm damage restoration — roofs, gutters, windows, siding, fencing and exterior surfaces.", href: "/services/storm-restoration" },
  { icon: AppWindow, title: "Window Factory", description: "Custom aluminium window manufacturing, supply and installation, safety doors and fly screens.", href: "/services/window-factory" },
  { icon: UtensilsCrossed, title: "Kitchen Factory", description: "Custom kitchen joinery design, manufacture and installation. Capacity of 3 complete kitchens per day.", href: "/services/kitchen-factory" },
  { icon: Truck, title: "Transport & Logistics", description: "Transportation of goods and services across different areas of South Africa.", href: "/services/transport-logistics" },
];

export function Services() {
  return (
    <section className="bg-section-alt section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">Our Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete one-stop solution for all building works — from civil engineering and telecom
            infrastructure to custom manufacturing and storm restoration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Link
                to={service.href}
                className="group block h-full bg-card rounded-xl p-8 shadow-brand-sm hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-border hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link to="/services">View All Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
