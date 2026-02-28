# Repository Settings for Open-Source Readiness

This document explains the maintainer steps that must be configured in your Git hosting platform (for example GitHub).

## 1) Make the Repository Public

1. Open repository **Settings**.
2. Navigate to **General**.
3. Locate **Danger Zone**.
4. Change repository visibility to **Public**.

## 2) Configure Branch Protection

1. Open **Settings → Branches**.
2. Add a branch protection rule for your default branch (for example `main`).
3. Recommended settings:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (recommended: at least 1)
   - ✅ Dismiss stale approvals when new commits are pushed (optional)
   - ✅ Require status checks to pass before merging (if CI exists)
   - ✅ Restrict force pushes

## 3) Pull Request-Centric Collaboration

Ensure contributors use forks + PRs and that direct pushes to the protected branch are disabled.

## 4) Optional Professional Enhancements

- Add a CODEOWNERS file for review routing
- Add a SECURITY.md policy
- Add CI checks (lint, tests, formatting)
