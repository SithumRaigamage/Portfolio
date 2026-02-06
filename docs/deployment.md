# How to Deploy to GitHub Pages

I have configured the project to support deployment to GitHub Pages using the `gh-pages` branch.

## Prerequisites

1.  Ensure your changes are committed to git.
2.  Ensure your repository is connected to GitHub.

## Deployment Steps

1.  **Run the deployment script:**
    This command will build your project (using `npm run build`) and then push the `dist` folder to a `gh-pages` branch on your GitHub repository.

    ```bash
    npm run deploy
    ```

2.  **Configure GitHub Settings:**
    *   Go to your repository on GitHub.
    *   Click on **Settings** tab.
    *   On the left sidebar, click on **Pages**.
    *   Under "Build and deployment", ensure **Source** is set to "Deploy from a branch".
    *   Under "Branch", select **`gh-pages`** and `/ (root)`.
    *   Click **Save**.

3.  **View your site:**
    After a few minutes, your site will be live at:
    `https://SithumRaigamage.github.io/Portfolio/`

## Troubleshooting

*   **Blank page?**
    If you see a blank page, it is usually an issue with the `base` path in `vite.config.ts`. I have already set it to `/Portfolio/`. If your repository name is different, please update the `base` property in `vite.config.ts` to match your repository name (e.g., `/My-Repo-Name/`).

*   **Images not loading?**
    Ensure all assets are referenced correctly.

## updating the site
Make your code changes, commit them, and run:
```bash
npm run deploy
```
