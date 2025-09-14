// hooks and CSS style etc.
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import './index.css'

// Components
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/section/Home'
import { About } from './components/section/About'
import Projects from './components/section/Projects'
import { Contact } from './components/section/Contact'
import { Awards } from './components/section/Awards'
import Certificate from './components/section/Certificate'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
        <>
          { !isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} /> }{" "}
          <div className= {`min-h-screen transition-opacity duration-700 
            ${isLoaded ? "opacity-100": "opacity-0"}
            bg-black text-gray-100`}  
            >
              < Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
              < MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/awards' element={<Awards/>}></Route>
                <Route path='/certificate' element={<Certificate/>}></Route>
              </Routes>
          </div>
        </>
    </BrowserRouter>
  )
}

export default App


