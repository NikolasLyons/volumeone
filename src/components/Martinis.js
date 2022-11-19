import React, { useState } from "react";

export default function Martinis() {
  const [martinis] = useState([
    { id: 1, name: 'Classic Martini', type: 'Martini', description: 'Vodka or Gin with a touch of dry vermouth. As Dirty as you like' },
    { id: 2, name: 'Cherry Drop Martini', type: 'Martini', description: '44 North Cherry Vodka with lemon juice, grenadine and sugar' },
    { id: 3, name: 'Green Apple Martini', type: 'Martini', description: 'Vodka with melon and apple liquors and a touch of sour' },
    { id: 4, name: 'Huckletini', type: 'Martini', description: '44 North Vodka, pomegrante liquor, orange liquor and lime.' },
    { id: 5, name: 'Lemon Drop Martini', type: 'Martini', description: 'Absolute Citron Vodka with lemon juice, triple sec, and sugar' },
    { id: 6, name: 'Sunset Cosmo', type: 'Martini', description: '44 Nectarine Vodka with mango, lime , triple sec, and grenadine' },
    { id: 7, name: 'Sweetheart Martini', type: 'Martini', description: '44 North Watermelon Vodka with watermelon liquor and Sweet/Sour' },
    { id: 8, name: 'Minty Watermelon Martini', type: 'Martini', description: '44 North Watermelon Vodka with mint and lime' },
    { id: 9, name: 'Manhattan', type: 'Martini', description: 'Rye Whisky with sweet vermouth and orange bitters' }
  ])
  return (
    <div>
      <h1 className='text-center'>
        --Martinis--
      </h1>

      <div className='row justify-content-center'>
        {martinis.map((martinis) => (
          <div className='border col-3 border-dark m-2 p-2' key={martinis.id}>
            <h3 className='text-center'>{martinis.name}</h3>
            <p> {martinis.description}</p>
          </div>

        ))}
      </div>
    </div>
  )
}