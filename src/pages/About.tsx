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
  Building2
} from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our dealings.",
  },
  {
    icon: HardHat,
    title: "Excellence",
    description: "We strive for excellence in every project, big or small.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients to bring their visions to life.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on the quality of our work and materials.",
  },
];

const milestones = [
  { year: "2020", event: "Company Founded", description: "K.S FUBU Building Construction established in Kempton Park" },
  { year: "2021", event: "First Major Project", description: "Completed our first commercial building renovation" },
  { year: "2022", event: "Team Expansion", description: "Grew our team of skilled professionals" },
  { year: "2023", event: "100+ Projects", description: "Reached milestone of 100 completed projects" },
  { year: "2024", event: "Industry Recognition", description: "Recognized for excellence in construction" },
];

const About = () => {
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
                K.S FUBU Building Construction (Pty) Ltd is a proudly South African construction
                company dedicated to delivering exceptional building solutions for residential and
                commercial clients across Gauteng.
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
                    Founded in 2020, K.S FUBU Building Construction emerged from a passion for
                    creating spaces that inspire and endure. Our founder envisioned a construction
                    company that would prioritize quality, integrity, and client satisfaction above all.
                  </p>
                  <p>
                    Today, we've grown into a trusted name in the Gauteng construction industry,
                    known for our comprehensive range of services including architectural works,
                    building renovations, engineering consultancy, and specialized trades like
                    plumbing, electrical, and waterproofing.
                  </p>
                  <p>
                    Based in Kempton Park, we serve clients throughout Gauteng and beyond,
                    bringing the same dedication to excellence to every project, regardless of size.
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
                    src={logo}
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
                  To deliver exceptional construction services that exceed client expectations,
                  while maintaining the highest standards of quality, safety, and professionalism.
                  We are committed to building lasting relationships through transparent communication
                  and reliable project delivery.
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
                  To be the leading construction company in Gauteng, recognized for our innovative
                  solutions, sustainable practices, and unwavering commitment to excellence.
                  We envision shaping skylines and communities through buildings that stand
                  the test of time.
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
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-section-alt">
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
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2" />
                    
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <div className="bg-card rounded-xl p-6 border border-border inline-block text-left">
                        <span className="text-2xl font-heading font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-lg font-heading font-bold text-foreground mt-2">
                          {milestone.event}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Calendar, value: "5+", label: "Years Experience" },
                { icon: Building2, value: "150+", label: "Projects Completed" },
                { icon: Users, value: "200+", label: "Happy Clients" },
                { icon: Award, value: "100%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
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
};

export default About;
