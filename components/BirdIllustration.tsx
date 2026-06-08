"use client";

import { motion } from "framer-motion";

interface BirdIllustrationProps {
  variant?: "resting" | "celebrating";
}

export function BirdIllustration({
  variant = "resting",
}: BirdIllustrationProps) {
  const envelopeY = variant === "celebrating" ? -6 : 0;

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="relative mx-auto h-52 w-52"
      aria-hidden="true"
    >
      <div className="absolute inset-4 rounded-full bg-white/70 blur-2xl" />

      <motion.svg
        viewBox="0 0 240 240"
        className="relative h-full w-full drop-shadow-[0_20px_30px_rgba(124,185,232,0.24)]"
      >
        <motion.g
          animate={{ y: envelopeY }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <rect
            x="108"
            y="146"
            width="64"
            height="42"
            rx="12"
            fill="#FFFDF9"
            stroke="#E7C77B"
            strokeWidth="3"
          />
          <path
            d="M108 156 L140 176 L172 156"
            fill="none"
            stroke="#E7C77B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M124 156 C130 150 136 150 140 156 C144 150 150 150 156 156"
            fill="none"
            stroke="#7CB9E8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>

        <ellipse cx="106" cy="192" rx="64" ry="18" fill="#CFE6F8" opacity="0.5" />
        <ellipse cx="96" cy="112" rx="54" ry="48" fill="#7CB9E8" />
        <ellipse cx="88" cy="100" rx="26" ry="24" fill="#E8F5FF" opacity="0.75" />
        <circle cx="134" cy="96" r="34" fill="#93C8EE" />
        <circle cx="146" cy="90" r="7" fill="#3A3A3A" />
        <circle cx="148" cy="88" r="2" fill="#FFFFFF" />
        <path
          d="M164 100 C176 100 182 108 182 116 C172 116 164 112 158 108 Z"
          fill="#F7D794"
        />
        <path
          d="M110 122 C78 116 60 130 58 152 C78 154 100 146 116 136 Z"
          fill="#5DA7DD"
        />
        <path
          d="M118 128 C92 128 72 150 72 182"
          fill="none"
          stroke="#5DA7DD"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M124 130 C140 142 152 160 154 182"
          fill="none"
          stroke="#6FB3E4"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M66 70 C56 56 46 50 34 48"
          fill="none"
          stroke="#7CB9E8"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M60 82 C42 74 28 74 18 78"
          fill="none"
          stroke="#7CB9E8"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <motion.path
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          d="M192 64 C198 54 210 52 216 62 C222 52 234 54 240 64 C240 78 224 86 216 94 C208 86 192 78 192 64 Z"
          fill="#F7D794"
        />
        <motion.path
          animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
          transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          d="M42 30 C48 22 56 24 60 32 C64 24 72 22 78 30 C76 40 66 48 60 54 C54 48 44 40 42 30 Z"
          fill="#D7ECFB"
        />
      </motion.svg>
    </motion.div>
  );
}

