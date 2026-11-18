# Isaac A. Adeniyi — Professional Portfolio

A responsive, single-page portfolio built with HTML5, CSS3 and vanilla JavaScript.

## Project structure

```text
isaac-adeniyi-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   ├── videos/
│   ├── certificates/
│   └── documents/
├── robots.txt
├── sitemap.xml
└── README.md
```

## Run locally

1. Extract the project ZIP.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. The page uses Google Fonts from the internet; the rest is plain HTML, CSS and JavaScript.

## Replace placeholders

### Portrait
Add your real professional photo as:
`assets/images/isaac-portrait.jpg`

The hero currently shows a labelled placeholder, not a generated or stock photograph.

### CV
Add your latest CV PDF as:
`assets/documents/Isaac-Adeniyi-CV.pdf`

The Download CV button points to this exact filename.

### Portfolio media
Replace the sample files with your own work using these names, or update the matching `data-preview` values in `index.html`:

- `assets/videos/AI-Video-Project-01.mp4`
- `assets/videos/Video-Editing-Project-01.mp4`
- `assets/images/Social-Media-Graphic-01.jpg`
- `assets/images/Marketing-Campaign-01.jpg`
- `assets/images/Website-Project-01.png`
- `assets/images/SEO-Project-01.jpg`

The gallery filters by category. Video tiles open a native video player; image tiles open a preview dialog. Only publish genuine work and accurate descriptions.

### Certificates
Add the PDF scans with the exact filenames used in the certificate cards:

- `Google-Ads-Measurement-Certificate.pdf`
- `Google-Foundations-Digital-Marketing-Ecommerce.pdf`
- `Google-Attract-Engage-Customers.pdf`
- `Google-Think-Outside-Box-Email-Marketing.pdf`
- `Citilite-Digital-Marketing-Training.pdf`
- `Honey-Treat-Performance-Marketing.pdf`

All certificate PDFs belong in `assets/certificates/`.

### Social profiles and domain
In `index.html`, replace the LinkedIn placeholder with your real profile URL. Add Instagram when you confirm the correct professional URL. Replace `https://YOUR-DOMAIN.com/` in canonical, Open Graph and sitemap settings with your live domain.

## Contact form

The contact form currently opens the visitor's default email application using a `mailto:` link to `iayomide30@gmail.com`. It does not submit directly to a server. For direct submissions without requiring the visitor's email app, connect a service such as Formspree and update the form according to its current setup instructions.

## SEO and analytics

- Edit the page title and meta description if your positioning changes.
- Update canonical and Open Graph URLs after deploying to your domain.
- `sitemap.xml` and `robots.txt` are starter files; update the sitemap URL to your live domain.
- Google Search Console and GA4 are not connected. Add their verification/tracking codes only after creating and configuring the relevant accounts.

## Deploy to GitHub and Netlify

1. Create a new GitHub repository.
2. Upload the project contents (the files inside this folder, not the ZIP itself).
3. In Netlify, choose **Add new site → Import an existing project**.
4. Connect GitHub and select the repository.
5. For this static site, leave the build command blank and set the publish directory to `.` (the repository root).
6. Deploy. Add your custom domain in Netlify if you have one.
7. After deployment, replace the canonical URL and sitemap URL with the live domain and redeploy.

## Accuracy notes

- The 7,000+ lead figure is a Tronix 360 team result to which Isaac contributed.
- The 2,500 successful deliveries in one month is a team result; Isaac's contribution was through sales closing.
- 20+ professional videos edited is listed as an individual achievement in the CV.
- No testimonials, client campaign results, certificate dates or social profile URLs have been invented.
- Add dates and detailed responsibilities for Aroko Farm and Resort, Xymbolic and MIKLAT only when verified.
