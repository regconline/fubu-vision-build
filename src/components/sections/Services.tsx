import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Compass, 
  HardHat, 
  Settings, 
  Wrench, 
  Droplets, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Compass,
    title: "Architectural Works",
    description:
      "Professional architectural plans and designs tailored to your vision. From concept to construction drawings.",
    href: "/services/architectural-works",
  },
  {
    icon: HardHat,
    title: "Building Renovations & Contractors",
    description:
      "Complete renovation services and general contracting for residential and commercial properties.",
    href: "/services/renovations",
  },
  {
    icon: Settings,
    title: "Engineering Consultants",
    description:
      "Expert engineering consultation for structural, civil, and project engineering requirements.",
    href: "/services/engineering",
  },
  {
    icon: Wrench,
    title: "Plumbing & Electrical Works",
    description:
      "Licensed plumbing and electrical installations, repairs, and maintenance services.",
    href: "/services/plumbing-electrical",
  },
  {
    icon: Droplets,
    title: "Waterproofing & Landscaping",
    description:
      "Protect your property with professional waterproofing and transform outdoor spaces with landscaping.",
    href: "/services/waterproofing",
  },
];

export function Services() {
  return (
    <section className="bg-section-alt section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive building solutions from concept to completion. We deliver
            quality workmanship with attention to every detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
