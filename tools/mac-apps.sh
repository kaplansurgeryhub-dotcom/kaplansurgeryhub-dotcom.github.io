#!/bin/bash
# Creates three Mac apps (Kaplan Ops portal, interns, academy), each with its own icon, in ~/Applications/Chrome Apps.localized, and adds them to the Dock.
# Each one opens its own address in a clean Chrome window, independent of Chrome's installed apps.
set -e
B="https://kaplansurgeryhub-dotcom.github.io"
D="$HOME/Applications/Chrome Apps.localized"
T="$(mktemp -d)"
mkdir -p "$D"
mk(){ name="$1"; url="$2"; icon="$3"; app="$D/$name.app"
  if [ -e "$app" ]; then echo "קיים כבר: $name"; return; fi
  curl -fsSL "$B/$icon" -o "$T/i.png"
  sips -z 1024 1024 "$T/i.png" --out "$T/big.png" >/dev/null
  osacompile -o "$app" -e "do shell script \"open -na 'Google Chrome' --args --app=$url\""
  set="$T/$RANDOM.iconset"; mkdir -p "$set"
  for s in 16 32 128 256 512; do sips -z $s $s "$T/big.png" --out "$set/icon_${s}x${s}.png" >/dev/null; d=$((s*2)); sips -z $d $d "$T/big.png" --out "$set/icon_${s}x${s}@2x.png" >/dev/null; done
  iconutil -c icns "$set" -o "$app/Contents/Resources/applet.icns"; touch "$app"
  defaults write com.apple.dock persistent-apps -array-add "<dict><key>tile-data</key><dict><key>file-data</key><dict><key>_CFURLString</key><string>$app</string><key>_CFURLStringType</key><integer>0</integer></dict></dict></dict>"
  echo "נוצר: $name"; }
mk "KSH פורטל המערך" "$B/ops/" "ops/icon-512.png"
mk "KSH סטאז׳רים" "$B/" "interns-icon-512.png"
mk "פורטל האקדמיה" "$B/lectures/" "lectures/icon-512.png"
killall Dock
open "$D"
echo "סיום. שלוש האפליקציות בתיקייה וב-Dock."
