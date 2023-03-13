import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoute'
import { HomePage, LoginPage } from "./pages"
import { Navbar } from "./components"

function App() {

  return (
    <div className="App">
      <div className='appContainer'>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<HomePage />} path="/" exact />
            </Route>
            <Route element={<LoginPage />} path="/login" />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
