import React from 'react'
import { Link, Outlet } from 'react-router-dom'




export default function Menu() {








  return (
    <div>
      <div className='col-12 d-flex justify-content-around p-4'>
        <Link to="/menu/martinis" className='tabs'><h1>Martinis</h1></Link>
        <Link to="/menu/mules" className='tabs'><h1>Mules</h1></Link>
        <Link to="/menu/mimosas" className='tabs'><h1>Mimosas</h1></Link>
        <Link to="/menu/signaturecocktails" className='tabs'><h1>Signature Cocktails</h1></Link>
      </div>
      <Outlet />
    </div>


  )
}

