import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const leadership = [
  {
    name: "Katlego Simon Maja",
    role: "Director / CEO & Project Manager",
    qualifications: "BEngTech Civil Engineering (University of Johannesburg) | ECSA Candidate Engineering Technologist",
  },
  {
    name: "Ndivhudzannyi Mashiane",
    role: "Co-Director",
    qualifications: "",
  },
];

const telecomTeam = [
  { name: "Tsotetsi Bafana Andries", role: "RF Engineer & Rope Access Technician" },
  { name: "Okuhle Molisi", role: "RF Technician" },
  { name: "Lucky Titus Ncongwane", role: "Field Engineer (Telecommunications)" },
  { name: "Mnelisi Sicelo Shongwe", role: "RF Technician & Site Engineer" },
  { name: "Kwanele Mncube", role: "Team Leader & Rope Access Specialist" },
  { name: "Zamani Cyril Mkhize", role: "Field Technician" },
  { name: "Jeremia Tshipane", role: "Rope Access Technician" },
  { name: "Mukhethwa Ndou", role: "RF & Maintenance Technician" },
  { name: "Bathromew Fermson Kapininga", role: "Telecommunications Technician" },
];

function TeamCard({ name, role, qualifications, delay = 0 }: { name: string; role: string; qualifications?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-card rounded-xl border border-border p-6 flex items-start gap-4"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <User className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-heading font-bold text-foreground">{name}</h3>
        <p className="text-primary text-sm font-medium mt-0.5">{role}</p>
        {qualifications && (
          <p className="text-muted-foreground text-sm mt-1">{qualifications}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 bg-secondary overflow-hidden">
          <div className="container-wide section-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">About Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                The skilled professionals behind every KS FUBU project — combining engineering expertise,
                technical knowledge and field experience.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Leadership</h2>
              <p className="text-muted-foreground">The directors driving the vision and strategy of KS FUBU.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5 mb-16">
              {leadership.map((person, i) => (
                <TeamCard key={person.name} {...person} delay={i * 0.1} />
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Telecom & Site Team</h2>
              <p className="text-muted-foreground">Our experienced telecommunications and field operations specialists.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {telecomTeam.map((person, i) => (
                <TeamCard key={person.name} {...person} delay={i * 0.05} />
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
