import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Services from './components/Services'
import { useState } from 'react';
function App() {
  const [sidebar, setSidebar] = useState(false)
  const sidebarMenu = () => {
    setSidebar(!sidebar)
  }
  return (
    <>
    <p className="top-menu-icon"><i class="fa-solid fa-bars p-2 d-inline" onClick={sidebarMenu} /></p>
    <div className='containers'>
    <Navbar sidebar={sidebar} setSidebar={setSidebar} />
    <div className='main'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Portfolio' element={<Portfolio />} />
      <Route path='/Resume' element={<Resume />} />
      <Route path='/Services' element={<Services />} />
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App;
