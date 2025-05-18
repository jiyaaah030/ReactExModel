import Header from "./MyComponents/Header"; // {} not used bcuz function name is by export default
import {Todos} from "./MyComponents/Todos";
// import {TodosItem} from "./MyComponents/TodosItem";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";


import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo);
    // Deleting this way does not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
         
    //to delete-
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
    }

    const addTodo = (title,desc)=>{
      console.log("Adding this todo", title, desc);
      let sno;
      if(todos.length===0){
        sno = 0;
      }
      else{
       sno = todos[todos.length-1].sno + 1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }

  //   const [todos, setTodos] = useState([
  //   {
  //     sno : 1,
  //     title : "Go to school",
  //     desc : "You have to go to school",
  //   },
  //   {
  //     sno : 2,
  //     title : "Go to market",
  //     desc : "You have to go to market",
  //   },
  //   {
  //     sno : 3,
  //     title : "Go to home",
  //     desc : "You have to go to home",
  //   }
  // ]);

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]) 

  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </>
      } />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;