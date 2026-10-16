#!/bin/bash
set -e

echo ""
echo "  ⊞ HyperGrid (GridTerm) Installer for macOS"
echo "  ----------------------------------------"
echo ""

APP_DIR="/Applications"
DMG_URL="https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg"
TMP_DIR=$(mktemp -d)

trap "rm -rf '$TMP_DIR'" EXIT

echo "⬇️  Downloading GridTerm (2.4 MB)..."
curl -sL --progress-bar "$DMG_URL" -o "$TMP_DIR/GridTerm.dmg"

echo "📦 Mounting disk image..."
MOUNT_DIR="$TMP_DIR/mnt"
mkdir -p "$MOUNT_DIR"
hdiutil attach "$TMP_DIR/GridTerm.dmg" -mountpoint "$MOUNT_DIR" -nobrowse -quiet

echo "📂 Installing GridTerm to /Applications..."
rm -rf "$APP_DIR/GridTerm.app"
cp -R "$MOUNT_DIR/GridTerm.app" "$APP_DIR/"

echo "🔓 Removing macOS quarantine flags..."
xattr -cr "$APP_DIR/GridTerm.app" 2>/dev/null || true

hdiutil detach "$MOUNT_DIR" -quiet

echo ""
echo "✅ HyperGrid installed successfully in /Applications!"
echo "🚀 Launching GridTerm..."
open "$APP_DIR/GridTerm.app"
