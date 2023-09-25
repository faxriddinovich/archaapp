import React, {useRef, useState} from 'react'
import { FiChevronRight } from 'react-icons/fi'

import './footermenustyle.css'
import {collection, doc, setDoc, addDoc} from "firebase/firestore";
import {db} from "../../firebase/firebase";

function FooterMenu({dishes, totalPrice, setTotalPrice}) {

    const ref = useRef()
    const [selectedDishes,setSelectedDishes] = useState(dishes.filter(item=>item.count>1))

    function formatPrice(price){
        if (typeof price !== "number") {
            return "Error";
        }
        return price.toFixed(2);
    }

    const handleReset = () => {
        setSelectedDishes([]);
        setTotalPrice(0);
    };

    async function completeOrder(){

        const order = {
            dishes: selectedDishes,
            totalPrice: formatPrice(totalPrice),
            date: new Date().toISOString(),
        };

        try {

            await addDoc(collection(db,"Orders"),order);

            alert("Заказ успешно завершен!");
            handleReset();
        } catch (error) {
            console.error("Ошибка при сохранении заказа: ", error);
            alert(
                "Произошла ошибка при завершении заказа. Пожалуйста, попробуйте еще раз."
            );
        }
    };

    function handleCLick(){

        if (ref.current.style.transform === 'translateY(0px)') ref.current.style.transform = 'translateY(calc(100% - 80px))'
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
                                    <h2>Jami: {totalPrice}</h2>
                                </div>

                                <div className='button-section'>
                                    <button className='drag-btn' onClick={handleCLick}>
                                        <FiChevronRight/>
                                    </button>
                                </div>
                            </div>


                            <div className='list-section'>
                                <ul className='food-list'>
                                    {dishes.map(item=> {
                                        if(item.count>0) {
                                            return <li key={item.id} className='food-list-item'>
                                                <div className='name-box'>
                                                    {item.name} <span>({item.count} ta)</span>
                                                </div>

                                                <div className='name-box'>
                                                    <span>{item.price}</span>
                                                </div>
                                            </li>
                                        }
                                    })}

                                </ul>

                                <div className={'fee-inform food-list-item mt-5'}>
                                    <p>Ofitsant ximzati</p>

                                    <span>8%</span>
                                </div>

                                <div className={'footer-btn'}>
                                    <button className={'tertiary-btn'}>Yangi buyurtma qo'shish</button>
                                    <button className={'bg-tertiary-btn'} onClick={completeOrder}>Yakunlash</button>
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
