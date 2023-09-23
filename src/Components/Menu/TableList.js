import React from 'react'
import './tableliststyle.css'

function TableList({tableList}) {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='table-list'>
                        {tableList.map(item=><li key={item.id} className='table-list-item'>
                            <div className='table-box'>
                                <img src={item.img} alt={item.foodName}/>
                                <div className='table-desc'>
                                    <b>{item.foodName}</b>
                                    <p>{item.mount}</p>
                                    <span>{item.cost}</span>
                                    <div className='button-box'>
                                        <button>-</button>
                                        <button>+</button>
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
