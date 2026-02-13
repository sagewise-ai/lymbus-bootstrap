# Lymbus Dashboard - Bootstrap Version

This project is a conversion of the [Lymbus Dashboard V3](https://github.com/yugeshralli-vm/Lymbusdashboardv3) from Tailwind CSS to Bootstrap 5.

## Conversion Details

- **Original Framework**: Tailwind CSS v4 with arbitrary values
- **New Framework**: Bootstrap 5.3.2
- **Files Converted**: 92 TypeScript/React component files
- **Total Project Size**: 4.9MB

### Key Changes

1. ✅ All Tailwind utility classes converted to Bootstrap 5 equivalents
2. ✅ Arbitrary values (e.g., `w-[1160px]`, `bg-[#374dea]`) converted to inline styles
3. ✅ Bootstrap CSS loaded via CDN in `index.html`
4. ✅ Component structure and functionality preserved
5. ✅ All UI libraries (Radix UI, MUI, Framer Motion) remain intact

### Class Conversion Examples

| Tailwind | Bootstrap | Notes |
|----------|-----------|-------|
| `flex` | `d-flex` | Display flex |
| `absolute` | `position-absolute` | Positioning |
| `items-center` | `align-items-center` | Alignment |
| `justify-between` | `justify-content-between` | Justify content |
| `w-[1160px]` | `style={{width: '1160px'}}` | Arbitrary width → inline style |
| `bg-[#374dea]` | `style={{backgroundColor: '#374dea'}}` | Custom color → inline style |
| `rounded-[10px]` | `style={{borderRadius: '10px'}}` | Custom radius → inline style |
| `gap-[8px]` | `style={{gap: '8px'}}` | Gap → inline style |

## Installation

```bash
# Install dependencies (using npm, yarn, or pnpm)
npm install

# Development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- **React 18.3.1**
- **Bootstrap 5.3.2** (via CDN)
- **Vite 6.3.5** - Build tool
- **TypeScript** - Type safety
- **Radix UI** - Accessible component primitives
- **MUI (Material-UI)** - Additional components
- **Framer Motion** - Animations
- **ApexCharts** - Data visualization
- **React Bootstrap** - React components for Bootstrap

## Project Structure

```
lymbus-bootstrap/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── Dashboard.tsx
│   │       ├── Sidebar.tsx
│   │       ├── Header.tsx
│   │       └── ui/         # Shared UI components
│   ├── imports/            # Figma-generated components
│   ├── styles/
│   │   ├── index.css
│   │   ├── fonts.css
│   │   └── theme.css
│   └── main.tsx
├── index.html              # Bootstrap CDN loaded here
├── package.json
└── vite.config.ts
```

## Conversion Script

The `convert-to-bootstrap.cjs` script was used to automatically convert all Tailwind classes to Bootstrap equivalents. It handles:

- Standard utility class mapping (flex → d-flex, etc.)
- Arbitrary value extraction to inline styles
- Batch processing of all .tsx/.jsx files
- Preservation of component structure

You can run it again with:
```bash
npm run convert
```

## Original Repository

This project is based on: [yugeshralli-vm/Lymbusdashboardv3](https://github.com/yugeshralli-vm/Lymbusdashboardv3)

## License

Same as the original project. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for details.

## Notes

- Some CSS custom properties and font classes remain unchanged (e.g., `font-["Inter:Bold',sans-serif]`)
- Bootstrap is loaded via CDN for simplicity. You can install it via npm if preferred.
- The visual design and layout should match the original Tailwind version closely.
- Some Tailwind-specific features (like arbitrary values) are now inline styles.

## Development

To continue development:

1. Bootstrap utility classes are available globally
2. Use inline styles for exact pixel values (width, height, colors, etc.)
3. Bootstrap components from `react-bootstrap` are available
4. All original dependencies (Radix UI, MUI, etc.) work as before

---

**Converted by**: OpenClaw AI Agent  
**Date**: February 2026  
**Original Author**: yugeshralli-vm
