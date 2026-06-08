# Blessing Collection Site

送给 crush 的互动生日网站第一阶段项目，用于尽快上线收集祝福。

## Tech Stack

- Next.js 15+
- TypeScript（strict）
- Tailwind CSS
- Framer Motion
- Supabase

## 本地运行

1. 安装依赖：

```bash
npm install
```

2. 复制环境变量：

```bash
copy .env.example .env.local
```

3. 填入 Supabase URL 和 anon key。

4. 启动开发环境：

```bash
npm run dev
```

默认访问地址为 [http://localhost:3000](http://localhost:3000)。

## 数据库准备

在 Supabase SQL Editor 中执行 [supabase/blessings.sql](/C:/Users/Haoea/Documents/Codex/2026-06-08/project-crush-1-blessing-collection-site/supabase/blessings.sql)。

## 部署到 Vercel

1. 将项目上传到 Git 仓库。
2. 在 Vercel 导入该仓库。
3. 在 Project Settings -> Environment Variables 中添加：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. 点击 Deploy。

## 项目结构

```text
app/
  api/blessings/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  BirdIllustration.tsx
  BlessingForm.tsx
  CollectionExperience.tsx
  SuccessScreen.tsx
  WelcomeScreen.tsx
lib/
  supabase/server.ts
  validation/blessing.ts
supabase/
  blessings.sql
types/
  blessing.ts
```

## 扩展方向

当前架构已经将页面流程、插画组件、数据接口与校验逻辑拆开，后续可以平滑接入生日当天展示站、蓝鸟动画、祝福墙和手写信模块。
