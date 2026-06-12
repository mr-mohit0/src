"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function PremiumCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, {
    stiffness: 150,
    damping: 20,
  });

  const rotateY = useSpring(x, {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set((mouseX - centerX) / 15);
    y.set(-(mouseY - centerY) / 15);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-8">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        {/* Glow */}
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 blur-2xl"
        />

        <Card className="relative w-[380px] overflow-hidden border-white/10 bg-zinc-900/90 backdrop-blur-xl">
          <CardContent className="p-8">
            {/* Floating Icon */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <Sparkles className="h-14 w-14 text-violet-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-3xl font-bold text-white"
            >
              Premium Motion Card
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-zinc-400"
            >
              Mouse move karo aur 3D tilt effect dekho.
            </motion.p>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mt-8"
            >
              <Button className="w-full">Get Started</Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
