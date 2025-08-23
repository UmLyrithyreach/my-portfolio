import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Works from './pages/Works'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home /> }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
