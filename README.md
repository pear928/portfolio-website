# paramraval.com — Site Files

## Files
- `index.html` — Home / About
- `research.html` — Research & Publications
- `experience.html` — Experience & Education
- `community.html` — Community & Volunteering
- `features.html` — Press, Speaking, Podcasts
- `awards.html` — Awards & Honors
- `style.css` — Shared stylesheet (used by all pages)

## How to deploy on GitHub Pages + custom domain

1. **Create a GitHub account** at github.com if you don't have one.

2. **Create a new repository** named `paramraval.com` (or any name).

3. **Upload all these files** to the repo root (drag & drop on GitHub's interface, or use git).

4. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch → `main` → `/ (root)`
   - Hit Save. Your site will be live at `yourusername.github.io/repo-name`.

5. **Point paramraval.com to GitHub Pages:**
   - Buy `paramraval.com` from Namecheap, Cloudflare, or Google Domains (~$10–15/yr).
   - In your domain registrar's DNS settings, add these A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Also add a CNAME record: `www` → `yourusername.github.io`
   - Back in GitHub Pages settings, add your custom domain: `paramraval.com`
   - Check "Enforce HTTPS" once it activates (takes ~24hrs).

6. **Create a CNAME file** in your repo root containing just:
   ```
   paramraval.com
   ```
   GitHub Pages needs this to serve your custom domain correctly.

## Editing content
All content is plain HTML — just open any `.html` file in a text editor and replace the placeholder text with your real info. The structure of each entry is:

```html
<div class="entry">
  <div class="entry-date">2024</div>
  <div class="entry-body">
    <h3>Title</h3>
    <p>Description.</p>
    <span class="tag">Tag</span>
  </div>
</div>
```

To add a new entry, copy that block and paste it below an existing one. To remove one, delete the whole `<div class="entry">...</div>` block.

## Updating links
- Replace all `href="#"` placeholders with real URLs (LinkedIn, Twitter, email, paper links, etc.)
- Replace `you@paramraval.com` with your actual email everywhere it appears.
