import React, {useRef, useState} from 'react'
import { FiChevronRight } from 'react-icons/fi'

import './footermenustyle.css'

function FooterMenu() {

    const [menuList,setOrderList] = useState([
        {
            id:12,
            name:"Alanga osh",
            cost:"45 000"
        },
        {
            id:13,
            name:"Alanga osh",
            cost:"45 000"
        },
        {
            id:14,
            name:"Alanga osh",
            cost:"45 000"
        },
        {
            id:15,
            name:"Alanga osh",
            cost:"45 000"
        },
        {
            id:16,
            name:"Alanga osh",
            cost:"45 000"
        }
    ])

    const ref = useRef()

    function handleCLick(){

        if (ref.current.style.transform === 'translateY(0px)') ref.current.style.transform = 'translateY(500px)'
        else ref.current.style.transform = 'translateY(0)'
    }

  return (
    <>
        <section className='menu-footer' ref={ref}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='footer-box'>
                            <div className='main-section-menu'>
                                <div className='cost'>
                                    <h2>Jami 2 200 000</h2>
                                </div>

                                <div className='button-section'>
                                    <button className='drag-btn' onClick={handleCLick}>
                                        <FiChevronRight/>
                                    </button>
                                </div>
                            </div>


                            <div className='list-section'>
                                <ul className='food-list'>
                                    {menuList.map(item=><li key={item.id} className='food-list-item'>
                                        <div className='name-box'>
                                            {item.name}
                                        </div>

                                        <div className='name-box'>
                                            <span>{item.cost}</span>
                                        </div>
                                    </li>)}

                                </ul>

                                <div className={'fee-inform food-list-item mt-5'}>
                                    <p>Ofitsant ximzati</p>

                                    <span>8%</span>
                                </div>

                                <div className={'footer-btn'}>
                                    <button className={'tertiary-btn'}>Yangi buyurtma qo'shish</button>
                                    <button className={'bg-tertiary-btn'}>Yakunlash</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default FooterMenu
