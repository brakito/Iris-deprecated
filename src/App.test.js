import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('Something is rendered', () => {
  render(<App />)
  const linkElement = screen.getByText(/Create your awesome color palette!/i)
  expect(linkElement).toBeInTheDocument()
})

test('The palette is generated', () => {
  render(<App />)
  const Button = screen.getByText('New Palette')
  const regex = /(?:\b|(?<=\s))([A-Fa-f0-9]{6})(?=\b|\s|$)/i

  fireEvent.click(Button)
  const colorElement = screen.getAllByText(regex)

  expect(colorElement.length).toBeGreaterThan(0)
})

test('The palettes rendered are not same', () => {
  render(<App />)
  const Button = screen.getByText('New Palette')
  const regex = /(?:\b|(?<=\s))([A-Fa-f0-9]{6})(?=\b|\s|$)/i

  fireEvent.click(Button)
  const colorElements = screen.getAllByText(regex)
  const palette1 = colorElements.map((element) => {
    return element.textContent
  }).join('-')

  fireEvent.click(Button)
  const colorElements2 = screen.getAllByText(regex)
  const palette2 = colorElements2.map((element) => {
    return element.textContent
  }).join('-')

  expect(palette1.length).toBeGreaterThan(0)
  expect(palette2.length).toBeGreaterThan(0)
  expect(colorElements.length).toEqual(colorElements2.length)
  expect(palette1).not.toEqual(palette2)
})
