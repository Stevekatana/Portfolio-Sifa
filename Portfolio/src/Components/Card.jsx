import React from 'react'

function Card(props) {
  return (
    <div className=' w-76 lg:w-[400px] h-auto'>
        <img src={props.source} alt="Image not found" className=' object-fill h-88 w-72 rounded-md'/>
    </div>
  )
}

export default Card
