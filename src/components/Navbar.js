import React, { useState } from 'react'
import "../App.css"
import { Link } from 'react-router-dom';


function Navbar() {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

  return (
    <>
        <header>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    Pledge    
                </a>

                <ul className={click ? 'navlist open' : 'navlist'}>
                    <li><Link to='/'>How it works</Link></li>
                    <li><Link to='/'>Causes we support</Link></li>
                    <li><Link to='/login' className='get-started'>Make a Pledge</Link></li>
                </ul>

                <div className={click ? 'fas fa-times' : 'fas fa-bars'} id='menu-icon' onClick={handleClick}>
                    
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar