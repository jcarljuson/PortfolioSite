# Jcarl Juson — Portfolio

Clean, responsive portfolio highlighting AI, Robotics, and Neurotechnology work: EMG prosthetic arm, EEG BCI, and NASA Space Apps ExoFinder (Global Nominee).

## About
- Machine Learning & Data Science enthusiast/innovator
- Focus: human–machine interaction across AI, robotics, and neuroscience
- Recognized: NASA International Space Apps Global Nominee (ExoFinder)

## Live Preview (Local)
Run a simple HTTP server from the project root:

```bash
python -m http.server 5500
# then open http://localhost:5500/
```

## Project Structure
- `index.html` — main page
- `styles.css` — layout and typography
- `script.js` — interactions (mobile nav, smooth scroll, About "See more")
- `profile.png`, `prosthetic.png`, `Award.png` — hero and project images
- `assets/` — `placeholder.svg` fallback and notes

## Videos
- Drone showcase: https://youtu.be/xPCSgIPdvKE
- Nov 11, 2025 short: https://youtu.be/oZ-7cu8UVp8
- ExoFinder (NASA Space Apps): https://youtu.be/YCnoxsLb9yI

## Social Links
- Facebook: https://www.facebook.com/jcarlciocsonjuson
- LinkedIn: https://www.linkedin.com/in/jcarl-juson-565796360/

## Deploy
This is a static site; no build step required.

### GitHub
1) Initialize and commit locally (already done).
2) Push to GitHub:

```bash
git remote add origin https://github.com/jcarljuson/PortfolioSite.git
git push -u origin main
```

### Vercel
1) Import the GitHub repo in Vercel.
2) Framework preset: "Other"; Build Command: none; Output Directory: root.
3) Deploy and assign a domain.