# Dhanya Sridhar — Portfolio

Personal portfolio website for Dhanya Sridhar, Senior SDET.

## Live Site

[dhavig.github.io/dhanya-portfolio](https://dhavig.github.io/dhanya-portfolio)

## Stack

- **Next.js 15** (App Router) with static export (`output: 'export'`)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (scroll reveals)
- **next/font** (Inter)
- Hosted on **GitHub Pages** via GitHub Actions

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # generates ./out for deploy
```

## Deploy

Push to `main`; the workflow in `.github/workflows/deploy.yml` builds and publishes
`./out` to the `github-pages` environment.
