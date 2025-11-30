# Deploying to GitHub Pages

This project includes a GitHub Actions workflow that builds the Vite app and deploys the `dist/` folder to GitHub Pages when you push to the `main` branch.

Workflow file: `.github/workflows/deploy.yml`

How it works:

- The workflow installs Node, runs `npm ci`, and runs `npm run build`.
- The `dist/` directory produced by Vite is uploaded and deployed via the official `actions/deploy-pages` action.

Quick checklist before pushing:

1. Ensure your default branch is `main` (or update the workflow branch filter).
2. Confirm `npm run build` completes locally (`dist/` is generated).
3. Consider optimizing large images (e.g. `public/DB.png`) before deploying. Large images hurt page load times.

Manual deploy steps (local):

```powershell
# build locally
npm ci
npm run build

# optionally preview the `dist` folder with a static server
npx serve dist
```

After pushing to `main`, open GitHub → Actions → "Build and Deploy to GitHub Pages" to monitor the run.
