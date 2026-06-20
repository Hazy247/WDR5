# WDR5 Connect starter website

A starter GitHub Pages website for a family-led WDR5 community site.

## What is included

- Homepage
- About WDR5 page
- Our Story page
- Updates page with sample cards
- Family Registry page
- Resources page
- Contact page
- Decap CMS admin folder

## How to publish on GitHub Pages

1. Create a new GitHub repository, for example `wdr5-connect`.
2. Upload all files in this folder to the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/root`.
6. Save.

Your site will appear at:
`https://YOUR-GITHUB-USERNAME.github.io/wdr5-connect/`

## Decap CMS setup

Open `admin/config.yml` and replace:

`YOUR-GITHUB-USERNAME/YOUR-REPOSITORY-NAME`

with your real GitHub username and repo name.

Decap CMS also needs GitHub authentication. The easiest route is to use Netlify Identity, or set up a GitHub OAuth app. I can help configure this next.

## Forms

The Registry and Contact pages contain placeholder boxes. Replace them with a form from:

- Tally
- Formspree
- Google Forms
- Airtable Forms

For sensitive family details, use a private form/database, not plain GitHub files.
