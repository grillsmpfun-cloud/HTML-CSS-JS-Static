# GrillSMP Lifesteal Season 3 Website

## Overview

A static landing page for GrillSMP Lifesteal Season 3, a Minecraft server event. The site serves as a promotional and informational page for the server's official launch, featuring details about high-stakes PvP gameplay, alliances, and server mechanics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Single-page static website**: All content is contained in a single `index.html` file
- **Inline styling approach**: CSS is embedded directly in the HTML file for faster initial load and reduced HTTP requests
- **No build process**: The site runs directly without compilation or bundling

### Design System
- **CSS Custom Properties**: Uses CSS variables for consistent theming (colors, spacing)
- **Color scheme**: Dark theme with accent color (#f43f5e - rose/red) for highlights
- **Typography**: Plus Jakarta Sans from Google Fonts for modern, clean text

### External Libraries
- **Lucide Icons**: Icon library loaded via CDN (unpkg.com) for UI icons
- **Google Fonts**: Web font delivery for Plus Jakarta Sans

### File Structure
| File | Purpose |
|------|---------|
| `index.html` | Main entry point containing all HTML, CSS, and content |
| `script.js` | Reserved for JavaScript (currently empty) |
| `style.css` | Reserved for external styles (currently empty) |

### Performance Decisions
- Inline CSS chosen over external stylesheet to minimize render-blocking resources
- No JavaScript framework - vanilla approach for a simple landing page
- CDN-hosted dependencies to leverage caching and global distribution

## External Dependencies

| Dependency | Source | Purpose |
|------------|--------|---------|
| Plus Jakarta Sans | Google Fonts CDN | Primary typography |
| Lucide Icons | unpkg.com CDN | UI iconography |

No backend, database, or authentication systems are currently implemented. This is a purely static informational website.