"use client";

import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  Shield, 
  Clock, 
  Users, 
  BadgeCheck, 
  HeartHandshake 
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Professional Planning",
    description: "Detailed project planning with transparent timelines and milestones.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We stand behind our work with comprehensive quality assurance.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed to meeting deadlines without compromising quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience.",
  },
  {
    icon: BadgeCheck,
    title: "Fully Certified",
    description: "Registered and compliant with all industry regulations.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused",
    description: "Your vision is our priority. We listen, adapt, and deliver.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Building Trust Through{" "}
              <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Since 2020, K.S FUBU Building Construction has been delivering
              exceptional construction services across Gauteng. Our commitment to
              quality, transparency, and client satisfaction sets us apart.
            </p>
            
            {/* Process Steps */}
            <div className="space-y-4">
              {[
                { step: "01", text: "Consultation & Planning" },
                { step: "02", text: "Design & Approval" },
                { step: "03", text: "Construction & Quality Control" },
                { step: "04", text: "Handover & Support" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl font-heading font-bold text-primary">
                    {item.step}
                  </span>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-section-alt rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
