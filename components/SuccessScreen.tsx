"use client";

import { motion } from "framer-motion";

import { BirdIllustration } from "@/components/BirdIllustration";

interface SuccessScreenProps {
  totalCount: number | null;
  submittedName?: string;
  onRestart: () => void;
}

export function SuccessScreen({
  totalCount,
  submittedName,
  onRestart,
}: SuccessScreenProps) {
  return (
    <motion.section
      key="success"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
      className="paper-card w-full rounded-[32px] border border-white/70 bg-paper/90 px-6 py-8 shadow-card backdrop-blur"
    >
      <div className="mb-6 rounded-full bg-storybook-glow">
        <BirdIllustration variant="celebrating" />
      </div>

      <div className="space-y-4 text-center">
        <p className="font-handwriting text-3xl text-primary">Message Received</p>
        <h2 className="text-3xl font-semibold leading-tight text-foreground">
          你的祝福已经被蓝鸟收下
        </h2>
        <p className="text-sm leading-7 text-foreground/74">它会在生日当天送达</p>

        {submittedName ? (
          <p className="mx-auto max-w-[24ch] rounded-full bg-white/70 px-4 py-2 text-sm text-foreground/72">
            谢谢你，{submittedName}
          </p>
        ) : null}

        <div className="rounded-[28px] bg-white/70 px-5 py-5 shadow-soft">
          <p className="text-sm text-foreground/60">蓝鸟已经收集了</p>
          <p className="mt-2 text-4xl font-semibold text-primary">
            {totalCount ?? "..."}
          </p>
          <p className="mt-2 text-base text-foreground/80">
            {typeof totalCount === "number"
              ? `片羽毛`
              : "片羽毛，正在轻轻整理中"}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 w-full rounded-full border border-primary/20 bg-white/80 px-6 py-4 text-base font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15"
      >
        再写一则祝福
      </button>
    </motion.section>
  );
}

