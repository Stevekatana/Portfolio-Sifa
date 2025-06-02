import React from 'react'
import Landing from '../assets/Landing.jpeg'

function Card(props) {
  return (
    <div className='w-76 lg:w-[400px]  flex items-center justify-center '>
        <img src={props.source} alt="Image not found" className='rounded-md'/>
    </div>
  )
}

export default Card
