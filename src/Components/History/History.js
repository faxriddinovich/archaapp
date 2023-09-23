import React, { useEffect, useRef, useState } from 'react'
import HistoryHeader from "./HistoryHeader";
import Footer from "../Footer/Footer";
import HistoryList from "./HistoryList";

import './responsivehistory.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function History(){

    const [historyList,setHistoryList] = useState([])

    async function fetchOrders(){
        const orderCollection = collection(db,"Orders")
        const orderSnapshot = await getDocs(orderCollection)
        const orderList = []

        orderSnapshot.forEach(doc=>{
            orderList.push({id:doc.id,...doc.data})
        })
        console.log(orderList)
        setHistoryList(orderList)
    }

    useEffect(() => {
        fetchOrders()
    },[])

    return(
        <>
            <HistoryHeader/>
            <HistoryList historyList={historyList}/>
            <Footer/>
        </>
    )
}

export default History