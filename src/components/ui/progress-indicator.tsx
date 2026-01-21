import React from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  currentStep: number;
  onContinue?: () => void;
  onBack?: () => void;
  totalSteps?: number;
}

const ProgressIndicator = ({
  currentStep = 1,
  onContinue,
  onBack,
  totalSteps = 3,
}: ProgressIndicatorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      {/* Progress Dots */}
      <div className="flex items-center gap-4 relative">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          return (
            <div key={stepNumber} className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "w-2 h-2 rounded-full relative z-10 transition-all",
                  stepNumber <= currentStep ? "bg-[#007AFF]" : "bg-[#E5E5EA]",
                )}
              />
              {stepNumber < totalSteps && (
                <div
                  className={cn(
                    "w-8 h-0.5 transition-all",
                    stepNumber < currentStep ? "bg-[#007AFF]" : "bg-[#E5E5EA]",
                  )}
                />
              )}
            </div>
          );
        })}

        {/* Animated Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${(currentStep / totalSteps) * 100}%`,
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#007AFF]/20 rounded-full"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.5,
          }}
        />
      </div>

      {/* Step Label */}
      <p className="text-sm text-[#6E6E73]">
        Schritt {currentStep} von {totalSteps}
      </p>
    </div>
  );
};

export default ProgressIndicator;
