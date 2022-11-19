import React, { useState } from "react";

export default function Mimosas() {
  const [mimosa] = useState([
    { id: 1, name: 'Classic', type: 'Mimosa', description: 'Champagne and orange juice' },
    { id: 2, name: 'Pretty in Pink', type: 'Mimosa', description: 'Champagne and pink grapefruit' },
    { id: 3, name: 'Hawaiian', type: 'Mimosa', description: 'Coconut rum, Champagne and pineapple juice' },
    { id: 4, name: 'Raspberry Delight', type: 'Mimosa', description: 'Champagne and raspberry lemonade' },
    { id: 5, name: 'Tiffany', type: 'Mimosa', description: 'Champagne, lemonade and island liquor' },
    { id: 6, name: 'Mimosa-Rita', type: 'Mimosa', description: 'Champagne, tequila, lime and orange juice' },
    { id: 7, name: 'The Sunrise', type: 'Mimosa', description: 'Champagne, orange juice, and mango juice' },
    { id: 8, name: 'Fresh and Fruity', type: 'Mimosa', description: 'Champagne and pineapple juice' }
  ])
  return (
    <div className="text-center" >
      <h2>
        --Mimosas--
      </h2>
      <div className="row justify-content-center">
        {mimosa.map((mimosa) => (
          <div className='border col-3 border-dark m-2 p-2' key={mimosa.id}>
            <h3 className='text-center' >{mimosa.name}</h3>
            <p>{mimosa.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}