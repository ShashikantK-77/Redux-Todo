import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
//import css code

import { addTodo,delTodo,remTodo } from '../actions/Index';

const Todo = () => {
    const [inputData, setinputData] = useState("");
    const dispatch = useDispatch();
    
  return (
    <div>
        <div className='main-div'>
    <div className='child-div'>
    <figure>
      <figcaption>Add Your List Here</figcaption>
      </figure>

      <div className='addItems'>
        <input type='text' placeholder='Add Items' value={inputData} onChange={(event)=>setinputData(event.target.value)}/>
        <i className='fa fa-plus add-btn'  ></i>

        {/* onClick={()=> dispatch(addTodo(inputData)) */}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Todo