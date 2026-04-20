import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const quickMessages = [
  "Hi — I'd like a quote for a renovation.",
  "I need architectural plans for a new build.",
  "Can you help with plumbing/electrical work?",
  "I'd like to discuss a commercial project.",
];

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "27793640439";

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
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
            {/* Header */}
            <div className="bg-green-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">K.S FUBU Construction</p>
                  <p className="text-sm text-white/80">
                    Typically replies within 1 hour
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Hi there! How can we help you today? Choose a quick message or
                type your own:
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
                className="block w-full mt-4 px-4 py-3 bg-green-600 text-white text-center rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-brand-lg flex items-center justify-center transition-colors ${
          isOpen ? "bg-foreground" : "bg-green-600"
        }`}
        aria-label="Toggle WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </motion.button>
    </div>
  );
}
