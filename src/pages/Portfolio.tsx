import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Ruler, ArrowRight, X } from "lucide-react";
import office1 from "@/assets/office-exterior-1.jpg";
import office2 from "@/assets/office-exterior-2.jpg";
import office3 from "@/assets/office-exterior-3.jpg";
import officeConstruction from "@/assets/office-construction.jpg";
import boardroom1 from "@/assets/office-boardroom-1.jpg";
import boardroom2 from "@/assets/office-boardroom-2.jpg";

const categories = ["All", "Commercial", "Residential", "Renovations", "Civil & Telecoms", "Architectural"];

const projects = [
  {
    id: 1,
    title: "Woodmead North Office Park — Block B",
    category: "Commercial",
    location: "Maxwell Drive, Waterval City, Midrand",
    year: "2024",
    size: "3,200 m²",
    description: "Premium A-grade commercial office development featuring a striking steel pergola facade, full-height glazing, and landscaped pedestrian access. Our team delivered structural construction, interior boardroom fit-outs, and external civil works across the precinct.",
    services: ["Building Construction", "Civil Works", "Interior Fit-out"],
    image: office1,
    images: [office1, office2, office3, boardroom1, boardroom2],
  },
  {
    id: 2,
    title: "Executive Boardroom Fit-Out",
    category: "Commercial",
    location: "Woodmead North, Midrand",
    year: "2024",
    size: "180 m²",
    description: "Bespoke executive boardroom and meeting suite fit-outs featuring custom feature ceilings, glass partitioning, premium carpeting, and integrated AV. Designed for corporate tenants requiring a refined, productive workspace.",
    services: ["Interior Renovations", "Electrical Works", "Finishings"],
    image: boardroom1,
    images: [boardroom1, boardroom2, office2],
  },
  {
    id: 3,
    title: "Steel-Frame Commercial Build",
    category: "Civil & Telecoms",
    location: "Midrand, Gauteng",
    year: "2023",
    size: "2,500 m²",
    description: "Heavy structural steel and civil works for a multi-storey commercial building, including foundation excavation, steelwork erection, and curtain-wall preparation. Delivered on programme with full SHEQ compliance.",
    services: ["Civil Engineering", "Trench Excavation", "Structural Works"],
    image: officeConstruction,
    images: [officeConstruction, office1, office3],
  },
  {
    id: 4,
    title: "Modern Family Residence",
    category: "Residential",
    location: "Midrand, Gauteng",
    year: "2024",
    size: "450 m²",
    description: "A stunning contemporary 4-bedroom home featuring open-plan living, floor-to-ceiling windows, and a seamless indoor-outdoor flow. The design maximizes natural light while maintaining privacy.",
    services: ["Architectural Plans", "Full Construction", "Landscaping"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
  },
  {
    id: 5,
    title: "Executive Office Complex",
    category: "Commercial",
    location: "Sandton, Johannesburg",
    year: "2023",
    size: "2,800 m²",
    description: "A state-of-the-art office building designed for productivity and sustainability. Features include smart building technology, green roof systems, and flexible workspace configurations.",
    services: ["Engineering Consultants", "Full Construction", "Electrical Works"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    ],
  },
  {
    id: 6,
    title: "Heritage Home Restoration",
    category: "Renovations",
    location: "Pretoria East",
    year: "2024",
    size: "320 m²",
    description: "Complete restoration of a 1920s heritage property, preserving original architectural features while integrating modern amenities. A perfect blend of old-world charm and contemporary comfort.",
    services: ["Building Renovations", "Plumbing Works", "Waterproofing"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    ],
  },
  {
    id: 7,
    title: "Luxury Villa Blueprint",
    category: "Architectural",
    location: "Midrand, Gauteng",
    year: "2024",
    size: "680 m²",
    description: "Comprehensive architectural plans for a luxury estate featuring infinity pool, entertainment pavilion, and smart home integration. Design emphasizes sustainable living with solar orientation.",
    services: ["Architectural Plans", "Engineering Consultants"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
  },
  {
    id: 8,
    title: "Retail Shopping Center",
    category: "Commercial",
    location: "Boksburg, Ekurhuleni",
    year: "2023",
    size: "5,200 m²",
    description: "Modern retail development with 24 retail units, underground parking, and pedestrian-friendly design. The project transformed an underutilized site into a thriving commercial hub.",
    services: ["Full Construction", "Plumbing Works", "Electrical Works"],
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80",
    ],
  },
  {
    id: 10,
    title: "Contemporary Townhouse Complex",
    category: "Residential",
    location: "Centurion, Gauteng",
    year: "2023",
    size: "1,800 m²",
    description: "A development of 8 modern townhouses with shared amenities including pool and clubhouse. Each unit features private gardens, double garages, and energy-efficient design.",
    services: ["Architectural Plans", "Full Construction", "Landscaping"],
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
  },
  {
    id: 11,
    title: "Kitchen & Living Transformation",
    category: "Renovations",
    location: "Edenvale, Gauteng",
    year: "2024",
    size: "85 m²",
    description: "Complete open-plan renovation removing walls to create a flowing kitchen, dining, and living area. Features custom cabinetry, quartz countertops, and underfloor heating.",
    services: ["Building Renovations", "Plumbing Works", "Electrical Works"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
  },
  {
    id: 9,
    title: "Industrial Warehouse Facility",
    category: "Commercial",
    location: "Isando, Ekurhuleni",
    year: "2022",
    size: "4,500 m²",
    description: "Large-scale industrial facility with office component, loading bays, and specialized ventilation systems. Built to accommodate heavy machinery and high-volume logistics operations.",
    services: ["Engineering Consultants", "Full Construction", "Waterproofing"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    ],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-deep-charcoal via-trust-navy to-deep-charcoal overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-warm-amber rounded-full blur-3xl" />
          </div>
          
          <div className="container-wide section-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Our Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Projects That{" "}
                <span className="text-primary">Define Excellence</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Explore our collection of completed projects showcasing our commitment 
                to quality craftsmanship and innovative design across residential, 
                commercial, and renovation sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted/50 sticky top-[72px] z-30 backdrop-blur-md border-b border-border">
          <div className="container-wide section-padding">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-24">
          <div className="container-wide section-padding">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveImageIndex(0);
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-brand-sm hover:shadow-brand-lg transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                          {project.category}
                        </span>
                        
                        {/* View Project Button */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <Button variant="hero" size="sm" className="w-full gap-2">
                            View Project <ArrowRight size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-primary" />
                            {project.location.split(",")[0]}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-primary" />
                            {project.year}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Ruler size={14} className="text-primary" />
                            {project.size}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-wide section-padding">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "15,000+", label: "Square Meters Built" },
                { value: "4", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Gallery */}
              <div className="relative h-64 sm:h-80 lg:h-96">
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === activeImageIndex 
                          ? "bg-primary w-8" 
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{selectedProject.year}</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <MapPin size={18} className="text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">{selectedProject.location}</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <Ruler size={18} className="text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Project Size</div>
                    <div className="font-medium">{selectedProject.size}</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <Calendar size={18} className="text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Completed</div>
                    <div className="font-medium">{selectedProject.year}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service) => (
                      <span
                        key={service}
                        className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-lg"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="/contact">Start a Similar Project</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Portfolio;
