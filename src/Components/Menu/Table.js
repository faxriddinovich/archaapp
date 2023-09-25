import React from 'react'
import TableList from './TableList'

function Table({dishes, setDishes, setTotalPrice }) {
  return (
    <>
        <section className='table'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='table-box form-group'>
                            <select className='form-control'>
                                <option>Table 1</option>
                                <option>Table 2</option>
                                <option>Table 3</option>
                                <option>Table 4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <TableList dishes={dishes} setDishes={setDishes} setTotalPrice={setTotalPrice}/>
        </section> 
    </>
  )
}

export default Table
