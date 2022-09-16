import React from 'react'
import enjoyingDrinks from '../assets/Images/enjoyingTheDrinks.jpg'

export default function About() {
  return (
    <div className='row bg-dark' >
      <div className='col-6 p-4'>
        <img className='rounded img-fluid' src={enjoyingDrinks} alt='' />
      </div>
      <div className='col-6 text-light text-center align-self-center'>
        <p>We are a local bar located on the west side of Eagle road. Our goal is to prove a fun environment with music, drinks, and food. </p>
      </div>
    </div>

  )
}
