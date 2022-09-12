import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'




export default function Menu() {








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

