

import { Link } from 'react-router-dom'
import CustomCursor from './CustomCursor'


const Navbar = () => {
  return (
    
    <header className='container  top-2 z-10 
      p-6 flex justify-between items-center 
      lg:mb-40 position-sticky  m-auto
      
      '>
      <a href="/" className=' font-bold text-lg '> Sinthujan Sivanantham </a>
      <nav>
        <ul className="container space-x-2   m-auto text-lg font-Bold -bg-linear-330  ">  
        <Link to="/">Home</Link> 
        <Link to="/skills">Skills</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      <CustomCursor />  
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
