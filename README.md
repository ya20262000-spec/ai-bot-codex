# All The Cars

A premium, responsive, open-source web catalog for exploring automotive brands and models from early classics to modern EVs and hypercars.

> **Note:** This repository provides a structured, expandable foundation and a representative seed dataset. It is not yet a complete canonical archive of every car ever produced.

## Project Purpose

**All The Cars** aims to provide a modern and contributor-friendly automotive encyclopedia frontend with:

- A luxury, high-end visual design (gold/black/silver theme)
- Fast client-side browsing and filtering
- Dedicated brand and model detail views
- A maintainable codebase that welcomes community contributions

## Features

- Premium homepage with featured brands and latest models
- Searchable database with filters for:
  - Brand
  - Year
  - Category
  - Country
- Dedicated car pages with:
  - Image
  - Year of release
  - Engine specs
  - Horsepower
  - Country of origin
  - Description
- Dedicated brand pages with:
  - Brand profile image/logo
  - History summary
  - Associated models in the dataset
- Favorites and compare features powered by `localStorage`
- Responsive layout for desktop, tablet, and mobile
- Smooth transitions and luxury hover effects

## Project Structure

```text
.
├── app.js                 # Routing + UI behavior
├── data.js                # Seed data for brands and cars
├── index.html             # Page shell
├── styles.css             # Theme and responsive styling
├── CONTRIBUTING.md        # Contribution workflow
├── LICENSE                # MIT license
└── .github/
    ├── pull_request_template.md
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        └── feature_request.md
```

## Installation & Local Run

### Prerequisites

- Python 3 (for a simple static server)
  - or any static HTTP server of your choice

### Run locally

1. Clone the repository:
   ```bash
   git clone <your-fork-or-repo-url>
   cd ai-bot-codex
   ```
2. Start a static server:
   ```bash
   python -m http.server 4173
   ```
3. Open your browser:
   ```
   http://localhost:4173
   ```

## Contributing

We welcome contributions from the community.

- Start with [CONTRIBUTING.md](./CONTRIBUTING.md)
- Open an issue for bugs or feature proposals
- Submit pull requests using the provided template

## Open-Source Governance Checklist

To operate this project professionally in a hosting platform like GitHub, maintainers should ensure:

- Repository visibility is set to **Public**
- Branch protection is enabled for the default branch (for example `main`) with:
  - Pull requests required before merge
  - At least 1 approval recommended
  - Optional status checks required before merge

A step-by-step guide is provided in `docs/REPOSITORY_SETTINGS.md`.

## License

This project is licensed under the [MIT License](./LICENSE).
