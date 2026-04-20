import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HardHat, Wrench, Radio, Layers, Flame, Home, CloudLightning, AppWindow, UtensilsCrossed, Truck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "general-building",
    icon: HardHat,
    title: "General Building Construction",
    description: "From single-storey homes to commercial buildings, we deliver complete building solutions with quality craftsmanship.",
    features: [
      "Residential houses (single & double storey)",
      "Commercial buildings",
      "Renovations and alterations",
      "Boundary walls and paving",
      "Bathroom and kitchen upgrades",
      "Re-painting of buildings",
      "Replacement of floor coverings",
      "Glazing of broken windows",
      "Patching of holes in walls",
      "Brickwork repair",
      "Graffiti removal and protective coatings",
      "Repair of roof leaks",
    ],
  },
  {
    slug: "civil-engineering",
    icon: Layers,
    title: "Civil Engineering Works",
    description: "Expert civil engineering solutions for structures, drainage, and infrastructure development across South Africa.",
    features: [
      "Concrete structures",
      "Foundations and slabs",
      "Stormwater drainage",
      "Roadworks and earthworks",
      "Spalling concrete detection and repair",
      "Concrete maintenance using high quality products",
      "Prevention of structural deterioration",
    ],
  },
  {
    slug: "telecommunications",
    icon: Radio,
    title: "Telecommunications Infrastructure",
    description: "Specialised telecom tower construction and maintenance, ensuring full compliance with engineering and safety standards.",
    features: [
      "Construction of telecom towers",
      "Bases and plinths",
      "Tower foundation excavations and casting",
      "Equipment shelter construction",
      "Tower fencing and security installations",
      "Maintenance of existing telecom infrastructure",
      "Upgrading of existing telecom infrastructure",
      "Full compliance with engineering standards",
    ],
  },
  {
    slug: "structural-works",
    icon: Wrench,
    title: "Structural Works",
    description: "Robust structural solutions including reinforced concrete systems and structural steel installations.",
    features: [
      "Reinforced concrete beams and slabs",
      "Rib and block slab systems",
      "Structural steel installations",
      "Lintel manufacturing",
      "Lintel installation",
    ],
  },
  {
    slug: "fire-safety",
    icon: Flame,
    title: "Fire Safety Upgrades",
    description: "Comprehensive fire safety upgrades with minimal disruption to your tenancy, including project management of all related trades.",
    features: [
      "Replacement of fire doors",
      "Installation of fire walls",
      "Fire damper replacement units",
      "Fire rated windows",
      "Repair of fire damage",
      "Project management of electrical works",
      "Project management of fire extinguisher works",
      "Engagement of other trades as required",
    ],
  },
  {
    slug: "roof-services",
    icon: Home,
    title: "Roof Services",
    description: "All aspects of roofing work performed by fully qualified tradesmen with extensive experience.",
    features: [
      "Roof repair and maintenance",
      "Tiled roof restoration",
      "Metal roof installation",
      "Metal roof replacement",
    ],
  },
  {
    slug: "storm-restoration",
    icon: CloudLightning,
    title: "Damage & Storm Restoration",
    description: "Fast, professional disaster and storm damage restoration services with qualified professionals dispatched promptly.",
    features: [
      "Disaster and hail storm damage restoration",
      "Exterior paint damage repair",
      "Siding damage repair",
      "Gutter damage repair",
      "Fence damage repair",
      "Window damage repair",
      "Roof damage repair",
      "Fast quotes and responsive service",
    ],
  },
  {
    slug: "window-factory",
    icon: AppWindow,
    title: "Window Factory",
    description: "Specialised aluminium window manufacturing and installation — all products custom made to order in our factory.",
    features: [
      "Aluminium window manufacturing",
      "Supply and installation of replacement windows",
      "Safety doors",
      "Fly screens",
      "Custom made to order",
      "Experienced installation teams",
    ],
  },
  {
    slug: "kitchen-factory",
    icon: UtensilsCrossed,
    title: "Kitchen Factory",
    description: "Custom kitchen joinery design, manufacture and installation — from budget kitchens to marble bench top kitchens.",
    features: [
      "Custom kitchen joinery design",
      "Manufacture and installation",
      "Capacity of 3 complete kitchens per day",
      "Budget kitchen solutions",
      "Marble bench top kitchens",
      "Tailored solutions for all budgets",
      "Onsite joinery workshop",
      "Personal attention from cabinet makers",
    ],
  },
  {
    slug: "transport-logistics",
    icon: Truck,
    title: "Transport & Logistics",
    description: "Reliable transportation of goods and services to different areas across South Africa.",
    features: [
      "Transportation of goods",
      "Transportation of services",
      "Coverage across South Africa",
    ],
  },
];

export default function Services() {
  const { slug } = useParams();

  const activeService = slug ? services.find((s) => s.slug === slug) : null;

  if (activeService) {
    const Icon = activeService.icon;
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="relative py-20 bg-secondary overflow-hidden">
            <div className="container-wide section-padding">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                  <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                  <ChevronRight size={14} />
                  <span className="text-primary">{activeService.title}</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
                    {activeService.title}
                  </h1>
                </div>
                <p className="text-lg text-white/80 leading-relaxed">{activeService.description}</p>
              </motion.div>
            </div>
          </section>

          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">What We Offer</h2>
                  <ul className="space-y-3">
                    {activeService.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-section-alt rounded-2xl p-8 h-fit">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">Contact our team for a free consultation and quote on your {activeService.title.toLowerCase()} project.</p>
                  <Button variant="hero" size="lg" asChild className="w-full">
                    <Link to="/contact">Request Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <a
                    href="https://wa.me/27793640439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    WhatsApp Us Now
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="section-padding bg-section-alt">
            <div className="container-wide">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Explore Our Other Services</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.filter((s) => s.slug !== activeService.slug).map((s) => {
                  const SIcon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <SIcon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 bg-secondary overflow-hidden">
          <div className="container-wide section-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Services</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Comprehensive <span className="text-primary">Building Solutions</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                We provide a complete one-stop solution for all building works — from civil engineering
                to telecom infrastructure, fire safety, and custom manufacturing.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="group block bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-brand-lg transition-all duration-300 p-6 h-full"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                      <span className="flex items-center gap-1 text-sm font-medium text-primary">
                        Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our team is ready to help bring your construction vision to life.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
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
