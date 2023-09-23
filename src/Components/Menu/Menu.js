import React, {useEffect, useState} from 'react'
import MenuHeader from './MenuHeader'
import Table from './Table'
import FooterMenu from './FooterMenu'

import './responsivemenu.css'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
function Menu() {

    const [tableList, setTableList] = useState([
        {
            id: 1,
            foodName: "Alanga osh",
            cost:"45 000",
            mount: "1kg",
            img: "https://media.express24.uz/r/848/1500/Q-Np4EkEDgxPW7rrGA5bJ.jpg",
        },
        {
            id: 2,
            foodName: "Alanga osh",
            cost: "45 000",
            mount: "1kg",
            img: "https://media.express24.uz/r/848/1500/Q-Np4EkEDgxPW7rrGA5bJ.jpg",
        },
        {
            id: 3,
            foodName: "Alanga osh",
            cost: "45 000",
            mount: "1kg",
            img: "https://media.express24.uz/r/848/1500/Q-Np4EkEDgxPW7rrGA5bJ.jpg",
        },
        {
            id: 4,
            foodName: "Alanga osh",
            cost: "45 000",
            mount: "1kg",
            img: "https://media.express24.uz/r/848/1500/Q-Np4EkEDgxPW7rrGA5bJ.jpg",
        }
    ])

    const [dishes,setDishes] = useState([])

    async function getAllDish(){
        const allDish = []

        const querySnapshot = await getDocs(collection(db,'Dish'))

        querySnapshot.forEach(doc=>allDish.push({id:doc.id,...doc.data()}))

        setDishes(allDish)
    }

    useEffect(()=>{
        getAllDish()
    },[])

  return (
    <>
        <MenuHeader setTableList={setTableList} getAllDish={getAllDish}/>
        <Table tableList={tableList} dishes={dishes}/>
        <FooterMenu/>
    </>
  )
}

export default Menu
