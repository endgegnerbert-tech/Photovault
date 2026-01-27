import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Apple, Download, Smartphone } from "lucide-react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const waitlistCount = 12900;

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
    
    if (value.length > 0) {
      setIsValid(validateEmail(value));
      if (!validateEmail(value)) {
        setError("Please enter a valid email address");
      }
    } else {
      setIsValid(false);
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      console.log('Submitted:', email);
    }
  };

  return (
    <section className="relative pt-32 pb-32 overflow-hidden min-h-[90vh]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-light to-warm-white" />
      
      {/* Radial gradient overlays */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.12), transparent 50%)'
        }}
      />
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 70% 80%, rgba(167, 139, 250, 0.08), transparent 40%)'
        }}
      />

      {/* Cloud textures */}
      <div className="absolute top-20 left-10 w-64 h-32 bg-white/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-48 bg-indigo-soft/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-80 h-40 bg-violet-gentle/8 rounded-full blur-3xl" />
      <div className="absolute top-60 left-1/2 w-72 h-36 bg-white/20 rounded-full blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: iPhone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div 
              className="relative"
              style={{ 
                transform: 'perspective(1000px) rotate(-8deg) rotateY(-5deg)',
                filter: 'drop-shadow(0 25px 50px rgba(102, 126, 234, 0.2))'
              }}
            >
              {/* iPhone Frame */}
              <div className="w-[260px] h-[530px] lg:w-[300px] lg:h-[610px] bg-charcoal rounded-[45px] p-3 relative">
                {/* Side buttons */}
                <div className="absolute -left-1 top-28 w-1 h-8 bg-charcoal rounded-l-lg" />
                <div className="absolute -left-1 top-40 w-1 h-12 bg-charcoal rounded-l-lg" />
                <div className="absolute -left-1 top-56 w-1 h-12 bg-charcoal rounded-l-lg" />
                <div className="absolute -right-1 top-36 w-1 h-16 bg-charcoal rounded-r-lg" />
                
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-b from-sky-light to-white rounded-[36px] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-charcoal rounded-full" />
                  
                  {/* Gallery Interface */}
                  <div className="pt-12 px-4 h-full">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 px-2">
                      <span className="text-xs text-charcoal font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-charcoal/50 rounded-sm">
                          <div className="w-3/4 h-full bg-success-green rounded-sm" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <h3 className="font-space-grotesk text-base lg:text-lg font-semibold text-charcoal">PrivacyHaven</h3>
                      <p className="text-[10px] lg:text-xs text-warm-gray">Your Secure Gallery</p>
                    </div>
                    
                    {/* Photo Grid */}
                    <div className="grid grid-cols-3 gap-1 mb-4">
                      {[
                        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80',
                        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&q=80',
                        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=80',
                        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=200&q=80',
                        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&q=80',
                        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&q=80',
                      ].map((url, i) => (
                        <div key={i} className="aspect-square rounded-lg overflow-hidden">
                          <img src={url} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>

                    {/* Lock indicator */}
                    <div className="flex items-center justify-center gap-2 py-2 bg-indigo-soft/10 rounded-full mx-4">
                      <svg className="w-3 h-3 text-indigo-soft" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] text-indigo-soft font-medium">End-to-End Encrypted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-soft/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-success-green rounded-full animate-pulse" />
              <span className="text-sm text-indigo-soft font-medium">2026 Privacy Beta</span>
            </motion.div>

            <h1 className="font-syne text-[48px] lg:text-[64px] xl:text-[72px] leading-[1.05] font-bold text-charcoal mb-4">
              PrivacyHaven
            </h1>
            <p className="font-space-grotesk text-xl lg:text-2xl text-charcoal/80 mb-2">
              Join the Privacy Revolution
            </p>
            <p className="font-inter text-base lg:text-lg text-warm-gray mb-6 leading-relaxed max-w-lg">
              Be first to experience military-grade encryption for your photos. 
              Zero-knowledge architecture means only you can see your memories.
            </p>

            {/* Social Proof Counter */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-baseline gap-2">
                <span className="font-syne text-4xl lg:text-5xl font-bold text-indigo-soft">
                  {waitlistCount.toLocaleString()}
                </span>
                <span className="font-inter text-warm-gray text-sm lg:text-base">
                  people want in
                </span>
              </div>
            </motion.div>

            {/* Email Capture Form - Above the fold */}
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="mb-6"
            >
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`h-12 lg:h-14 px-5 font-inter text-base rounded-full border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      error 
                        ? 'border-red-400 focus:border-red-500' 
                        : isValid 
                        ? 'border-success-green focus:border-success-green' 
                        : 'border-gray-200 focus:border-indigo-soft'
                    }`}
                  />
                  {error && (
                    <p className="absolute left-5 -bottom-5 text-xs text-red-500 font-inter">
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={!isValid}
                  className="h-12 lg:h-14 px-8 rounded-full bg-indigo-soft hover:bg-violet-gentle text-white font-inter text-base transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-indigo-soft/25"
                >
                  Join
                </Button>
              </div>
            </motion.form>

            {/* Download Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                variant="outline"
                className="h-11 rounded-full border-2 border-gray-300 hover:border-indigo-soft hover:bg-indigo-soft/5 px-5 transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="mr-2" size={18} />
                <span className="font-inter text-sm">Download Beta</span>
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-full border-2 border-gray-300 hover:border-indigo-soft hover:bg-indigo-soft/5 px-5 transition-all duration-300 hover:scale-[1.02]"
              >
                <Apple className="mr-2" size={18} />
                <span className="font-inter text-sm">iOS</span>
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-full border-2 border-gray-300 hover:border-indigo-soft hover:bg-indigo-soft/5 px-5 transition-all duration-300 hover:scale-[1.02]"
              >
                <Smartphone className="mr-2" size={18} />
                <span className="font-inter text-sm">PWA</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
