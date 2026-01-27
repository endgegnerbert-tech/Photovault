import { Shield, Lock, FileCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SecurityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function SecurityCard({ icon, title, description, index }: SecurityCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1], delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl p-8 lg:p-10 cursor-pointer transition-shadow duration-300"
      style={{
        boxShadow: '0 4px 24px rgba(102, 126, 234, 0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(102, 126, 234, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(102, 126, 234, 0.08)';
      }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-indigo-soft/20 to-violet-gentle/10 rounded-2xl flex items-center justify-center mb-6">
        <div className="text-indigo-soft">
          {icon}
        </div>
      </div>
      <h3 className="font-space-grotesk text-xl lg:text-2xl font-semibold text-charcoal mb-3">
        {title}
      </h3>
      <p className="font-inter text-sm lg:text-base text-warm-gray leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function SecurityGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const cards = [
    {
      icon: <Lock size={28} strokeWidth={2} />,
      title: "Military-Grade Encryption",
      description: "TweetNaCl with XSalsa20-Poly1305 encryption. AES-256-GCM with PBKDF2 key derivation. The same encryption trusted by governments."
    },
    {
      icon: <Shield size={28} strokeWidth={2} />,
      title: "Zero-Knowledge Architecture",
      description: "We never see your encryption keys. All encryption happens locally in your browser. Even our engineers can't access your data."
    },
    {
      icon: <FileCheck size={28} strokeWidth={2} />,
      title: "GDPR Compliant (EU)",
      description: "Built with European privacy standards. Hetzner EU servers. Your data sovereignty is guaranteed with full control over deletion."
    }
  ];

  return (
    <section id="security" ref={ref} className="scroll-mt-20 py-32 lg:py-40 bg-gradient-to-b from-white to-sky-light/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-violet-gentle/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-soft/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-[1280px] mx-auto px-8 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-space-grotesk text-[36px] lg:text-[48px] font-semibold text-charcoal mb-4">
            Security Architecture
          </h2>
          <p className="font-inter text-lg lg:text-xl text-warm-gray max-w-2xl mx-auto">
            Built on principles that put your privacy first, always.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <SecurityCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
