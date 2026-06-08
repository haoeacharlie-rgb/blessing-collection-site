"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { validateBlessingInput } from "@/lib/validation/blessing";
import type { BlessingInput, BlessingSubmissionResult } from "@/types/blessing";

async function getBlessingCount() {
  const supabase = getSupabaseBrowserClient();
  const { count, error } = await supabase
    .from("blessings")
    .select("id", { count: "exact", head: true });

  if (error) {
    throw error;
  }

  return count ?? 0;
}

export async function submitBlessing(
  input: BlessingInput,
): Promise<BlessingSubmissionResult> {
  const validation = validateBlessingInput(input);

  if (!validation.success || !validation.value) {
    throw new Error(validation.error ?? "请检查你的祝福内容。");
  }

  const supabase = getSupabaseBrowserClient();
  const { error: insertError } = await supabase.from("blessings").insert({
    name: validation.value.name ?? null,
    message: validation.value.message,
  });

  if (insertError) {
    throw insertError;
  }

  const totalCount = await getBlessingCount();

  return {
    totalCount,
    submittedName: validation.value.name,
  };
}
