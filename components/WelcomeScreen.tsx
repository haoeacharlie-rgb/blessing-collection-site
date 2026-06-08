"use client";

import { motion } from "framer-motion";

import { BirdIllustration } from "@/components/BirdIllustration";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.section
      key="welcome"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
      className="paper-card w-full rounded-[32px] border border-white/70 bg-paper/90 px-6 py-8 shadow-card backdrop-blur"
    >
      <div className="mb-6 rounded-full bg-storybook-glow">
        <BirdIllustration />
      </div>

      <div className="space-y-4 text-center">
        <p className="font-handwriting text-3xl text-primary">Blue Bird Post</p>
        <h1 className="text-3xl font-semibold leading-tight text-foreground">
          我正在为一位特别的人准备生日惊喜。
        </h1>
        <p className="mx-auto max-w-[28ch] text-sm leading-7 text-foreground/75">
          如果愿意的话，请留下你的祝福。蓝色小鸟会悄悄收好，在最合适的那一天送达。
        </p>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="mt-8 w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#69addf] focus:outline-none focus:ring-4 focus:ring-primary/25"
      >
        参与祝福
      </button>
    </motion.section>
  );
}

