import { hexToHSL } from './changeColorMode'

export function isDarkness (hex) {
  const { h, s, l } = hexToHSL(hex)
  let isDark = true
  if (l > 30) {
    if (((h > 0 && h < 200) || (h > 280 && h <= 360)) && s > 40 && l > 35) {
      isDark = false
    } else if (l >= 85 || (l > 70 && s < 33)) {
      isDark = false
    }
  }

  return !!isDark
}
