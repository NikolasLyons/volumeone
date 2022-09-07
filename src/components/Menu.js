import React, { useState } from 'react'

import Drinks from './Drinks'
import Food from './Food'


export default function Menu()  {
  const [showDrinks, setShowDrinks] = useState(true)
  const [showFood, setShowFood] = useState(false)




  const handleShowDrinks = () => {
    return setShowDrinks(!showDrinks  && showFood === false) 
  }
  const handleShowFood = () => {
    
    return setShowFood(!showFood  && showDrinks === false) 
    
     }
  
    return (
    <div>
      <div className='col-12 d-flex justify-content-around p-4'>
      <h1 className='border-bottom border-dark selectable' onClick={handleShowDrinks}>Drinks</h1>
      <h1 className='border-bottom border-dark' onClick={handleShowFood}>Food</h1>
    </div>
    { showDrinks && <Drinks /> }
    { showFood && <Food /> }
    </div>
        
      
    )
    }

