# Licensed Fonts for ALJ Creative Studio

This folder should contain the licensed font files specified in the brand book.

## Required Font Files:

### Pragmatica (Body Font)
- `Pragmatica-Regular.woff2` (weight: 400)
- `Pragmatica-Bold.woff2` (weight: 700)

### Gotham (Heading Font)
- `Gotham-Medium.woff2` (weight: 500)
- `Gotham-Bold.woff2` (weight: 700)

## File Format
All fonts should be in **WOFF2** format for best performance and browser support.

## License
These are commercial fonts and require a license. Make sure you have the proper licensing before using them in production.

## Fallbacks
If fonts are not available, the system will fall back to:
- **Plus Jakarta Sans** (Google Fonts) - Primary font
- **Montserrat** (Google Fonts) - Display font
- **Inter** (Google Fonts) - Body font fallback
- System fonts as final fallback

## Adding Fonts
1. Place the font files in this directory
2. The layout.tsx file is already configured to load them
3. Restart the development server after adding fonts

## Notes
- Font files are gitignored to avoid licensing issues
- Total font files size should be < 500KB for optimal performance
- WOFF2 provides ~30% better compression than WOFF
