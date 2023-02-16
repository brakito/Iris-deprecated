export function hexToRGB(hex) {
  const RGB = {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16)
  }
  return RGB
}

export function hexToHSL(hex) {
  let { r, g, b } = hexToRGB(hex)
  r = r / 255
  g = g / 255
  b = b / 255

  const cMax = Math.max(r, g, b)
  const cMin = Math.min(r, g, b)
  const delta = cMax - cMin

  let h = 0
  let s = 0
  const l = (cMax + cMin) / 2

  if (delta === 0) {
    h = 0
  } else if (cMax === r) {
      h = 60 * ((g - b) / delta)
    } else if (cMax === g) {
      h = 60 * ((b - r) / delta) + 120
    } else {
      h = 60 * ((r - g) / delta) + 240
    }
    if (h < 0) h += 360

    s = delta / (1 - Math.abs(2 * l - 1))

  return { h, s: s * 100, l: l * 100 }
}

