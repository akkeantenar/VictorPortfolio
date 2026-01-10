#!/bin/bash

# Script to resize and copy portfolio image to public folder
# Usage: ./scripts/prepare-portfolio-image.sh [path-to-image]

SOURCE_IMAGE="$1"
TARGET_DIR="/Users/anthonymiller/Data/VictorPortfolio/public"
TARGET_FILE="$TARGET_DIR/portfolio-image.jpg"

# If no source provided, check common locations
if [ -z "$SOURCE_IMAGE" ]; then
    echo "Searching for image files in common locations..."
    FOUND=$(find ~/Downloads ~/Desktop ~/Documents -maxdepth 2 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | head -1)
    if [ -n "$FOUND" ]; then
        echo "Found: $FOUND"
        read -p "Use this image? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            SOURCE_IMAGE="$FOUND"
        fi
    fi
fi

# Check if source image exists
if [ -z "$SOURCE_IMAGE" ] || [ ! -f "$SOURCE_IMAGE" ]; then
    echo "Error: Source image not found."
    echo "Usage: $0 [path-to-image]"
    echo "Or place your image in Downloads, Desktop, or Documents folder"
    exit 1
fi

echo "Processing image: $SOURCE_IMAGE"
echo "Target: $TARGET_FILE"

# Get image dimensions
DIMENSIONS=$(sips -g pixelWidth -g pixelHeight "$SOURCE_IMAGE" 2>/dev/null | grep -E "pixelWidth|pixelHeight" | awk '{print $2}')
WIDTH=$(echo "$DIMENSIONS" | head -1)
HEIGHT=$(echo "$DIMENSIONS" | tail -1)

echo "Original size: ${WIDTH}x${HEIGHT}"

# Determine if resize is needed (recommended: 400x400 minimum, square)
TARGET_SIZE=400

# Calculate new dimensions (maintain aspect ratio, but ensure minimum 400px)
if [ "$WIDTH" -lt "$TARGET_SIZE" ] || [ "$HEIGHT" -lt "$TARGET_SIZE" ]; then
    # Scale up to meet minimum
    if [ "$WIDTH" -gt "$HEIGHT" ]; then
        NEW_WIDTH=$TARGET_SIZE
        NEW_HEIGHT=$((HEIGHT * TARGET_SIZE / WIDTH))
    else
        NEW_HEIGHT=$TARGET_SIZE
        NEW_WIDTH=$((WIDTH * TARGET_SIZE / HEIGHT))
    fi
    echo "Resizing to: ${NEW_WIDTH}x${NEW_HEIGHT}"
    
    # Create square version (crop to center)
    sips -z $TARGET_SIZE $TARGET_SIZE --cropToWidthHeight $TARGET_SIZE $TARGET_SIZE "$SOURCE_IMAGE" --out "$TARGET_FILE" 2>/dev/null || \
    sips -Z $TARGET_SIZE "$SOURCE_IMAGE" --out "$TARGET_FILE" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "✓ Image resized and saved to: $TARGET_FILE"
    else
        echo "Error: Failed to resize image. Copying original..."
        cp "$SOURCE_IMAGE" "$TARGET_FILE"
    fi
else
    # Image is already large enough, just copy and optionally resize to square
    echo "Image is large enough. Creating square version..."
    sips -z $TARGET_SIZE $TARGET_SIZE --cropToWidthHeight $TARGET_SIZE $TARGET_SIZE "$SOURCE_IMAGE" --out "$TARGET_FILE" 2>/dev/null || \
    cp "$SOURCE_IMAGE" "$TARGET_FILE"
    echo "✓ Image copied to: $TARGET_FILE"
fi

# Verify the file was created
if [ -f "$TARGET_FILE" ]; then
    FINAL_SIZE=$(sips -g pixelWidth -g pixelHeight "$TARGET_FILE" 2>/dev/null | grep -E "pixelWidth|pixelHeight" | awk '{print $2}')
    FINAL_W=$(echo "$FINAL_SIZE" | head -1)
    FINAL_H=$(echo "$FINAL_SIZE" | tail -1)
    echo "✓ Final image size: ${FINAL_W}x${FINAL_H}"
    echo "✓ Portfolio image is ready!"
    echo ""
    echo "Refresh your browser to see the image."
else
    echo "Error: Failed to create target file"
    exit 1
fi
