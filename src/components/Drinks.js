import React, { useState } from 'react'

export default function Drinks() {
  const [martinis] = useState([
    { id: 1, name: 'Classic Martini', type: 'Martini' },
    { id: 2, name: 'Dirty Martini', type: 'Martini' },
    { id: 3, name: 'Cherry Drop Martini', type: 'Martini' },
    { id: 4, name: 'Blushing Cosmo', type: 'Martini' },
    { id: 5, name: 'Green Apple Martini', type: 'Martini' },
    { id: 6, name: 'Huckletini', type: 'Martini' },
    { id: 7, name: 'Lemon Drop Martini', type: 'Martini' },
    { id: 8, name: 'Sunset Cosmo', type: 'Martini' },
    { id: 9, name: 'Sweetheart Martini', type: 'Martini' },
    { id: 10, name: 'Minty Watermelon Martini', type: 'Martini' }
  ])
  const [lemonades] = useState([
    { id: 1, name: 'Huckleberry Lemonade', type: 'Lemonade' },
    { id: 2, name: 'Strawberry-Nectarine Lemonade', type: 'Lemonade' },

  ])
  const [mimosa] = useState([
    { id: 1, name: 'Classic', type: 'Mimosa' },
    { id: 2, name: 'Pretty in Pink', type: 'Mimosa' },
    { id: 3, name: 'Hawaiian', type: 'Mimosa' },
    { id: 4, name: 'Raspberry Delight', type: 'Mimosa' },
    { id: 5, name: 'Tiffany', type: 'Mimosa' },
    { id: 6, name: 'Mimosa-Rita', type: 'Mimosa' },
    { id: 7, name: 'The Sunrise', type: 'Mimosa' },
    { id: 8, name: 'Fresh and Fruity', type: 'Mimosa' }
  ])

  const [mules] = useState([
    { id: 1, name: 'Vodka Mule', type: 'Mules' },
    { id: 2, name: 'Tennessee Mule', type: 'Mules' },
    { id: 3, name: 'Irish Mule', type: 'Mules' },
    { id: 4, name: 'Mexican Mule', type: 'Mules' },
    { id: 5, name: 'Very Cherry Mule', type: 'Mules' },
    { id: 6, name: 'Huckleberry Mule', type: 'Mules' },
    { id: 7, name: 'Dark N Stormy', type: 'Mules' },
    { id: 8, name: 'Gin Buck', type: 'Mules' },
    { id: 9, name: 'Strawberry Lime Mule', type: 'Mules' },
    { id: 10, name: 'Apple Cider Mule', type: 'Mules' },
    { id: 11, name: 'Jalapeno Mule', type: 'Mules' }

  ])
  return (
    <div className='menu row m-3 justify-content-center'>

      <div className='col-8 p-3 border border-dark rounded text-center '>
        <div>
          <h2 className='text-center'>
            --Martinis--
          </h2>

          {martinis.map((martinis) => (

            <p className='text-center' key={martinis.id}>{martinis.name}</p>
          ))}

        </div>
        <div>
          <h2>
            --Lemonades--
          </h2>
          {lemonades.map((lemonades) => (
            <p className='text-center' key={lemonades.id}>{lemonades.name}</p>
          ))}
        </div>
        <div>
          <h2>
            --Mimosas--
          </h2>
          {mimosa.map((mimosa) => (
            <p className='text-center' key={mimosa.id}>{mimosa.name}</p>
          ))}
        </div>
        <div>
          <h2>
            --Mules--
          </h2>
          {mules.map((mules) => (
            <p className='text-center' key={mules.id}>{mules.name}</p>
          ))}

        </div>





      </div>
    </div>
  )
}
