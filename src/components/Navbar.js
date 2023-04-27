import React, { useState } from 'react'
import "../App.css"


function Navbar() {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

  return (
    <>
        <header>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    Pledge    
                </a>

                <ul className='navlist'>
                    <li><a href='/'>How it works</a></li>
                    <li><a href='/'>Causes we support</a></li>
                    <li><a href='/' className='get-started'>Make a Pledge</a></li>
                </ul>

                <div className={click ? 'bx bx-menu' : 'bx bx-menu'} id='menu-icon' onClick={handleClick}>
                    
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar