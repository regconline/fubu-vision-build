import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const credentials = [
  "CIPC Registered Company",
  "SARS Tax Compliant",
  "CSD (Central Supplier Database) Registered",
  "B-BBEE Level 1 Contributor — 135% Procurement Recognition — 100% Black Owned",
  "CIDB Registered",
  "NHBRC Registered",
  "COIDA Registered",
  "Insured — R1,000,000 Coverage (Outsurance)",
  "ECSA Accredited",
];

export default function CompanyProfile() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 bg-secondary overflow-hidden">
          <div className="container-wide section-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">About Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Company <span className="text-primary">Profile</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                KS FUBU Building Construction (Pty) Ltd — a fully registered and compliant South African construction company.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">About KS FUBU Building Construction</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    KS FUBU Building Construction (Pty) Ltd is a fully registered and compliant South African
                    construction company specialising in civil engineering, general building works, telecom tower
                    construction, structural works, and infrastructure development.
                  </p>
                  <p>
                    Our clients and partners include some of the largest and most established companies and
                    government agencies in South Africa. Using our combined experience, technical expertise and
                    local knowledge, we deliver projects and services that contribute to the community, our economy
                    and future generations.
                  </p>
                  <p>
                    We provide a complete one-stop solution for all building works, small or large.
                  </p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="bg-section-alt rounded-2xl p-8 flex items-center justify-center">
                  <img src={logo} alt="KS FUBU Building Construction Logo" className="max-w-xs" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-section-alt">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are a company that prides itself on its family culture. We seek out and attract high-calibre
                people who bring unique skills, energy, expertise, experience and perspectives to our workforce.
                We believe in nurturing the skills of our team members and providing growing levels of responsibility.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Compliance & Credentials</h2>
              <div className="bg-section-alt rounded-2xl p-8 border border-border">
                <ul className="space-y-4">
                  {credentials.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-muted-foreground italic">
                  All compliance documentation available upon request.
                </p>
                <div className="mt-6">
                  <Button variant="secondary" size="lg" asChild>
                    <a href="/KS_FUBU_Company_Profile-2026.pdf" download>
                      Download Company Profile <Download className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">Contact our team for a free consultation and quote on your project.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-transparent text-white border-white/30 hover:bg-white/10">
                  <Link to="/about/team">Meet Our Team</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
