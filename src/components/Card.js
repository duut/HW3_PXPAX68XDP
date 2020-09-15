import React from 'react'

function CardImg(props){
    return(
        <div>
          <article className="wallpaper">
            <img src={props.imga} alt="Wallpaper #1" className="wallpaper" />
          </article>
      
        </div>
    )
}

export default CardImg;