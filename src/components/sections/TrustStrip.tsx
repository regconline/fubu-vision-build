import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Award, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 150, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 200, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 100, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-heading font-bold text-white">
      {count}{suffix}
    </span>
  );
}

export function TrustStrip() {
  return (
    <section className="bg-secondary py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-wide px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4"
                whileHover={{ scale: 1.15, backgroundColor: "rgba(var(--primary), 0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <div className="mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
