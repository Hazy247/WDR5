Upload these files to the matching locations in your GitHub repo:

1. .eleventy.js -> root of repo
2. _includes/layouts/base.njk -> _includes/layouts/base.njk
3. _includes/layouts/update.njk -> _includes/layouts/update.njk
4. .github/workflows/deploy.yml -> .github/workflows/deploy.yml

Then in GitHub:
Settings -> Pages -> Source -> GitHub Actions

This lets GitHub Pages build the Eleventy site properly and fixes CSS/nav links for https://hazy247.github.io/WDR5/
