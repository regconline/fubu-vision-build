import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
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

        {/* Portfolio Grid — Portfolio images to be added by client */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">Our Completed Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We have successfully delivered projects across South Africa for government clients,
                corporate partners and private individuals.
              </p>
            </motion.div>

            {/* Empty grid ready for client images */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-[4/3] bg-section-alt rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted-foreground"
                >
                  <ImageIcon className="w-10 h-10 opacity-30" />
                  <span className="text-sm opacity-50">Project image coming soon</span>
                </motion.div>
              ))}
            </div>
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
