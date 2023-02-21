export function hexToRGB (hex) {
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16)
  }
}

export function HextoRGBNormalized (hex) {
  let { r, g, b } = hexToRGB(hex)
  return {
    r: r /= 255,
    g: g /= 255,
    b: b /= 255
  }
}

export function hexToHSL (hex) {
  const { r, g, b } = HextoRGBNormalized(hex)

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

  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  return {
    h,
    s: s * 100,
    l: l * 100
  }
}

export function hexToCMYK (hex) {
  const { r, g, b } = HextoRGBNormalized(hex)

  const k = 1 - Math.max(r, g, b)
  const c = (1 - r - k) / (1 - k)
  const m = (1 - g - k) / (1 - k)
  const y = (1 - b - k) / (1 - k)

  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100)
  }
}
