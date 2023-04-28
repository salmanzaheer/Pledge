import React from 'react'
import '../App.css';

function Foot() {
  return (
    <>
      <footer>
          <div className='footlist'>
              <a href='/' className='logo-footer'><p className='make-a'>Make a</p>Pledge</a>

              <ul className='navlist-foot'>
                  <li><a href='/'>About us</a></li>
                  <li><a href='/'>Documentation</a></li>
                  <li><a href='/'>Legal</a></li>
                  <li><a href='/'>Whats ahead?</a></li>
              </ul>
          </div>
      </footer>
    </>
  )
}

export default Foot