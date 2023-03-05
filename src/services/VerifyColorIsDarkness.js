import { hexToHSL, hexToRGB } from './changeColorMode'

export function isDarkness2 (hex) {
  const { h, s, l } = hexToHSL(hex)
  let isDark = true
  if (l >= 30) {
    if (((h > 21 && h < 180) || (h > 280 && h <= 360)) && s > 40 && l > 35) {
      isDark = false
    } else if (l >= 85 || (l > 70 && s < 33)) {
      isDark = false
    }
  }

  return isDark
}

export function isDarkness(hex) {
  const {r, g, b} = hexToRGB(hex)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return (yiq >= 136) ? false : true
}