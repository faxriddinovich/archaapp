import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHistory } from 'react-icons/ai'
import { LuMenuSquare } from 'react-icons/lu'
import { GiSettingsKnobs } from 'react-icons/gi'

import './footerstyle.css'

function Footer() {
  return (
    <>
        <section className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <div className='main-section'>
                            <div className='history'>
                                <Link to={'/history'} className='footer-navigator'>
                                    <AiOutlineHistory/>
                                    <span>Order history</span>
                                </Link>
                            </div>

                            <div className='menu'>
                                <Link to={'/menu'} className='footer-navigator'>
                                    <LuMenuSquare/>
                                    <span>Menu</span>
                                </Link>
                            </div>

                            <div className='settings'>
                                <Link to={'/settings'} className='footer-navigator'>
                                    <GiSettingsKnobs/>
                                    <span>Settings</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Footer
