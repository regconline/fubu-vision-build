import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-primary z-[100] rounded-r-full"
      style={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
}
