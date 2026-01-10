# How to Add Your Portfolio Photo

## Steps to Upload Your Photo:

1. **Get your photo ready**
   - Format: `.jpg`, `.jpeg`, or `.png`
   - Recommended size: At least 400x400 pixels (square works best)
   - File size: Under 2MB for best performance

2. **Save the file**
   - **File name must be exactly:** `portfolio-image.jpg` (or `.png` if you prefer)
   - **Location:** Save it directly in this folder: `/public/portfolio-image.jpg`
   
   The full path should be:
   ```
   /Users/anthonymiller/Data/VictorPortfolio/public/portfolio-image.jpg
   ```

3. **After saving:**
   - Refresh your browser
   - The placeholder will disappear and your photo will appear automatically

## Alternative File Names:

If you want to use a different filename, update the `src` in:
- `components/PortfolioImage.tsx` (line 21)
- Change `"/portfolio-image.jpg"` to your filename (e.g., `"/my-photo.png"`)

## Troubleshooting:

- Make sure the file is in the `/public` folder, NOT in `/public/mntn/` or any subfolder
- The filename is case-sensitive: `portfolio-image.jpg` not `Portfolio-Image.jpg`
- After adding the file, you may need to restart your Next.js dev server
