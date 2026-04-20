import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const quickMessages = [
  "Hi — I'd like a quote for a building project.",
  "I need information about civil engineering works.",
  "I'm interested in telecommunications infrastructure.",
  "I'd like to discuss a renovation project.",
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "27793640439";

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 bg-card rounded-2xl shadow-brand-xl border border-border overflow-hidden"
          >
            <div className="bg-[#25D366] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="font-bold">KS FUBU Construction</p>
                  <p className="text-sm text-white/80">Typically replies within 1 hour</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Hi there! How can we help you today? Choose a quick message or type your own:
              </p>
              <div className="space-y-2">
                {quickMessages.map((message) => (
                  <button
                    key={message}
                    onClick={() => handleQuickMessage(message)}
                    className="w-full text-left px-4 py-3 bg-section-alt rounded-lg text-sm hover:bg-muted transition-colors"
                  >
                    {message}
                  </button>
                ))}
              </div>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 bg-[#25D366] text-white text-center rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <WhatsAppIcon />
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-brand-lg flex items-center justify-center transition-colors ${isOpen ? "bg-foreground" : "bg-[#25D366]"}`}
        aria-label="Toggle WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <WhatsAppIcon />
        )}
      </motion.button>
    </div>
  );
}
