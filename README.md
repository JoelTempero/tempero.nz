# Tempero Creative Website

A simple, static website for Tempero Creative - Auckland's creative studio.

## Structure

```
tempero-creative/
├── index.html          # Homepage
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Header/footer injection + interactions
├── images/             # Add your images here
├── pages/
│   ├── about.html
│   ├── team.html
│   ├── services.html
│   ├── news.html
│   ├── contact.html
│   └── portal.html
└── services/
    ├── videography.html
    ├── photography.html
    ├── animation.html
    ├── design.html
    ├── music.html
    └── education.html
```

## Setup

1. Clone this repo
2. Add your images to the `/images` folder
3. Enable GitHub Pages in Settings → Pages → Source: main branch

## Images Needed

Add these images to make the site work:

- `images/hero-bg.jpg` - Homepage hero background
- `images/team/family-photo.jpg` - Team group photo
- `images/team/joel.jpg`, `rachel.jpg`, `james.jpg`, `fraser.jpg`, `sidon.jpg` - Individual portraits
- `images/services/videography-thumb.jpg`, `photography-thumb.jpg`, etc. - Service thumbnails
- `images/services/videography-hero.jpg`, etc. - Service page backgrounds
- `images/news/` - News article images

## Editing Content

- **Header & Footer**: Edit `js/main.js` - the HTML is in the `headerHTML` and `footerHTML` variables
- **Styles**: Edit `css/styles.css`
- **Pages**: Edit the individual HTML files directly

## GitHub Pages

This site is designed to work directly on GitHub Pages with no build step required.
