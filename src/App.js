import './App.css'
import { PaletteContextProvider } from './context/paletteContext'
import { Route } from 'wouter'
import RandomPalette from './pages/randomPalette'
import GenerateButton from './components/generateButton'
/* "./node_modules/standard/eslintrc.json" */

function App () {
  return (
    <PaletteContextProvider>
      <div className='App'>
        <Route path='/'>
          <h1 style={{ textAlign: 'center', color: 'white' }}>Create your awesome color palette!</h1>
        </Route>
        <Route
          component={RandomPalette}
          path='/:urlPalette'
        />
        <GenerateButton />
      </div>
    </PaletteContextProvider>
  )
}
export default App
