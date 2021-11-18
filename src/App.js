import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNavBar from './components/MyNavBar'
import MyFooter from './components/MyFooter'
import Search from './components/Search'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* I'll put a navbar here */}
        <MyNavBar />
        <Routes>
          <Route
            path="/"
            element={
              // if this gets too far, create a separate component for it
              <div>
                <h1>HOME COMPONENT</h1>
                <h2>everything starts from here</h2>
              </div>
            }
          />
          <Route path="/info" element={<h1>INFO COMPONENT</h1>} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
        {/* I'll put a footer here */}
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
