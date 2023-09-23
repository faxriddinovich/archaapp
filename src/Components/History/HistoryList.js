import React, {useRef, useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";

import './historylist.css'

function HistoryList(){

    const [historyList, setHistoryList] = useState([
        {
            id:125,
            status:'uncompleted',
            table: '12',
            date:"12.09.2023",
            bookedFoods:[
                {
                    foodId:'adsifjeighilusr',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'fdhgowiearunvjfdbv',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'zmcxvnkjzfbvlsdf',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'urhiowergerfv',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },
            ],
            uniqueRef:useRef()
        },
        {
            id:110,
            status:'uncompleted',
            table: '19',
            date:"10.09.2023",
            bookedFoods:[
                {
                    foodId:'erbvaoisdnfqoierhgilfb',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'urhfdfbvvweifuroerfbksd',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'auhfyergfuyabfduadv',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'ruhfilsdbygeifuqywegfvtwe',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },
            ],
            uniqueRef:useRef()
        },
        {
            id:111,
            status:'uncompleted',
            table: '17',
            date:"14.09.2023",
            bookedFoods:[
                {
                    foodId:'rufeyrgfuyqebf',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'eiyrgfecbqeyfuqygeafkuy',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'auhfecbtefiuyqerhgliubqoeu',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'urhgwerygowiurhoryg',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },
            ],
            uniqueRef:useRef()
        },
        {
            id:190,
            status:'uncompleted',
            table: '16',
            date:"15.09.2023",
            bookedFoods:[
                {
                    foodId:'fhnvgeyrgtiuyergiqbuyer',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'auiehbcyqgevouiaeigfiuayetgfr',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'asdhfrygtynvbyaegf',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'djfhgtyvwyrfhiuergfoniua',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },
            ],
            uniqueRef:useRef()
        },
        {
            id:130,
            status:'uncompleted',
            table: '2',
            date:"1.09.2023",
            bookedFoods:[
                {
                    foodId:'uhefiurgnoureigu',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'erhutyrgidalfhayrt',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'arkuhgiuroiaduf',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'ksdjfbvyfolaiduj;faqowierjiqth',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },
            ],
            uniqueRef:useRef()
        },
        {
            id:142,
            status:'uncompleted',
            table: '15',
            date:"11.09.2023",
            bookedFoods:[
                {
                    foodId:'erhfiyergbfuyr',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'asdlhfburbvufdabvuhdfb',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'ashfyutgbudhfbvhj',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },

                {
                    foodId:'ahfilsfdbvlifbivs',
                    foodName:'Alanga osh',
                    cost:'45 000',
                    mount:1
                },
            ],
            uniqueRef:useRef()
        },
    ])

    function toggleAccordion(myRef){

        const toggleArray = historyList.slice();

        toggleArray.map(item=>{
            item.uniqueRef.current.style.display='none'
        })

        setHistoryList(toggleArray)

        if (myRef.current.style.display==='block') myRef.current.style.display = 'none'
        else myRef.current.style.display = 'block'
    }

    return (
        <section className={'history-list-section'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <ul className={'history-list'}>
                            {historyList.map(item => <li key={item.id} className={'history-list-item'}>
                                <div className={'history-title'}>
                                    <div className={'history-desc'}>
                                        <h3>{item.status} order | {item.table}</h3>
                                        <p>{item.date}</p>
                                    </div>

                                    <div className={'dropdown'}>
                                        <button onClick={()=>toggleAccordion(item.uniqueRef)}>
                                            <AiFillCaretDown/>
                                        </button>
                                    </div>
                                </div>

                                <div className={'booked-foods'} ref={item.uniqueRef}>
                                    <h3>Total cost: 2 200 000</h3>
                                    <ul className={'book-list'}>
                                        {item.bookedFoods.map(book =><li className={'book-list-item'} key={book.foodId}>
                                            <p>{book.foodName}</p>

                                            <span>{book.cost}</span>
                                        </li>)}
                                    </ul>
                                </div>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryList