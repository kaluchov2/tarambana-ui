# Tarambana UI

This project is a modern [Next.js](https://nextjs.org) app bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), using [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4#css-first-configuration) with the new zero-config, CSS-first approach.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4#css-first-configuration) (CSS-first configuration)

## Tailwind CSS v4 Setup

This project uses Tailwind CSS v4 with the new zero-configuration, CSS-first setup:

- No `tailwind.config.js/ts` file is required for basic usage.
- Tailwind is enabled by adding `@import "tailwindcss";` to `src/app/globals.css`.
- The PostCSS config (`postcss.config.mjs`) includes the `@tailwindcss/postcss` plugin.
- You can start using Tailwind utility classes in your components immediately.

For more details, see the [Tailwind CSS v4.0 Blog](https://tailwindcss.com/blog/tailwindcss-v4#css-first-configuration).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
