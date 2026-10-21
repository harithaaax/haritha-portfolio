# Haritha Venkatesan – Portfolio (React + Vite + Tailwind)

## Run locally
1. Install Node.js (LTS) from https://nodejs.org
2. In this folder run:
   npm install
   npm run dev
3. Open the address shown (usually http://localhost:5173).

## Resume download
Your resume is already at `public/Haritha_Venkatesan_Resume.pdf`.
To update it, replace that file keeping the same name.

## Edit content
All text lives in `src/data.js`.

## Contact form
Without a backend, the form opens the visitor's email app with the message filled in (mailto).
To send directly from the site: create a free form at https://formspree.io, then in
`src/App.jsx` replace the `window.location.href = ...` line with a `fetch('https://formspree.io/f/YOUR_ID', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(f) })`.

## Deploy
Vercel: push to GitHub, import the repo at vercel.com (Vite is auto-detected), click Deploy.
Netlify: build command `npm run build`, publish directory `dist`.
