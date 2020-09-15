import React from 'react';
import Navbar from './components/Nav'
import Heading from './components/header'
import './css/global.css'
import './css/sample-wallpaper.css'
import './css/search.css'
import CardImg from './components/Card'



const Links = [
  { id: 1, name: 'Hulk', second: 'Mavel', third: 'Venom'},
  
]

function App() {
const navitems = Links.map(li => {return <Navbar key={li.id} li={li} />})
  return (
    <div >
      
      {navitems}
      <Heading />
    
      
      
    
    </div>
  );
}

export default App;
