import React from 'react'
import './Todoitems.css'

const Todoitems = ({item,id,todos,setTodos}) => {
    const delfunc=(delid)=>{
        let newtodos = todos.filter((element) => delid!== element.id)
        setTodos(newtodos)

    }
  return (
    <div className='todoitems'>
        <li key={id}>{item} <button onClick={()=>{delfunc(id)}} className='todoitems-delete'>Delete</button></li>
    </div>
  )
}

export default Todoitems