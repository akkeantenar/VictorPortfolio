# Export Instructions for Netflix Portfolio Diagrams

## Files Created

1. `playback-accessibility-prototype.svg` - Playback control mock with accessibility annotations
2. `playback-interaction-flow.svg` - Interaction flow diagram with accessibility checkpoints

## Export as PNG

### Option A: Using Figma (Recommended)

1. Open Figma (or create free account)
2. Create new file
3. Copy SVG content from the `.svg` files
4. Paste into Figma canvas
5. Select the diagram
6. Right-click → Export → Choose PNG format
7. Set resolution to 2x for crisp display
8. Save as:
   - `netflix-playback-accessibility-prototype.png`
   - `netflix-playback-interaction-flow.png`

### Option B: Using SVG Viewer

1. Go to https://svgviewer.dev
2. Copy SVG content from the `.svg` files
3. Paste into the viewer
4. Click "Download PNG"
5. Save with appropriate filename

## Upload to Portfolio

1. Place PNG files in `/public/netflix/` directory
2. Update image references in `app/projects/netflix/page.tsx`:
   - Change `.svg` to `.png` in `src` attributes
   - Example: `src="/netflix/playback-accessibility-prototype.png"`

## Current Implementation

The portfolio page currently references SVG files directly, which Next.js will serve automatically. 
If you export as PNG, update the image `src` attributes accordingly.

## Diagram Descriptions

### Playback Accessibility Prototype
Shows a neutral playback control interface with:
- Play/Pause button with keyboard focus indicator
- Progress scrubber with keyboard seek annotations
- Playback speed control
- Accessibility features legend (keyboard navigation, screen reader support)
- ARIA attribute annotations

### Playback Interaction Flow
Shows a 6-step interaction flow:
1. User presses Play
2. Buffering state
3. Playback resumes
4. User seeks via keyboard
5. UI updates progress
6. Screen reader announces state

Each step includes accessibility checkpoints showing focus management and screen reader announcements.

