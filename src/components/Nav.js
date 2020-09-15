import React from 'react'
import '../css/layout.css'

function Navbar(props){

    return(
        <nav className="navbar">
      <div className="container">
        <a href="#">{props.li.name}</a>
        <a href="#" className="logo is-active">{props.li.second}</a>
        <a href="#">{props.li.third}</a>
       
      </div>
    </nav>
    )
}


export default Navbar;