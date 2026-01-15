"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  HardHat,
  Settings,
  Wrench,
  Droplets,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Compass,
    title: "Architectural Works (Plans)",
    slug: "architectural-works",
    description: "Professional architectural plans and designs tailored to your vision.",
    features: [
      "Custom residential designs",
      "Commercial building plans",
      "Renovation blueprints",
      "3D visualization & modeling",
      "Council submission drawings",
      "As-built documentation",
    ],
    process: [
      "Initial consultation to understand your vision",
      "Site assessment and feasibility study",
      "Concept design development",
      "Detailed drawings and specifications",
      "Council approval assistance",
      "Construction documentation",
    ],
  },
  {
    icon: HardHat,
    title: "Building Renovations & Contractors",
    slug: "renovations",
    description: "Complete renovation services and general contracting for all property types.",
    features: [
      "Kitchen & bathroom renovations",
      "Room additions & extensions",
      "Structural alterations",
      "Commercial fit-outs",
      "Heritage building restoration",
      "Complete home makeovers",
    ],
    process: [
      "Property assessment and planning",
      "Design and costing proposal",
      "Permit acquisition if required",
      "Demolition and preparation",
      "Construction and finishing",
      "Final inspection and handover",
    ],
  },
  {
    icon: Settings,
    title: "Engineering Consultants",
    slug: "engineering",
    description: "Expert engineering consultation for complex construction requirements.",
    features: [
      "Structural engineering",
      "Civil engineering",
      "Foundation design",
      "Retaining wall solutions",
      "Structural assessments",
      "Engineering certifications",
    ],
    process: [
      "Initial engineering assessment",
      "Load and stress calculations",
      "Design development",
      "Documentation and drawings",
      "Construction supervision",
      "Certification and sign-off",
    ],
  },
  {
    icon: Wrench,
    title: "Plumbing & Electrical Works",
    slug: "plumbing-electrical",
    description: "Licensed plumbing and electrical installations for new builds and renovations.",
    features: [
      "New installations",
      "Upgrades and repairs",
      "Hot water systems",
      "Electrical panel upgrades",
      "Underground services",
      "Compliance certificates",
    ],
    process: [
      "Assessment and quotation",
      "Material procurement",
      "Installation work",
      "Testing and commissioning",
      "Compliance certification",
      "Warranty documentation",
    ],
  },
  {
    icon: Droplets,
    title: "Waterproofing & Landscaping",
    slug: "waterproofing",
    description: "Protect and beautify your property with our specialized services.",
    features: [
      "Roof waterproofing",
      "Basement waterproofing",
      "Deck and balcony sealing",
      "Garden design & installation",
      "Irrigation systems",
      "Paving and outdoor living",
    ],
    process: [
      "Site inspection and diagnosis",
      "Solution recommendation",
      "Surface preparation",
      "Application of systems",
      "Quality testing",
      "Maintenance guidelines",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          <div className="container-wide section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Comprehensive <span className="text-primary">Building Solutions</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                From architectural design to final finishes, we offer a complete range of
                construction services to bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-wide space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                    What We Offer
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="default" size="lg" asChild>
                    <Link href="/contact">
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`bg-section-alt rounded-xl p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-lg font-heading font-bold text-foreground mb-6">
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {service.process.map((step, stepIndex) => (
                      <div key={step} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                          {stepIndex + 1}
                        </div>
                        <p className="text-muted-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our team is ready to
                help bring your construction vision to life.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link href="/contact">
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
