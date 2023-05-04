import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import received from './images/received.png';
import sent from './images/sent.png';



const Dashboard = () => {
    const navigate = useNavigate();
    
    const sendButton = () => {
        navigate("/transactions");
    };


  return (
    <>
    <div className='container-all'>
        <div className='container-activity'>
            <div className='recents'>
                <h1 className='activity-text'>RECENT ACTIVITY</h1>

                <div className='recent-transaction'>
                    <div className='img-wrapper'><img src={received} className='image-2'/></div>
                    <div className='info'>
                        <div className='item'>Magicians' Essentials Box Set</div>
                        <div className='details'>
                            <div className='name'>Jeffrey Tirschman</div>
                            <div className='item-price'>$15 / week</div>
                        </div>
                        <div className='more-info'>
                            <div className='description'>Payments Remaining: 6 / 12</div>
                        </div>
                    </div>
                </div>

                <div className='recent-transaction'>
                    <div className='img-wrapper'><img src={sent} className='image-2'/></div>
                    <div className='info'>
                        <div className='item'>Bobblehead</div>
                        <div className='details'>
                            <div className='name'>Dwight Schrute</div>
                            <div className='item-price'>$10 / month</div>
                        </div>
                        <div className='more-info'>
                            <div className='description'>Payments Remaining: 2 / 5</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='container-quick-actions'>
            <button className='btn' onClick={sendButton}>send</button>
            <button className='btn'>receive</button>
        </div>
    </div>
    </>
  )
}

export default Dashboard