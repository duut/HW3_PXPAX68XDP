import React from 'react'
import SearchBar from './Search'
import CardImg from './Card'
import '../css/sample-wallpaper.css'




function Heading(){
  const Imagname = [
    {link: '../assets/venom-1.jpg'},
    {link: '../assets/hulk-1.jpg'},
    {link: '../assets/venom-2.jpg'}  ]
    return (
        <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>

        <SearchBar />
        <div className='sample-wallpaper'>
        {Imagname.map(li =>{ return <CardImg imga={li.link} />})}
        </div>
       
        </div>
        
        
        
        

        </header>
    )
}

export default Heading;