# ONLY EV — Landing Page (GitHub Pages)

This repo is a static landing page for **ONLYEV.com** (luxury EV buy/sell + AI agent teaser).
It works on GitHub Pages with **no backend**.

## Deploy on GitHub Pages
1. Create a new GitHub repo (example: `onlyev-landing`).
2. Upload these files (or drag-and-drop the zip contents).
3. In GitHub: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Your site will be live at: `https://<your-username>.github.io/<repo>/`

## Add your custom domain (ONLYEV.com)
1. GitHub: **Settings → Pages → Custom domain**
2. Enter your domain (recommended: `onlyev.com` or `www.onlyev.com`)
3. Add DNS records at your domain registrar:
   - If using `www`: create a **CNAME** record to `<your-username>.github.io`
   - If using apex/root `onlyev.com`: add **A records** pointing to GitHub Pages IPs
     (GitHub provides the current IPs in the Pages settings screen.)
4. After enabling the custom domain, GitHub will create/update a `CNAME` file automatically.
   - Alternatively, you can create a `CNAME` file in the repo root containing your domain.

## Notes
- The “Get a cash offer” form generates a `mailto:` email draft to **contact@onlyev.com**
  so it works on GitHub Pages without server code.
- To switch to a real form backend later, replace the form handler in `assets/js/main.js`.
