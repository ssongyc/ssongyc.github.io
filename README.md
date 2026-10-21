# ssongyc.github.io

Personal GitHub Pages homepage for Robert Song, available at
[https://ssongyc.github.io/](https://ssongyc.github.io/).

## Site Content

- `20+ years` of game, mobile app, and e-commerce development experience.
- Portfolio cards for released apps and games, including LED POP, Subway Master,
  and decibella 2.
- Additional professional projects and community experience.
- Contact email rendered as an image to reduce basic text scraping. Image OCR can
  still detect the address.

## Structure

- `index.html`: page content and external store links.
- `styles.css`: responsive layout and visual styles.
- `analytics.js`: production-only Google Analytics initialization and click tracking.
- `assets/apps/`: optimized portfolio and contact images used by the page.

## Analytics

- GA4 property and web stream: `Robert Song Homepage` (property `559873310`,
  stream `16170527815`).
- Measurement ID: `G-K69VCLRJP0`.
- Collection runs only on `ssongyc.github.io`; local and preview hosts are disabled.
- Standard page views are enabled. Enhanced measurement is disabled to avoid
  duplicate outbound-link events.
- `app_link_click` records portfolio link clicks with the app name, category,
  destination type, and URL.
- `navigation_click` records in-page navigation with its section and location.
- Event-scoped custom dimensions are registered for `app_name`, `app_category`,
  `destination_type`, `section`, and `menu_location`.

## Deploy

GitHub Pages is configured to publish from the `main` branch and repository root
of `ssongyc/ssongyc.github.io`. Pushing changes to `main` triggers the Pages
deployment workflow.
