import React, { useState } from 'react'
import Martinis from './Martinis'
import Mimosas from './Mimosas'
import Mules from './Mules'
import SignatureCocktails from './SignatureCoctails'

export default function Drinks() {


  return (
    <div className='menu row m-3 justify-content-center'>

      <div className='col-8 p-3 border border-dark rounded text-center '>
        <Martinis />
        <Mimosas />
        <Mules />
        <SignatureCocktails />
      </div>
    </div>
  )
}
