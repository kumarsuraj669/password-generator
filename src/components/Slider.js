import React, { useEffect, useState } from 'react'

function Slider(props) {

    const handleSlider = (e)=>{
        props.setLength(e.target.value)
    }
    
  return (
    <div className="slidecontainer w-full">
        <input type="range" min="4" max="20" value={props.length} className="slider w-full " id="myRange" onChange={handleSlider}/>
    </div>
  )
}

export default Slider
