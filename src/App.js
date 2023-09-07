import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Stacks from './components/Stacks'
import { useState } from 'react';
function App() {
  const [sidebar, setSidebar] = useState(false)
  const sidebarMenu = () => {
    setSidebar(!sidebar)
  }
  return (
    <>
    <p className="top-menu-icon"><i className="fa-solid fa-bars p-2 d-inline" onClick={sidebarMenu} /></p>
    <div className='containers'>
    <Navbar sidebar={sidebar} setSidebar={setSidebar} />
    <div className='main'>
    <Routes>
      <Route path='/my-portfolio' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Portfolio' element={<Portfolio />} />
      <Route path='/Resume' element={<Resume />} />
      <Route path='/Stacks' element={<Stacks />} />
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App;
