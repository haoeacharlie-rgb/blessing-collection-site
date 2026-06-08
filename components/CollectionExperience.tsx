"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { BlessingForm } from "@/components/BlessingForm";
import { SuccessScreen } from "@/components/SuccessScreen";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import type { JourneyStep, BlessingSubmissionResult } from "@/types/blessing";

export function CollectionExperience() {
  const [step, setStep] = useState<JourneyStep>("welcome");
  const [submission, setSubmission] = useState<BlessingSubmissionResult>({
    totalCount: null,
  });

  function handleSuccess(result: BlessingSubmissionResult) {
    setSubmission(result);
    setStep("success");
  }

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -left-6 top-12 h-24 w-24 rounded-full bg-primary/12 blur-2xl" />
      <div className="pointer-events-none absolute -right-4 bottom-10 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />

      <AnimatePresence mode="wait" initial={false}>
        {step === "welcome" ? <WelcomeScreen onStart={() => setStep("form")} /> : null}

        {step === "form" ? (
          <BlessingForm
            onBack={() => setStep("welcome")}
            onSuccess={handleSuccess}
          />
        ) : null}

        {step === "success" ? (
          <SuccessScreen
            totalCount={submission.totalCount}
            submittedName={submission.submittedName}
            onRestart={() => setStep("form")}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
