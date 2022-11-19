import React, { useState } from "react";

export default function Mules() {
  const [mules] = useState([
    { id: 1, name: 'Moscow Mule', type: 'Mules', description: 'Your choice of Vodka' },
    { id: 2, name: 'Tennessee Mule', type: 'Mules', description: 'Jack Daniels' },
    { id: 3, name: 'Irish Mule', type: 'Mules', description: 'Your Choice of Jameson or Proper 12' },
    { id: 4, name: 'Mexican Mule', type: 'Mules', description: 'Your choice of Tequila' },
    { id: 5, name: 'Very Cherry Mule', type: 'Mules', description: '44 North cherry Vodka and grenadine' },
    { id: 6, name: 'Huckleberry Mule', type: 'Mules', description: '44 North Huckleberry Vodka' },
    { id: 7, name: 'Dark N Stormy', type: 'Mules', description: 'Dark Rum' },
    { id: 8, name: 'Gin Buck', type: 'Mules', description: 'Your choice of gin' },
    { id: 9, name: 'Strawberry Lime Mule', type: 'Mules', description: 'Your Choice of Vodka and muddled strawberries' },
    { id: 10, name: 'Apple Cider Mule', type: 'Mules', description: 'Your choice of Vodka and apple cider' },
    { id: 11, name: 'Jalapeno Mule', type: 'Mules', description: 'Your choice of Tequila and jalapenos' },
    { id: 112, name: 'Melon Mule', type: 'Mules', description: '44 North Watermelon Vodka' }

  ])
  return (
    <div className="text-center">
      <h1>
        --Mules--
      </h1>
      <div className='row justify-content-center'>
        {mules.map((mules) => (
          <div className='border col-3 border-dark m-2 p-2' key={mules.id}>
            <h3 className='text-center'>{mules.name}</h3>
            <p>{mules.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}