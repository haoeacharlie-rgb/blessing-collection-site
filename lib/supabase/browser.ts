"use client";

import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/types/supabase";

let supabaseBrowserClient:
  | ReturnType<typeof createClient<Database>>
  | undefined;

const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publicSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabaseBrowserClient() {
  if (!publicSupabaseUrl || !publicSupabaseAnonKey) {
    throw new Error(
      "还没有配置 Supabase。请先补全站点环境变量后再继续提交祝福。",
    );
  }

  if (!supabaseBrowserClient) {
    supabaseBrowserClient = createClient(
      publicSupabaseUrl,
      publicSupabaseAnonKey,
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
