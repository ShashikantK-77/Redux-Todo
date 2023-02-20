import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from './Todo.css'
//import css code

import { addTodo,delTodo,remTodo } from '../actions/Index';

const Todo = () => {
    const [inputData, setinputData] = useState("");3
    const list = useSelector((state)=>state.TodoReducers.list);
    const dispatch = useDispatch();
    
  return (
    <div>
        <div className='main-div'>
    <div className='child-div'>
    <figure>
      <figcaption>Add Your List Here</figcaption>
      </figure>

      <div className='addItems'>
        <input type='text' placeholder='Add Items' value={inputData} onChange={(event)=>setinputData(event.target.value)} />
        <i className='fa fa-plus add-btn' onClick={()=> dispatch(addTodo(inputData),setinputData('')) }  ></i>

        {/* onClick={()=> dispatch(addTodo(inputData)) */}
      </div>

      <div className='showItems'>

      {
        list.map((elem)=>{
          return(
            <div className='eachItem' key={elem.id}>
            <h3>{elem.data}</h3>
            <div className='todo-btn'></div>
            <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={()=> dispatch(delTodo(elem.id)) }  ></i>
          </div>
          )
        })
      }
          
      </div>


      <div className='showItems'>
          <button className='btn effect04' data-sm-link-text="remove All"
          onClick={()=>dispatch(remTodo())}
          ><span>Check List</span></button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Todo