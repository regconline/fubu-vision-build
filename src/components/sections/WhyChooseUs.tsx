import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Shield,
  Clock,
  Users,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

const features = [
  { icon: ClipboardCheck, title: "Professional Planning", description: "Detailed project planning with transparent timelines and milestones." },
  { icon: Shield, title: "Quality Guaranteed", description: "We stand behind our work with comprehensive quality assurance." },
  { icon: Clock, title: "On-Time Delivery", description: "Committed to meeting deadlines without compromising quality." },
  { icon: Users, title: "Expert Team", description: "Skilled professionals with years of industry experience." },
  { icon: BadgeCheck, title: "Fully Certified", description: "Registered and compliant with all industry regulations." },
  { icon: HeartHandshake, title: "Client-Focused", description: "Your vision is our priority. We listen, adapt, and deliver." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const steps = [
  { step: "01", text: "Consultation & Planning" },
  { step: "02", text: "Design & Approval" },
  { step: "03", text: "Construction & Quality Control" },
  { step: "04", text: "Handover & Support" },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              Since 2020, K.S FUBU Building Construction has been delivering exceptional
              construction services across Gauteng. Our commitment to quality, transparency,
              and client satisfaction sets us apart.
            </p>

            <div className="space-y-3">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.span
                    className="text-2xl font-heading font-bold text-primary"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.step}
                  </motion.span>
                  <span className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors" />
                  <span className="text-foreground font-medium text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="bg-section-alt rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
