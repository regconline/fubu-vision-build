import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const servicesList = [
  "General Building Construction",
  "Civil Engineering Works",
  "Telecommunications Infrastructure",
  "Structural Works",
  "Fire Safety Upgrades",
  "Roof Services",
  "Damage & Storm Restoration",
  "Window Factory",
  "Kitchen Factory",
  "Transport & Logistics",
];

const WHATSAPP_NUMBER = "27793640439";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Enquiry from Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Service Required:* ${service}\n` +
      `*Message:* ${message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-20 bg-secondary overflow-hidden">
          <div className="container-wide section-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Contact Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Let's Build <span className="text-primary">Together</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Ready to start your project? Get in touch with our team for a free consultation and quote.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground">We'd love to hear from you. Fill out the form or contact us directly.</p>
                </div>

                <div className="space-y-6">
                  <a href="tel:+27793640439" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">+27 79 364 0439</p>
                    </div>
                  </a>

                  <a href="mailto:info@ksfubuconstruction.co.za" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">info@ksfubuconstruction.co.za</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        Block B, Woodmead North Office Park,<br />
                        Maxwell Drive, Waterval City,<br />
                        Midrand, 2090
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">
                        Mon–Fri: 08:30–16:30<br />
                        Sat: 09:30–14:30<br />
                        Sun: By Appointment
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-5 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-section-alt rounded-xl p-8 space-y-6">
                  <h3 className="text-xl font-heading font-bold text-foreground">Send Us a Message</h3>
                  <p className="text-sm text-muted-foreground">This form will open WhatsApp with your details pre-filled — fast and easy.</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+27 XX XXX XXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        data-testid="input-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select required onValueChange={setService} value={service}>
                        <SelectTrigger data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {servicesList.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full gap-2"
                    data-testid="button-submit"
                    disabled={!name || !email || !phone || !service || !message}
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-section-alt">
          <div className="container-wide">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Find Us</h2>
            <div className="rounded-2xl overflow-hidden border border-border h-96">
              <iframe
                title="KS FUBU Building Construction Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.5!2d28.1!3d-25.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573b6c6e0b0a1%3A0x1!2sWoodmead+North+Office+Park%2C+Maxwell+Dr%2C+Waterval+City%2C+Midrand%2C+2090!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
