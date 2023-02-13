import './App.css'
import Palette from './components/palette'
import { PaletteContextProvider } from './context/paletteContext'
/* "./node_modules/standard/eslintrc.json" */

// const myPalette = ['320E3B', '636363', 'DE355F', '7e7f9a', 'f9f8f8']
// const myPalette = ['fefee3', 'ffc9b9', 'd68c45', '636363', '1c0221']
// const myPalette = ['f71735', '41ead4', 'fdfffc', '636363', 'ff9f1c']
const myPalette = ['e9b872', '90a959', '330036', '636363', 'b9b8d3']

function App () {
  return (
    <PaletteContextProvider>
      <div className='App'>
        <Palette colors={myPalette} />
      </div>
    </PaletteContextProvider>
  )
}
export default App
