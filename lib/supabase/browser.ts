"use client";

import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/types/supabase";

let supabaseBrowserClient:
  | ReturnType<typeof createClient<Database>>
  | undefined;

function getRequiredPublicEnv(
  name: "NEXT_PUBLIC_SUPABASE_URL" | "NEXT_PUBLIC_SUPABASE_ANON_KEY",
) {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      "还没有配置 Supabase。请先补全站点环境变量后再继续提交祝福。",
    );
  }

  return value;
}

export function getSupabaseBrowserClient() {
  if (!supabaseBrowserClient) {
    supabaseBrowserClient = createClient(
      getRequiredPublicEnv("NEXT_PUBLIC_SUPABASE_URL"),
      getRequiredPublicEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );
  }

  return supabaseBrowserClient;
}
