System-Vocabulary-Viewer: A Next.js-based single-page application designed to help developers easily browse and reference essential system development vocabulary. Perfect for quick lookups and learning key terms in software engineering, architecture, and DevOps. Streamline your knowledge with a clean, intuitive interface!

## Deployment

The application is deployed using GitHub Actions and hosted at [https://koumatsumoto.github.io/system-vocabulary-viewer/](https://koumatsumoto.github.io/system-vocabulary-viewer/)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Updating data.json

To update the data.json file with the latest system vocabulary data, run:

```bash
curl -o src/app/data.json https://raw.githubusercontent.com/koumatsumoto/system-vocabulary-parser/refs/heads/main/data/output-translated.json
```

## Code Formatting

To format your code using Prettier, run:

```bash
npm run fmt
```

This will automatically format all code files in the project according to our style guidelines.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
