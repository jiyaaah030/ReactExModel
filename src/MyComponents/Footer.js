import React from 'react'
//how to apply external css file 
import './footer.css'

export const Footer = () => {
  // let footerStyle = {
  //   position: "relative",
  //   top: "50vh",
  //   width: "100%",
  //   // border: "2px solid red"
  //   //this is how we apply style in react
  // }
  return (
    <footer className='bg-dark text-light py-3'>
      <p className='text-center'>
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
