# Export Instructions for MNTN Portfolio Diagrams

## Files Created

1. `architecture-diagram.svg` - System architecture diagram
2. `workflow-diagram.svg` - UX workflow diagram  
3. `state-machine-example.ts` - TypeScript code example

## Option A: SVG → PNG (Recommended)

### Using Figma:
1. Open Figma (or create free account)
2. Create new file
3. Paste SVG content from the `.svg` files
4. Select the diagram
5. Right-click → Export → Choose PNG format
6. Set resolution (recommend 2x for crisp display)
7. Save as:
   - `mntn-ai-prototyping-overview.png` (architecture)
   - `mntn-ai-workflow.png` (workflow)

### Using SVG Viewer:
1. Go to https://svgviewer.dev
2. Paste SVG content
3. Click "Download PNG"
4. Save with appropriate filename

## Option B: Mermaid → PNG (Alternative)

If you prefer Mermaid diagrams:
1. Go to https://mermaid.live
2. Paste Mermaid code
3. Click "Actions" → "Download PNG"
4. Save with appropriate filename

## Upload to Portfolio

1. Place PNG files in `/public/mntn/` directory
2. Update image references in `app/projects/mntn/page.tsx`:
   - Change `.svg` to `.png` in `src` attributes
   - Example: `src="/mntn/architecture-diagram.png"`

## Current Implementation

The portfolio page currently references SVG files directly, which Next.js will serve automatically. 
If you export as PNG, update the image `src` attributes accordingly.

## Quality Check

Before finalizing:
- [ ] All diagrams are visible and readable
- [ ] No TODO text remains on the page
- [ ] Code example is properly formatted
- [ ] "Internal Tool" disclaimer is clearly visible
- [ ] All images load correctly

