"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Award,
  ShieldCheck,
  HardHat,
  Calendar,
  Building2,
} from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: HardHat,
    title: "Quality Workmanship",
    description: "Delivering durable, high-standard construction on every project.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & SHEQ Compliance",
    description: "Strict adherence to safety, health, environmental and quality standards.",
  },
  {
    icon: Users,
    title: "Integrity & Transparency",
    description: "Honest communication and clear reporting from start to finish.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Skilled teams committed to client satisfaction on every site.",
  },
];

const milestones = [
  { year: "2020", event: "Company Founded", description: "K.S FUBU Building Construction (Pty) Ltd established by Katlego Maja" },
  { year: "2021", event: "First Major Project", description: "Completed our first commercial building and civil works contract" },
  { year: "2022", event: "Telecoms Division", description: "Expanded into telecommunications tower construction & maintenance" },
  { year: "2023", event: "Infrastructure Growth", description: "Delivered multiple trench excavation and civil engineering projects" },
  { year: "2024", event: "National Reach", description: "Serving clients across South Africa with infrastructure development" },
];

export default function AboutPage() {
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
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Building Excellence Since <span className="text-primary">2020</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                K.S FUBU Building Construction (Pty) Ltd is a South African construction and
                infrastructure development company specialising in civil works, building
                construction, and telecommunications infrastructure — led by Director & CEO
                Katlego Maja.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020 by Director & CEO <strong className="text-foreground">Katlego Maja</strong>,
                    K.S FUBU Building Construction (Pty) Ltd was built on a simple promise: deliver
                    reliable, safe, and high-quality construction solutions that meet client expectations
                    while contributing to South Africa's infrastructure growth.
                  </p>
                  <p>
                    Our work spans building construction, civil engineering, trench excavation,
                    telecommunications tower construction & maintenance, renovations, and
                    infrastructure development — backed by experienced site teams and full SHEQ
                    compliance.
                  </p>
                  <p>
                    Headquartered at Block B, Woodmead North Office Park in Midrand, we serve
                    clients across South Africa, bringing the same dedication to excellence to every
                    project, regardless of size or complexity.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-section-alt rounded-2xl p-8 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt="K.S FUBU Building Construction Logo"
                    className="max-w-xs"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl">
                  <div className="text-4xl font-heading font-bold">5+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-section-alt">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver reliable, safe, and high-quality construction solutions that meet
                  client expectations while contributing to infrastructure development and
                  economic growth across South Africa.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a leading and trusted construction company in South Africa,
                  recognised for professionalism, quality workmanship, and safety compliance
                  across every project we deliver.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                What Drives Us
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-section-alt rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-section-alt">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Experience the Difference
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Licensed & Insured",
                  description: "Fully compliant with all regulations and insurance requirements.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Skilled professionals with years of construction experience.",
                },
                {
                  icon: Calendar,
                  title: "On-Time Delivery",
                  description: "We complete projects on schedule without compromising quality.",
                },
                {
                  icon: Building2,
                  title: "Quality Guaranteed",
                  description: "We stand behind our work with comprehensive warranties.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Milestones & Achievements
              </h2>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 pb-8 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
