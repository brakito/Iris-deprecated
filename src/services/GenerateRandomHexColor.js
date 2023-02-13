export function generateHex () {
  const hexValues = '0123456789ABCDEF'
  let randomHex = ''
  for (let i = 0; i < 6; i++) {
    randomHex += hexValues[Math.floor(Math.random() * 16)]
  }
  return randomHex
}

export function generataPalette (numberColors = 5) {
  const palette = []
  for (let i = 0; i < numberColors; i++) {
    palette.push(generateHex())
  }
  return palette
}
