import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Drinks from './Drinks'
import Food from './Food'


export default function Menu()  {
  const [showDrinks, setShowDrinks] = useState(true)
  const [showFood, setShowFood] = useState(false)
  




  const handleShowDrinks = () => {
    console.log(showDrinks)
    console.log(showFood)
    return setShowDrinks( showDrinks === true) 
  }
  const handleShowFood = () => {
    console.log(showFood)
    console.log(showDrinks)
    return setShowFood(showFood === true) 
    
     }
  
    return (
    <div>
      <div className='col-12 d-flex justify-content-around p-4'>
      <Link to="/menu/drinks" className='tabs'><h1>Drinks</h1></Link>
      <Link to="/menu/food" className='tabs'><h1>Food</h1></Link>
    </div>
     <Outlet />
    </div>
        
      
    )
    }

