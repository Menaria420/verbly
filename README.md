# Verbly Platform — Frontend Starter

This is a starter frontend scaffold for **Verbly Platform** (Next.js + TypeScript + Tailwind).
It includes mock API routes, NextAuth credentials provider (mock), Redux Toolkit, React Query,
and a number of example pages (home, courses, course detail, dashboard, admin).

## Quick start

1. Extract the zip and `cd` into the project:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the project root with:
   ```
   NEXTAUTH_SECRET=some_long_secret_here
   NEXTAUTH_URL=http://localhost:3000
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

Notes:
- This project uses mock API routes (`/src/app/api/*`) that return dummy data.
- NextAuth is configured with a Credentials provider that validates against mock users.
- Replace mock APIs with your real backend later — the frontend code uses `fetch` and React Query.

