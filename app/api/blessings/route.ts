import { NextResponse } from "next/server";

import {
  getSupabaseConfigErrorMessage,
  getSupabaseServerClient,
  hasSupabaseEnv,
} from "@/lib/supabase/server";
import { validateBlessingInput } from "@/lib/validation/blessing";

export async function GET() {
  try {
    if (!hasSupabaseEnv()) {
      return NextResponse.json(
        { error: getSupabaseConfigErrorMessage() },
        { status: 503 },
      );
    }

    const supabase = getSupabaseServerClient();
    const { count, error } = await supabase
      .from("blessings")
      .select("id", { count: "exact", head: true });

    if (error) {
      throw error;
    }

    return NextResponse.json({ count: count ?? 0 });
  } catch (error) {
    console.error("Failed to fetch blessing count:", error);

    return NextResponse.json(
      { error: "暂时还没能数清羽毛，请稍后再试。" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    if (!hasSupabaseEnv()) {
      return NextResponse.json(
        { error: getSupabaseConfigErrorMessage() },
        { status: 503 },
      );
    }

    const payload = await request.json();
    const validation = validateBlessingInput(payload);

    if (!validation.success || !validation.value) {
      return NextResponse.json(
        { error: validation.error ?? "提交内容无效。" },
        { status: 400 },
      );
    }

    const supabase = getSupabaseServerClient();
    const { error: insertError } = await supabase.from("blessings").insert({
      name: validation.value.name ?? null,
      message: validation.value.message,
    });

    if (insertError) {
      throw insertError;
    }

    const { count, error: countError } = await supabase
      .from("blessings")
      .select("id", { count: "exact", head: true });

    if (countError) {
      throw countError;
    }

    return NextResponse.json({
      success: true,
      count: count ?? null,
      submittedName: validation.value.name ?? null,
    });
  } catch (error) {
    console.error("Failed to create blessing:", error);

    return NextResponse.json(
      { error: "蓝鸟暂时没接住这封祝福，请稍后再试。" },
      { status: 500 },
    );
  }
}
