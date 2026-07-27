# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Trabajosonline** documentation site, built with [Mintlify](https://mintlify.com/). It provides user documentation for a job platform focused on IT, Fintech, Web3, and Marketing positions, supporting both salaried positions and freelance work.

The documentation is available in **English (default) and Spanish**. English translations were recovered from the previous Docusaurus setup. German translations exist in git history but have not been migrated yet.

## Key Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start Mintlify dev server in watch mode
npm start            # Alias for npm run dev
```

### Build & Deploy
```bash
npm run build        # Generate static build
npm run deploy       # Deploy to Mintlify (requires environment variables)
```

**Deployment requirements**: Before running `npm run deploy`, you must set:
- `MINTLIFY_PROJECT_ID` - obtained from Mintlify dashboard
- `MINTLIFY_API_KEY` - obtained from Mintlify dashboard

Define these in your terminal session or in a `.env` file.

## Architecture

### Multilingual Structure

The documentation uses a **folder-based multilingual structure**:
- `es/` - Spanish documentation (default language)
- `en/` - English documentation
- Language tabs are defined in `mint.json` with Spanish appearing first

### Documentation Structure

Documentation content is organized in language-specific folders (`en/` and `es/`) as `.mdx` files (Markdown with JSX support). The site structure is defined in `mint.json`, which controls:
- Language tabs
- Navigation menu hierarchy (separate for each language)
- Page groupings
- Logo configuration

**Navigation groups** (Spanish version):
- **Introducción**: Platform overview, announcements, airdrop info, fees
- **Guía de inicio**: Getting started guides, profile setup
- **Ofertas y publicaciones**: Finding and publishing job offers
- **Trabajos freelance**: Proposal submission, hiring, contract management, disputes
- **Contratación directa**: Browse and hire freelancers directly by the hour
- **Servicios**: Create and manage gig services
- **Academia crypto**: Cryptocurrency fundamentals, smart contract states
- **API**: MCP setup, REST API docs, search API
- **Extras**: Roadmap, tokenomics

### Content Organization

Documentation follows a feature-based organization within each language folder:
- `{lang}/index.mdx` - Homepage with platform overview and quick links
- `{lang}/guia-inicio/` - Onboarding guides (Getting Started)
- `{lang}/ofertas-trabajo/` - Job searching (Job Offers)
- `{lang}/publicar-oferta/` - Job posting (separated by employment type)
- `{lang}/trabajos-freelance/` - Freelance workflow (Freelance Jobs)
- `{lang}/comenzar-trabajo-freelance/` - Starting freelance work, dispute resolution
- `{lang}/contratacion-directa/` - Direct freelancer hiring by the hour
- `{lang}/servicios/` - Gig/service creation and management
- `{lang}/academia-crypto/` - Educational content on crypto/blockchain (Crypto Academy)
- `{lang}/api/` - MCP setup, REST API docs, search API
- `{lang}/extra/` - Roadmap and tokenomics (Extras)

Where `{lang}` is either `en` or `es`.

### Static Assets

**IMPORTANT**: Mintlify does not automatically serve the `public/` folder like Docusaurus does.

Static assets (images, icons, etc.) must be placed in the `logo/` folder at the project root to be accessible at `/logo/[filename]`.

- Logo files: `logo/logo.png` (current blue logo), `logo/logo-trabajos.jpg` (legacy)
- All documentation images are in `logo/` and referenced in `.mdx` files as `/logo/[filename]`
- The `public/` folder is kept for legacy purposes but is not served by Mintlify

## Important Notes

- This is a **documentation-only** repository (no application code)
- **Multilingual**: Content is available in English (`en/`) and Spanish (`es/`)
- **Default language**: Spanish is the default (first tab)
- Use `.mdx` extension for all documentation pages
- Pages must be stored in the appropriate language folder (`en/` or `es/`)
- After adding new pages, update `mint.json` navigation for both languages
- The site uses Mintlify-specific features and components (check Mintlify docs for available components)
- **Image paths**: Always use `/logo/[filename]` for images, not `/img/` or `/public/`
- Mintlify requires Node.js 20.17+ (not 18.x)
- The legacy `docs/` folder contains old structure and should not be used for new content
