# Cozy Cup

A responsive one-page coffee shop website using plain HTML, CSS, and JavaScript. No build step, packages, external fonts, images, or services are required.

## Open

Extract the ZIP and open `index.html` in a browser. Keep `styles.css` and `script.js` beside it.

## Publish on GitHub Pages

1. Upload the extracted files to the root of a GitHub repository.
2. In the repository, open Settings → Pages.
3. Choose Deploy from a branch, select your branch and `/ (root)`, then Save.

## Customize before publishing

The menu, USD prices, and opening hours are illustrative. Replace them in `index.html`. If you change prices, update each item's `data-price` too. Replace both occurrences of `hello@cozycup.example` with the real shop email. The `.example` address is an intentionally reserved placeholder and cannot receive messages.

## Interactions

- Menu category filters with pressed state and screen reader announcements.
- Hot/iced switch; iced drinks cost an additional $0.50. Bakery prices remain fixed.
- Random coffee recommendation that avoids repeating the previous pick.
- Collapsible mobile navigation with Escape support.
- Section navigation, contact email link, and back-to-top link.

The page also supports keyboard focus, reduced motion, and a skip-to-content link. Menu content remains visible without JavaScript; JavaScript is required for filters and mobile navigation expansion.
