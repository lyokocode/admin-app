import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoute'
import { HomePage, LoginPage } from "./pages"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/" exact />
          </Route>
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
