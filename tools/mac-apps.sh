#!/bin/bash
# One Dock icon "Kaplan Surgical Hub" that opens a stack of three apps: Kaplan Ops portal, interns, academy.
# Each app opens its own address in a clean Chrome window, independent of Chrome's installed apps.
set -e
B="https://kaplansurgeryhub-dotcom.github.io"
F="$HOME/Applications/Kaplan Surgical Hub"
OLD="$HOME/Applications/Chrome Apps.localized"
T="$(mktemp -d)"
mkdir -p "$F"
NAMES=("KSH פורטל המערך" "KSH סטאז׳רים" "פורטל האקדמיה")
mk(){ name="$1"; url="$2"; icon="$3"; app="$F/$name.app"
  if [ -e "$OLD/$name.app" ] && [ ! -e "$app" ]; then mv "$OLD/$name.app" "$app"; echo "הועבר: $name"; fi
  if [ ! -e "$app" ]; then
    curl -fsSL "$B/$icon" -o "$T/i.png"; sips -z 1024 1024 "$T/i.png" --out "$T/big.png" >/dev/null
    osacompile -o "$app" -e "do shell script \"open -na 'Google Chrome' --args --app=$url\""
    set="$T/$RANDOM.iconset"; mkdir -p "$set"
    for s in 16 32 128 256 512; do sips -z $s $s "$T/big.png" --out "$set/icon_${s}x${s}.png" >/dev/null; d=$((s*2)); sips -z $d $d "$T/big.png" --out "$set/icon_${s}x${s}@2x.png" >/dev/null; done
    iconutil -c icns "$set" -o "$app/Contents/Resources/applet.icns"; touch "$app"; echo "נוצר: $name"
  fi; }
mk "KSH פורטל המערך" "$B/ops/" "ops/icon-512.png"
mk "KSH סטאז׳רים" "$B/" "interns-icon-512.png"
mk "פורטל האקדמיה" "$B/lectures/" "lectures/icon-512.png"
# the folder gets the KSH icon
curl -fsSL "$B/ops/icon-512.png" -o "$T/f.png"
osascript -l JavaScript -e "ObjC.import('AppKit'); \$.NSWorkspace.sharedWorkspace.setIconForFileOptions(\$.NSImage.alloc.initWithContentsOfFile('$T/f.png'), '$F', 0)" >/dev/null
touch "$F"
# Dock: drop the single tiles of these three apps, keep everything else, add one stack
P="$T/dock.plist"; defaults export com.apple.dock "$P"
PB=/usr/libexec/PlistBuddy
for key in persistent-apps persistent-others; do
  n=$($PB -c "Print :$key" "$P" 2>/dev/null | grep -c "tile-data" || true)
  for ((i=n-1;i>=0;i--)); do
    lbl=$($PB -c "Print :$key:$i:tile-data:file-label" "$P" 2>/dev/null || true)
    url=$($PB -c "Print :$key:$i:tile-data:file-data:_CFURLString" "$P" 2>/dev/null || true)
    hit=0; for nm in "${NAMES[@]}" "Kaplan Surgical Hub"; do [[ "$lbl" == "$nm" || "$url" == *"$nm"* ]] && hit=1; done
    [[ $hit == 1 ]] && $PB -c "Delete :$key:$i" "$P"
  done
done
defaults import com.apple.dock "$P"
defaults write com.apple.dock persistent-others -array-add "<dict><key>tile-type</key><string>directory-tile</string><key>tile-data</key><dict><key>file-data</key><dict><key>_CFURLString</key><string>$F</string><key>_CFURLStringType</key><integer>0</integer></dict><key>file-label</key><string>Kaplan Surgical Hub</string><key>displayas</key><integer>1</integer><key>showas</key><integer>2</integer><key>arrangement</key><integer>1</integer><key>file-type</key><integer>2</integer></dict></dict>"
killall Dock
echo "סיום: ב-Dock, ליד סל המחזור, יש סמל אחד Kaplan Surgical Hub. לחיצה עליו פותחת את שלוש האפליקציות."
