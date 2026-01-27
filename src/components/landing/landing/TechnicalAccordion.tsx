import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TechnicalAccordion() {
  const technicalDetails = [
    {
      title: "Encryption Algorithms",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              XSalsa20-Poly1305 (TweetNaCl)
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              High-performance authenticated encryption. Used by Signal and other privacy-focused tools. 
              Poly1305 provides message authentication to prevent tampering.
            </p>
          </div>
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              Secure Key Generation
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              <span className="font-jetbrains text-xs bg-gray-100 px-2 py-1 rounded">Web Crypto API</span> 
              {" "}keys are generated locally using cryptographically secure random number generators. 
              Your master key never leaves your device.
            </p>
          </div>
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              ChaCha20-Poly1305 (Alternative Cipher)
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              Secondary cipher for devices where AES hardware acceleration isn't available. 
              Provides equivalent security with better performance on mobile processors.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Key Storage & Management",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              Client-Side Key Generation
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              All cryptographic keys are generated in your browser using the Web Crypto API's 
              cryptographically secure random number generator (CSRNG). Keys never leave your device unencrypted.
            </p>
          </div>
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              Secure Key Wrapping
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              Device-specific keys are wrapped using hardware-backed keystores (Web Crypto API + Secure Enclave on iOS, 
              Keystore on Android) ensuring keys can't be extracted even if the device is compromised.
            </p>
          </div>
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              Backup Recovery Phrase
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              Generate a secure recovery phrase to restore your access on new devices. 
              Crucial for Zero-Knowledge systems as we cannot reset your password.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Threat Model & Mitigations",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              Server Compromise Protection
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              Even if our servers are breached, attackers gain only encrypted data blobs. 
              Without your passphrase, data remains cryptographically secure indefinitely.
            </p>
          </div>
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              Man-in-the-Middle (MITM) Prevention
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              TLS 1.3 with certificate pinning ensures transport security. 
              PWA integrity checks via Service Worker verification prevent code injection attacks.
            </p>
          </div>
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              Side-Channel Attack Resistance
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              Constant-time cryptographic operations prevent timing attacks. 
              Memory is securely wiped after cryptographic operations to prevent cold boot attacks.
            </p>
          </div>
          <div>
            <h4 className="font-space-grotesk text-base font-semibold text-charcoal mb-2">
              Metadata Protection
            </h4>
            <p className="font-inter text-sm text-warm-gray leading-relaxed">
              File names, dates, and EXIF data are encrypted alongside image data. 
              Server-side, we only see encrypted blobs with random UUIDs.
            </p>
          </div>
        </div>
      )
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-gradient-to-b from-sky-light/30 to-white">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-space-grotesk text-[36px] lg:text-[48px] font-semibold text-charcoal mb-4">
            Technical Deep Dive
          </h2>
          <p className="font-inter text-lg lg:text-xl text-warm-gray max-w-2xl mx-auto">
            For developers and security researchers who want to understand exactly how we protect your data.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {technicalDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl overflow-hidden border-none"
                  style={{
                    boxShadow: '0 4px 24px rgba(102, 126, 234, 0.08)',
                  }}
                >
                  <AccordionTrigger className="px-6 lg:px-8 py-5 lg:py-6 hover:no-underline hover:bg-gray-50/50 transition-colors">
                    <span className="font-space-grotesk text-lg lg:text-xl font-semibold text-charcoal text-left">
                      {detail.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 lg:px-8 pb-5 lg:pb-6">
                    {detail.content}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
