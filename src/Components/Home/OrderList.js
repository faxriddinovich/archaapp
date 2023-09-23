import React, { useState } from 'react'

import './orderliststyle.css'
import './responsivehome.css'

function OrderList() {

    const [order,setOrder] = useState([
        {
            id:0,
            orderStatus:'uncompleted',
            date:"11:13",
            room:"3"
        },
        {
            id:1,
            orderStatus:'uncompleted',
            date:"12:30",
            room:"6"
        },
        {
            id:2,
            orderStatus:'uncompleted',
            date:"16:30",
            room:"2"
        },
        {
            id:3,
            orderStatus:'uncompleted',
            date:"19:00",
            room:"5"
        },
    ])

  return (
    <>
        <section className='order-list-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className='order-list'>
                            {order.map(item => <li key={item.id} className='order-list-item'>
                                <div className='information-box'>
                                    <h3 className='order-status'>{item.orderStatus} order</h3>
                                    <p className='order-date'>{item.date}</p>
                                </div>

                                <div className='checked-box'>
                                    <input type='checkbox'/>
                                </div>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default OrderList
