"use client";

import { Share2, Lock, Clock, Shield, Globe } from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureHero from "@/components/features/FeatureHero";
import TechSpecCard from "@/components/features/TechSpecCard";
import FeedbackButton from "@/components/features/FeedbackButton";
import { motion } from "framer-motion";
import CommentSection from "@/components/features/CommentSection";

export default function SecureSharePage() {
  return (
    <FeaturePageLayout>
      <FeatureHero
        title="Secure Link Sharing"
        subtitle="One-Time Burner Links for Sensitive Photos"
        description="Share photos via ephemeral, password-protected links. Content is encrypted locally and only decrypted by the recipient. Zero knowledge for us."
        status="Testing"
        icon={<Share2 className="w-8 h-8" />}
      />

      {/* The Sharing Problem Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-space-grotesk text-[36px] lg:text-[48px] font-semibold text-gray-900 mb-6 text-center">
              The Sharing Problem
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Standard sharing methods expose your private photos to third-party clouds and permanent storage.
            </p>

            {/* Standard Workflow Risks */}
            <div className="space-y-4 mb-12">
              {[
                {
                  step: "1. Messaging Apps Compression",
                  description: "Apps like WhatsApp resize and compress your image, often stripping metadata but keeping a copy on their servers.",
                  risk: "Server-side retention & loss of quality"
                },
                {
                  step: "2. Cloud Storage Links",
                  description: "Public links from GDrive or Dropbox don't guarantee encryption. The provider can see the file.",
                  risk: "Provider access & non-ephemeral access"
                },
                {
                  step: "3. Email Attachments",
                  description: "Email is not encrypted by default. Copies exist in Sent items and Recipient inboxes forever.",
                  risk: "Permanent copies in multiple places"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-lg border border-red-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-space-grotesk text-base font-semibold text-gray-900 mb-2">
                        {item.step}
                      </h3>
                      <p className="font-inter text-sm text-gray-600 mb-2 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="font-inter text-xs text-red-600 font-semibold">
                        Risk: {item.risk}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-red-50 border border-red-200 p-6 rounded-lg text-center"
            >
              <p className="font-inter text-base text-red-900 font-semibold">
                "Once you send a file via standard means, you lose control over it forever."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Burner Link Architecture Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-space-grotesk text-[36px] lg:text-[48px] font-semibold text-gray-900 mb-6 text-center">
              Burner Link Architecture
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-12 text-center leading-relaxed">
              We encrypt the file with a one-time key locally, then invite the recipient to decrypt it via a burner link.
            </p>

            {/* Share Flow */}
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "1. Local Re-Encryption",
                  api: "WebCrypto (AES-GCM)",
                  description: "The photo is decrypted from your vault and re-encrypted with a fresh ephemeral key.",
                  code: `const ephemeralKey = generateKey();
const encrypted = await encrypt(file, ephemeralKey);`
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "2. Metadata Payload",
                  api: "JSON + Password Encrypt",
                  description: "The ephemeral key and file CID are packed into a JSON payload and encrypted with a user-chosen password.",
                  code: `const payload = { key: ephemeralKey, cid: fileCid };
const safePayload = await encryptWithPassword(payload, userPassword);`
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "3. Secure Storage",
                  api: "Supabase (Postgres)",
                  description: "We store ONLY the encrypted payload. We never see the ephemeral key or the file content.",
                  code: `await supabase.from('shared_links').insert({
  encrypted_payload: safePayload,
  expires_at: '24h' 
});`
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "4. Consumption & Burn",
                  api: "Client-Side Decryption",
                  description: "Recipient opens link, enters password. Browser decrypts payload, gets key, fetches file. Link expires.",
                  code: `const payload = await fetchAndDecrypt(linkId, password);
if (payload) {
  const file = await downloadAndDecrypt(payload.cid, payload.key);
  showImage(file);
}`
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="font-mono text-xs text-blue-600 mb-3">
                        {step.api}
                      </p>
                    </div>
                  </div>
                  <p className="font-inter text-sm text-gray-600 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs font-mono overflow-x-auto">
                    {step.code}
                  </pre>
                </motion.div>
              ))}
            </div>

            {/* Key Principle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-green-50 border border-green-200 p-6 rounded-lg text-center"
            >
              <p className="font-inter text-base text-green-900 font-semibold">
                We hold the encrypted data, but you hold the key (password). Logic dictates we cannot spy on you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Requirements Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-space-grotesk text-[36px] lg:text-[48px] font-semibold text-gray-900 mb-6 text-center">
              Technical Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <TechSpecCard
                title="Cryptography"
                variant="current"
                specs={[
                  { label: "Key Derivation", value: "PBKDF2 (100k iterations)" },
                  { label: "Encryption", value: "XSalsa20-Poly1305 (TweetNaCl)" },
                  { label: "Ephemeral Keys", value: "Generated client-side per share" },
                  { label: "Randomness", value: "crypto.getRandomValues()" }
                ]}
              />
              <TechSpecCard
                title="Link Security"
                variant="current"
                specs={[
                  { label: "URL Token", value: "UUIDv4 random identifier" },
                  { label: "Expiration", value: "24 hours hard limit" },
                  { label: "Access Limit", value: "One-time view (Burner)" },
                  { label: "Persistence", value: "Row deleted after access" }
                ]}
              />
            </div>

            {/* Security Analysis */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 mb-4">
                  Threat Model Analysis
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      Can the server admin see the photo?
                    </h4>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed">
                      No. The server only sees an encrypted blob. Without the password (which is never sent to the server in plain text, only used to derive a decryption key locally? Actually in this flow, password encrypts the payload. If we don't store the password, we are safe).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      What if the link is intercepted?
                    </h4>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed">
                      The interceptor would still need the password to decrypt the payload.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      Does the file stay on IPFS?
                    </h4>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed">
                      The encrypted file remains on IPFS, but the key to decrypt it is in the ephemeral payload. Once the payload is burned, the IPFS file is effectively garbage data that no one can read.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback CTA Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="font-space-grotesk text-2xl font-semibold text-gray-900 mb-4">
              Feedback on Secure Sharing
            </h3>
            <p className="font-inter text-base text-gray-600 mb-6 leading-relaxed">
              Is the password flow too friction-heavy? Would you prefer auto-generated magic links?
            </p>
            <FeedbackButton
              featureName="Secure Link Sharing"
              question="Feedback on sharing flow"
              className="text-sm px-6 py-3"
            />
          </motion.div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <CommentSection featureSlug="secure-share" />
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
