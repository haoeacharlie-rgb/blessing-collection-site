import type { BlessingInput } from "@/types/blessing";

export const MAX_MESSAGE_LENGTH = 100;
export const MAX_NAME_LENGTH = 24;

export interface ValidationResult {
  success: boolean;
  error?: string;
  value?: BlessingInput;
}

const getCharacterLength = (value: string) => Array.from(value).length;

export function validateBlessingInput(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { success: false, error: "提交内容无效，请稍后再试。" };
  }

  const candidate = input as Record<string, unknown>;
  const rawName = typeof candidate.name === "string" ? candidate.name.trim() : "";
  const rawMessage =
    typeof candidate.message === "string" ? candidate.message.trim() : "";

  if (!rawMessage) {
    return { success: false, error: "请写下你的祝福内容。" };
  }

  if (getCharacterLength(rawMessage) > MAX_MESSAGE_LENGTH) {
    return {
      success: false,
      error: `祝福内容请控制在 ${MAX_MESSAGE_LENGTH} 字以内。`,
    };
  }

  if (rawName && getCharacterLength(rawName) > MAX_NAME_LENGTH) {
    return {
      success: false,
      error: `昵称请控制在 ${MAX_NAME_LENGTH} 字以内。`,
    };
  }

  return {
    success: true,
    value: {
      name: rawName || undefined,
      message: rawMessage,
    },
  };
}

export function countBlessingCharacters(value: string) {
  return getCharacterLength(value);
}

