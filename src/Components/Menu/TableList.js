import React from 'react'
import './tableliststyle.css'

function TableList({ setDishes, dishes, setTotalPrice }) {
    function countDish(number,index){
        const newArray = dishes.slice()
        newArray[index].count+=number

        setTotalPrice(newArray[index].price * newArray[index].count)
        setDishes(newArray)
    }


  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='table-list'>
                        {dishes.map((item,index)=><li key={item.id} className='table-list-item'>
                            <div className='table-box'>
                                <img src={item.image} alt={item.name}/>
                                <p className={'count'}>{item.count}</p>
                                <div className='table-desc'>
                                    <b>{item.name}</b> <br/>
                                    <span>{item.price}</span>
                                    <div className='button-box'>
                                        <button onClick={ () => countDish(-1, index) } disabled={item.count>0 ? false : true}>-</button>
                                        <button onClick={ () => countDish(1, index) }>+</button>
                                    </div>
                                </div>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div> 
    </>
  )
}

export default TableList
