import React from 'react'
import {TodosItem} from './TodosItem'

export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3>ToDos Lists</h3>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo)=>{
        return (
         <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
        )
      })}
    </div>
  )
}


