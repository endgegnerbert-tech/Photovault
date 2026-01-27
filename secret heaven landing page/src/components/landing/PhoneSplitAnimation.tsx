import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Smartphone, Lock, Cloud, Eye } from "lucide-react";

interface SplitTileProps {
  index: number;
  isActive: boolean;
  imageUrl: string;
  title: string;
  description: string;
  bullet: string;
  icon: React.ReactNode;
  delay: number;
}

function SplitTile({ index, isActive, imageUrl, title, description, bullet, icon, delay }: SplitTileProps) {
  const tilePositions = [
    { x: -350, y: -180, rotate: -8 },
    { x: -120, y: -180, rotate: -3 },
    { x: 120, y: -180, rotate: 3 },
    { x: 350, y: -180, rotate: 8 },
  ];
  
  const pos = tilePositions[index];
  
  return (
    <motion.div
      initial={{ 
        x: 0, 
        y: 0, 
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1 
      }}
      animate={isActive ? {
        x: pos.x,
        y: pos.y,
        rotateY: pos.rotate * 3,
        rotateX: -15,
        scale: 0.85,
        opacity: 1
      } : {
        x: 0,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      className="absolute w-[130px] h-[200px] origin-center cursor-pointer"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Card face */}
      <div 
        className="w-full h-full rounded-2xl overflow-hidden relative"
        style={{
          boxShadow: isActive 
            ? '0 20px 50px rgba(102, 126, 234, 0.3), 0 0 0 1px rgba(102, 126, 234, 0.1)' 
            : '0 4px 12px rgba(0, 0, 0, 0.1)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Image portion */}
        <div className="w-full h-full bg-gray-200 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
            style={{
              objectPosition: `${index * 25}% 50%`
            }}
          />
          {/* Encryption overlay when active */}
          {isActive && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80"
            />
          )}
        </div>
        
        {/* Info overlay when split */}
        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 + delay }}
              className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-soft/20 backdrop-blur-sm flex items-center justify-center mb-2">
                {icon}
              </div>
              <h4 className="font-space-grotesk text-xs font-semibold text-white mb-1">
                {title}
              </h4>
              <p className="text-[10px] text-white/70 leading-tight">
                {bullet}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function PhoneSplitAnimation() {
  const [isSplit, setIsSplit] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  const tiles = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      title: "Your Photo",
      description: "Upload your photo → Encrypts locally",
      bullet: "Never leaves device unencrypted",
      icon: <Smartphone className="w-5 h-5 text-white" />
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      title: "TweetNaCl",
      description: "TweetNaCl encryption (XSalsa20)",
      bullet: "Unique nonce, Poly1305 MAC",
      icon: <Lock className="w-5 h-5 text-white" />
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      title: "IPFS Hetzner",
      description: "EU IPFS (Hetzner servers)",
      bullet: "Only CID + encrypted noise",
      icon: <Cloud className="w-5 h-5 text-white" />
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      title: "Zero Knowledge",
      description: "Useless to server, perfect to you",
      bullet: "Only YOUR key decrypts",
      icon: <Eye className="w-5 h-5 text-white" />
    }
  ];

  const handleInteraction = () => {
    setIsSplit(!isSplit);
  };

  return (
    <section 
      ref={ref}
      className="py-32 bg-gradient-to-b from-warm-white to-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-soft/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-gentle/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-8 lg:px-20">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk text-[40px] lg:text-[48px] font-semibold text-charcoal mb-4">
            How Your Photos Stay Protected
          </h2>
          <p className="font-inter text-lg lg:text-xl text-warm-gray max-w-2xl mx-auto">
            Click the phone to see how we split, encrypt, and distribute your photos 
            across secure servers.
          </p>
        </motion.div>

        {/* 3D Split Animation Area */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Central iPhone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={handleInteraction}
            onMouseEnter={() => setIsSplit(true)}
            onMouseLeave={() => setIsSplit(false)}
            className="relative cursor-pointer z-10"
            style={{
              perspective: '1500px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Glow effect on hover */}
            <motion.div
              animate={{
                boxShadow: isSplit 
                  ? '0 0 60px 20px rgba(102, 126, 234, 0.3)' 
                  : '0 0 0 0px rgba(102, 126, 234, 0)'
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-[50px] -z-10"
            />

            {/* iPhone Container */}
            <motion.div
              animate={{
                rotateY: isSplit ? 0 : -5,
                rotateX: isSplit ? 10 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* iPhone Frame */}
              <div 
                className="w-[280px] h-[560px] bg-charcoal rounded-[45px] p-3 relative"
                style={{
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.25))'
                }}
              >
                {/* Side buttons */}
                <div className="absolute -left-1 top-28 w-1 h-8 bg-charcoal rounded-l-lg" />
                <div className="absolute -left-1 top-40 w-1 h-12 bg-charcoal rounded-l-lg" />
                <div className="absolute -left-1 top-56 w-1 h-12 bg-charcoal rounded-l-lg" />
                <div className="absolute -right-1 top-36 w-1 h-16 bg-charcoal rounded-r-lg" />

                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[36px] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-charcoal rounded-full z-30" />

                  {/* Screen content - the image that will split */}
                  <div 
                    className="absolute inset-3 top-12 rounded-2xl overflow-hidden"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Main image (visible when not split) */}
                    <motion.div
                      animate={{ opacity: isSplit ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                        alt="Your photo"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white text-sm font-medium">Tap to encrypt</p>
                        <p className="text-white/70 text-xs">See how it works</p>
                      </div>
                    </motion.div>

                    {/* Grid placeholder when split */}
                    <motion.div
                      animate={{ opacity: isSplit ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-indigo-soft/20 to-violet-gentle/20 flex items-center justify-center"
                    >
                      <div className="text-center p-4">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-indigo-soft/20 flex items-center justify-center">
                          <Lock className="w-8 h-8 text-indigo-soft" />
                        </div>
                        <p className="text-charcoal font-space-grotesk font-semibold text-sm">Encrypting...</p>
                        <p className="text-warm-gray text-xs mt-1">Splitting into secure tiles</p>
                      </div>
                    </motion.div>

                    {/* The 4 split tiles */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {tiles.map((tile, index) => (
                        <SplitTile
                          key={index}
                          index={index}
                          isActive={isSplit}
                          imageUrl={tile.imageUrl}
                          title={tile.title}
                          description={tile.description}
                          bullet={tile.bullet}
                          icon={tile.icon}
                          delay={index * 0.08}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info cards positioned around when split */}
          <AnimatePresence>
            {isSplit && (
              <>
                {/* Bottom info cards */}
                {tiles.map((tile, index) => (
                  <motion.div
                    key={`info-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      x: (index - 1.5) * 220
                    }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.1,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                    style={{ 
                      marginLeft: `${(index - 1.5) * 220}px`
                    }}
                  >
                    <div 
                      className="w-[200px] p-4 bg-white rounded-2xl text-center"
                      style={{
                        boxShadow: '0 4px 24px rgba(102, 126, 234, 0.12)'
                      }}
                    >
                      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-indigo-soft/10 flex items-center justify-center">
                        <div className="text-indigo-soft">{tile.icon}</div>
                      </div>
                      <h4 className="font-space-grotesk text-sm font-semibold text-charcoal mb-1">
                        {tile.title}
                      </h4>
                      <p className="text-xs text-warm-gray leading-snug">
                        {tile.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Instruction text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-warm-gray mt-4"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-soft rounded-full animate-pulse" />
            Hover or tap the phone to see the encryption process
          </span>
        </motion.p>
      </div>
    </section>
  );
}
