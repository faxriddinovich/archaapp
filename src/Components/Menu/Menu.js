import React, {useEffect, useState} from 'react'
import MenuHeader from './MenuHeader'
import Table from './Table'
import FooterMenu from './FooterMenu'

import './responsivemenu.css'
import { collection, getDocs } from 'firebase/firestore'
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

    const [totalPrice, setTotalPrice] = useState(0)

    const [dishes,setDishes] = useState([])
    const [selectedDishes, setSelectedDishes] = useState([])

    async function getAllDish(){
        const allDish = []

        const querySnapshot = await getDocs(collection(db,'Dish'))

        querySnapshot.forEach(doc=>allDish.push({id:doc.id,...doc.data(),count:0}))

        setDishes(allDish)
    }

    useEffect(()=>{
        getAllDish()
    },[])

  return (
    <>
        <MenuHeader setTableList={setTableList} getAllDish={getAllDish}/>
        <Table setDishes = { setDishes } dishes = { dishes } setTotalPrice={setTotalPrice}/>
        <FooterMenu dishes={dishes} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
    </>
  )
}

export default Menu
