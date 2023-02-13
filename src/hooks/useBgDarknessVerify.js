import { hexToHSL } from '../services/changeColorMode'

export function useBgDarknessVerify (hex) {
  const { h, s, l } = hexToHSL(hex)
  let isDark = true
  if (l > 30) {
    if (((h > 0 && h < 200) || (h > 280 && h <= 360)) && s > 40) {
      isDark = false
    } else if (l >= 85 || (l > 70 && s < 33)) {
      isDark = false
    }
  }

  return isDark ? 'FFFFFF' : '000000'
}
