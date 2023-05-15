import './App.css'
import { PaletteContextProvider } from './context/paletteContext'
import { Redirect, Route } from 'wouter'
import CreatePalette from './pages/createPalette/index'
import StartPage from './pages/startPage'
import SideMenu from './components/sideMenu/menu'
/* "./node_modules/standard/eslintrc.json" */

function App() {
  return (
    <PaletteContextProvider>
      <div className='App'>
      <SideMenu />
        <Route
          component={StartPage}
          path='/palette'
        />
        <Route
          component={CreatePalette}
          path='/palette/:urlPalette'
        />
        <Route path='/create-palette'>
          <Redirect to='/palette' />
        </Route>
        <Route path='/'>
          <Redirect to='/palette' />
        </Route>
      </div>
    </PaletteContextProvider>
  )
}
export default App
