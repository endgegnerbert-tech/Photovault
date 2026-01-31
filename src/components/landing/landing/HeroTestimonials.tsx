"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Comment {
  id: string;
  author_name: string;
  content: string;
}

export default function HeroTestimonials() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch Top 3 most upvoted comments
    const fetchTop = async () => {
      const { data } = await supabase
        .from("feature_comments")
        .select("id, author_name, content")
        .order("upvotes", { ascending: false })
        .limit(3);
      
      if (data && data.length > 0) {
        setComments(data);
      }
    };
    fetchTop();
  }, []);

  // Auto-Cycle
  useEffect(() => {
    if (comments.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % comments.length);
    }, 5000); // 5 seconds per comment
    return () => clearInterval(interval);
  }, [comments]);

  if (comments.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none hidden lg:block max-w-sm">
        <div className="pointer-events-auto"> 
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                    className="cursor-pointer bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-lg flex items-start gap-3 hover:bg-white/90 transition-colors"
                >
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 flex-shrink-0">
                        <MessageSquare size={16} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-gray-900 text-sm">{comments[currentIndex].author_name}</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                            "{comments[currentIndex].content}"
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
  );
}
