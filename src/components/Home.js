import React from 'react'

import Banner from './Banner'
import Drinks from './Gallery'


import Hours from './Hours'

export default function Home() 
{
  return (
    <div>
      <div className='text-center p-4'>
        <h1>NOW OPEN!</h1>
        <h3>See Hours Below!</h3>
      </div>
      <Banner />
      <Hours />
      <Drinks />
     
      
    </div>
  )
}
