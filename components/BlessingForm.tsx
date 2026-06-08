"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { BirdIllustration } from "@/components/BirdIllustration";
import {
  countBlessingCharacters,
  MAX_MESSAGE_LENGTH,
  validateBlessingInput,
} from "@/lib/validation/blessing";
import type { BlessingSubmissionResult } from "@/types/blessing";

interface BlessingFormProps {
  onBack: () => void;
  onSuccess: (result: BlessingSubmissionResult) => void;
}

export function BlessingForm({ onBack, onSuccess }: BlessingFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const characterCount = countBlessingCharacters(message);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const validation = validateBlessingInput({ name, message });

    if (!validation.success || !validation.value) {
      setError(validation.error ?? "请检查你的祝福内容。");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/blessings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.value),
      });

      const data = (await response.json()) as {
        error?: string;
        count?: number | null;
        submittedName?: string | null;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "蓝鸟暂时飞远了一点，请稍后再试。");
      }

      onSuccess({
        totalCount: data.count ?? null,
        submittedName: data.submittedName ?? undefined,
      });
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "发生了一点小意外，请稍后再试。",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      key="form"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
      className="paper-card w-full rounded-[32px] border border-white/70 bg-paper/90 px-6 py-8 shadow-card backdrop-blur"
    >
      <div className="mb-2 flex items-center justify-between text-sm text-foreground/65">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full px-3 py-1.5 transition hover:bg-white/60 focus:outline-none focus:ring-4 focus:ring-primary/15"
        >
          返回
        </button>
        <span>Step 2 / 3</span>
      </div>

      <div className="mb-4">
        <BirdIllustration />
      </div>

      <div className="mb-6 space-y-3 text-center">
        <h2 className="text-2xl font-semibold">把祝福轻轻交给蓝鸟</h2>
        <p className="text-sm leading-7 text-foreground/72">
          这是一封会在生日当天送达的信。只需要几句话，就能成为她收到的温柔之一。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-foreground/80">昵称（可选）</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={24}
            placeholder="想匿名也完全没关系"
            className="w-full rounded-[22px] border border-primary/16 bg-white/80 px-4 py-3 text-base outline-none transition placeholder:text-foreground/35 focus:border-primary/45 focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <label className="block space-y-2">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-foreground/80">祝福内容</span>
            <span
              className={`text-xs ${
                characterCount > MAX_MESSAGE_LENGTH ? "text-rose-500" : "text-foreground/45"
              }`}
            >
              {characterCount}/{MAX_MESSAGE_LENGTH}
            </span>
          </div>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            maxLength={MAX_MESSAGE_LENGTH}
            rows={5}
            placeholder="想对她说的话，会被蓝鸟好好珍藏。"
            className="w-full resize-none rounded-[24px] border border-primary/16 bg-white/80 px-4 py-3 text-base leading-7 outline-none transition placeholder:text-foreground/35 focus:border-primary/45 focus:ring-4 focus:ring-primary/10"
          />
        </label>

        {error ? (
          <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-600">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#69addf] focus:outline-none focus:ring-4 focus:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "蓝鸟正在收下祝福..." : "送给蓝鸟"}
        </button>
      </form>
    </motion.section>
  );
}
