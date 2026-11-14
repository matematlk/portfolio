# Mathilde's portfolio (React + Vite)

## Run it
    npm install
    npm run dev       # http://localhost:5173
    npm run build     # production build in dist/
    npm run preview   # test the build locally

## Where things live
- `src/data/site.js`        name, email, LinkedIn, skills list
- `src/data/projects.js`    every project: tile, title and page content (blocks)
- `src/pages/`              one file per page (Home, Projects, ProjectDetail, About, Contact, NotFound)
- `src/components/`         shared pieces (window frame, landscape, icons, project blocks)
- `src/index.css`           all styles; colours are variables at the top
- `public/images/`          avatar, bird, your photo (`me.jpg`)
- `public/projects/<slug>/` images, PDFs and videos for each project

## Add or edit a project
1. Put its files in `public/projects/<slug>/`.
2. Add or edit its entry in `src/data/projects.js`. The block types are listed at the top of that file.
3. The tile on /projects and the page at /projects/<slug> update automatically.

Missing images show a dashed box saying which file to add, so you can see what's left.

## Images still needed
subno-type (in `public/projects/subno-type/`):
`toolbox.png`, `letter-guidelines.png`, `logo-maker.png`, `logo-formula.png`, `logos.png`

logo design (in `public/projects/logo-design/`):
`previous-logo.png`, `previous-logo-dark.png`

Every project except subno-type: `thumb.png` (the square on the projects page).

## Special pages
- The logo design page is written by hand in `src/pages/projects/LogoDesign.jsx`
  (marked `customPage: true` in projects.js).
- The subno-type font lives in `public/projects/subno-type/subno-type.ttf` and is loaded in `src/index.css`.

## Deploy
Vercel or Netlify: connect the repo, build command `npm run build`, output folder `dist`.
`vercel.json` and `public/_redirects` make links like /projects/subno-type work.
