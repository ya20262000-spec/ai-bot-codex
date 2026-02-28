# Contributing to All The Cars

Thank you for your interest in contributing.

## Ways to Contribute

- Report bugs
- Propose features and UX improvements
- Improve documentation
- Add/curate automotive data
- Refactor code and improve performance/accessibility

## Development Workflow

### 1) Fork the repository

Use the hosting platform's **Fork** button to create your own copy.

### 2) Clone your fork

```bash
git clone <your-fork-url>
cd ai-bot-codex
```

### 3) Create a branch

Use a focused branch name:

```bash
git checkout -b feat/add-brand-filters
```

Examples:
- `feat/new-compare-ui`
- `fix/filter-empty-state`
- `docs/readme-improvements`

### 4) Make and test changes locally

Run the project:

```bash
python -m http.server 4173
```

Open `http://localhost:4173` and verify your changes.

### 5) Commit changes

Use clear commit messages:

```bash
git add .
git commit -m "feat: add country filter chips on database page"
```

### 6) Push branch

```bash
git push origin feat/add-brand-filters
```

### 7) Open a Pull Request

Create a PR against the default branch and include:

- What changed
- Why it changed
- Screenshots (if UI-related)
- Any testing notes

Use the PR template in `.github/pull_request_template.md`.

## Pull Request Guidelines

- Keep PRs focused and reasonably small
- Update docs when behavior or setup changes
- Avoid unrelated formatting-only changes
- Be respectful in code review discussions

## Code Style

- Keep code readable and consistent with the existing style
- Prefer descriptive naming
- Keep UI responsive and accessible

## Reporting Security Issues

If you discover a security issue, please contact maintainers privately before public disclosure.
