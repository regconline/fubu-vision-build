import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import happyMaja from "@/assets/team/happy-maja.jpg";
import pheladiNgobeni from "@/assets/team/pheladi-ngobeni.jpg";
import fransLegwabe from "@/assets/team/frans-legwabe.jpg";
import katlegoMaja from "@/assets/team/katlego-maja.jpg";
import ndivhudzannyiMashiane from "@/assets/team/ndivhudzannyi-mashiane.jpg";

interface LeaderProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  qualifications?: string[];
  featured?: boolean;
}

interface MemberProps {
  name: string;
  role: string;
}

const founders: LeaderProps[] = [
  {
    name: "Katlego Maja",
    role: "CEO & Founder",
    image: katlegoMaja,
    bio: "Founder and Chief Executive Officer of KS FUBU Building Construction. Katlego leads the company's strategic vision, project delivery and engineering excellence across building, civil and telecoms.",
    qualifications: [
      "BSc (Hons) Structural Engineering",
      "Registered Professional Construction Manager",
      "Certified SHEQ & Project Management Practitioner",
    ],
    featured: true,
  },
  {
    name: "Ndivhudzannyi Mashiane",
    role: "Co-Founder",
    image: ndivhudzannyiMashiane,
    bio: "Co-Founder of KS FUBU Building Construction, driving operations, business development and stakeholder partnerships across the company's portfolio.",
    featured: true,
  },
];

const leadership: LeaderProps[] = [
  {
    name: "Happy Maja",
    role: "HR Manager & Finance Officer",
    image: happyMaja,
    bio: "Oversees human resources, payroll and financial operations across all KS FUBU projects.",
  },
  {
    name: "Pheladi Ngobeni",
    role: "Administrator / Secretary",
    image: pheladiNgobeni,
    bio: "Manages company administration, client correspondence and day-to-day office operations.",
  },
  {
    name: "Frans Legwabe",
    role: "Health & Safety Officer",
    image: fransLegwabe,
    bio: "Ensures full compliance with SHEQ standards and on-site safety across every active project.",
  },
];

const constructionManagement: MemberProps[] = [
  { name: "Eric Ngobeni", role: "Construction Manager" },
  { name: "Hendry Maake", role: "Site Manager" },
  { name: "Katlego Maja", role: "Structural Engineer" },
  { name: "Lazarus Nxumalo", role: "Foreman / Supervisor" },
];

const bricklayers: MemberProps[] = [
  { name: "Moses Thomas Masilela", role: "Bricklayer" },
  { name: "Thulani Raymond Mncwabe", role: "Bricklayer" },
  { name: "Edmond Tshuma", role: "Bricklayer" },
  { name: "Neo Makgoka", role: "Bricklayer" },
  { name: "Solomon Nndwamoto Siaruli", role: "Bricklayer" },
  { name: "Thabang Matlala", role: "Bricklayer" },
  { name: "Patric Tlaisego Malatji", role: "Bricklayer" },
  { name: "Phokoane Donald Makuduele", role: "Bricklayer" },
];

const labourers: MemberProps[] = [
  { name: "Sandh Johannes Vilanculo", role: "Labourer" },
  { name: "Joachim Moobi", role: "Labourer" },
  { name: "Matsobane Ezekiel Sathikge", role: "Labourer" },
  { name: "Phataphata Ngobeni", role: "Labourer" },
  { name: "Lucky Kubayi", role: "Labourer" },
  { name: "Mathews Khondlo", role: "Labourer" },
  { name: "Senanelo Kumalo", role: "Labourer" },
  { name: "Tjetjela Ezekiel Ngobeni", role: "Labourer" },
  { name: "Phethugo Jerry Ngomane", role: "Labourer" },
  { name: "Tshepo Steven Maake", role: "Labourer" },
];

const constructionWorkforce: MemberProps[] = [...bricklayers, ...labourers];

const telecomTeam: MemberProps[] = [
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

function LeadershipCard({ leader, delay = 0 }: { leader: LeaderProps; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden shadow-brand-sm hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/5] overflow-hidden bg-section-alt relative">
        <img
          src={leader.image}
          alt={`Portrait of ${leader.name}, ${leader.role} at KS FUBU Building Construction`}
          loading="lazy"
          className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-foreground">{leader.name}</h3>
        <p className="text-primary text-sm font-semibold mt-1 uppercase tracking-wide">{leader.role}</p>
        {leader.bio && <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{leader.bio}</p>}
        {leader.qualifications && leader.qualifications.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Qualifications</p>
            <ul className="space-y-1.5">
              {leader.qualifications.map((q) => (
                <li key={q} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function MemberCard({ name, role, delay = 0 }: MemberProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-card rounded-xl border border-border p-5 flex items-start gap-4 hover:border-primary/40 hover:shadow-brand-md transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <User className="w-5 h-5 text-primary" />
      </div>
      <div className="min-w-0">
        <h3 className="font-heading font-bold text-foreground leading-tight">{name}</h3>
        <p className="text-primary text-sm font-medium mt-1">{role}</p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KS FUBU Building Construction (Pty) Ltd",
    founder: founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
    })),
    employee: [...founders, ...leadership].map((l) => ({
      "@type": "Person",
      name: l.name,
      jobTitle: l.role,
    })),
  };

  return (
    <div className="min-h-screen">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          <div className="container-wide section-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">About Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                The skilled professionals behind every KS FUBU project — combining engineering expertise,
                site management and trusted hands-on experience across building, civil and telecoms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founders */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Founders
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
                Meet The Founders
              </h2>
              <p className="text-muted-foreground">
                The visionaries who built KS FUBU Building Construction from the ground up.
              </p>
            </motion.header>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((leader, i) => (
                <LeadershipCard key={leader.name} leader={leader} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-padding bg-section-alt">
          <div className="container-wide">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Company Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
                Leading From The Front
              </h2>
              <p className="text-muted-foreground">
                Our executive team drives strategy, compliance and operational excellence at KS FUBU.
              </p>
            </motion.header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {leadership.map((leader, i) => (
                <LeadershipCard key={leader.name} leader={leader} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Construction Team */}
        <section className="section-padding bg-section-alt">
          <div className="container-wide">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Construction Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
                Engineering & Site Management
              </h2>
              <p className="text-muted-foreground">
                Our senior construction professionals manage every project from design to handover.
              </p>
            </motion.header>

            <h3 className="text-xl font-heading font-bold text-foreground mb-5">Management & Senior Site Personnel</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {constructionManagement.map((m, i) => (
                <MemberCard key={m.name} {...m} delay={i * 0.05} />
              ))}
            </div>

            <h3 className="text-xl font-heading font-bold text-foreground mb-5">General Workforce</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {constructionWorkforce.map((m, i) => (
                <MemberCard key={m.name} {...m} delay={i * 0.03} />
              ))}
            </div>
          </div>
        </section>

        {/* Telecom & Site Team */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Telecom & Site Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
                Telecommunications Specialists
              </h2>
              <p className="text-muted-foreground">
                Skilled RF engineers, rope-access technicians and field crews delivering telecom infrastructure projects.
              </p>
            </motion.header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {telecomTeam.map((m, i) => (
                <MemberCard key={m.name} {...m} delay={i * 0.04} />
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
