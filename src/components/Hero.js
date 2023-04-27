import React from 'react'
import "../App.css"

function Hero() {
  return (
    <>
    <section className='hero'>
        <div className='hero-text'>
            <h5>Fast, safe, convenient payments!</h5>
            <p>Pay. Get paid. You set your own terms. Ready to make a Pledge?</p>
            <a href='/' className='button auth-btn'>Get started</a>
        </div>

        <div className='hero-img'>
            <img src='../../public/images/pledgePhone.png'></img>
        </div>
    </section>
    </>
  )
}

export default Hero