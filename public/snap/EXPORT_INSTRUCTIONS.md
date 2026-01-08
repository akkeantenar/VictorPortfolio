# Export Instructions for Snap Component Architecture Diagram

## File Created

- `component-architecture.svg` - Three-tier component architecture diagram

## Export as PNG

### Option A: Using Figma (Recommended)

1. Open Figma (or create free account)
2. Create new file
3. Copy SVG content from `/public/snap/component-architecture.svg`
4. Paste into Figma canvas
5. Select the diagram
6. Right-click → Export → Choose PNG format
7. Set resolution to 2x for crisp display
8. Save as: `snap-component-architecture.png`

### Option B: Using SVG Viewer

1. Go to https://svgviewer.dev
2. Copy SVG content from `/public/snap/component-architecture.svg`
3. Paste into the viewer
4. Click "Download PNG"
5. Save as: `snap-component-architecture.png`

## Upload to Portfolio

1. Place PNG file in `/public/snap/` directory
2. Update image reference in `app/projects/snap/page.tsx`:
   - Change `src="/snap/component-architecture.svg"` to `src="/snap/component-architecture.png"`

## Current Implementation

The portfolio page currently references the SVG file directly, which Next.js will serve automatically. 
If you export as PNG, update the image `src` attribute accordingly.

## Diagram Description

The diagram shows:
- **Tier 3 (Top):** Prototype Templates (Chat, Calling, AR UX)
- **Tier 2 (Middle):** Interaction Patterns (Chat messages, Presence, Media controls)
- **Tier 1 (Bottom):** Base Primitives (Buttons, Inputs, Lists, Layout)
- **Data Layer:** Mocked GraphQL data, decoupled from production

This visualizes the composition model where higher tiers consume lower tiers, enabling designers to work at the appropriate abstraction level for rapid prototyping.

