# WDR5 Update Template Pack

Use this to make GitHub-based updates easier.

## What to upload/replace

1. Upload `updates/TEMPLATE-copy-and-edit.md` into your `updates` folder.
2. Replace your current `updates.html` with the included `updates.html`.
3. Replace `_includes/layouts/update.njk` with the included one.
4. Open `assets/UPDATE-CSS-ADD-TO-STYLES.css`, copy its contents, and paste them at the bottom of your existing `assets/styles.css`.

## How to create a new update

1. In GitHub, open the `updates` folder.
2. Open `TEMPLATE-copy-and-edit.md`.
3. Click the three dots or copy the file content.
4. Create a new file, for example:

   `updates/2026-06-20-new-update.md`

5. Paste the template in.
6. Edit:
   - title
   - date
   - summary
   - category
   - image
   - imageAlt
   - body text
7. Commit changes.

GitHub Actions will rebuild the site.

## Images

Upload images to:

`assets/images/`

Then use:

`/WDR5/assets/images/your-image-name.jpg`

For the card image, use:

`image: "/WDR5/assets/images/your-image-name.jpg"`

For an image inside the post, use:

`![Description](/WDR5/assets/images/your-image-name.jpg)`
