import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import {MdDelete} from "react-icons/md";

import './menuheader.css'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function MenuHeader({setTableList,getAllDish}) {

    function deleteOrders(){
        setTableList([])
        // deleteItems()
    }

    async function deleteItems(id){
        await deleteDoc(doc(db,'Dish',id))
        getAllDish()
    }

    return (
    <>
      <section className='menu-header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='header-box'>
                            <div className='left-box'>
                                <Link to={'/'}>
                                    <BiArrowBack/>
                                </Link>
                                <h3>Menu</h3>
                            </div>

                            <div className='right-box'>
                                <button onClick={deleteOrders}>
                                    <MdDelete/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MenuHeader
