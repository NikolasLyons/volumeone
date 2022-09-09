import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Images/volumeonelogo.jpg'

export default class Nav extends Component {


  render() {
    return (
      <div className='shadow row nav-bar'>
        <div className='col-6 d-flex p-3 m-1'>
        <Link to="/home"><img className='logo' src={logo} alt='Volume One Logo' /></Link>
        </div>
        <div className='col-4 d-flex justify-content-around align-self-center'>
        <h4 ><Link to="/about" className='tabs'>About</Link></h4>
          <h4 ><Link to="/menu" className='tabs'>Menu</Link></h4>
          <h4 ><Link to="/home#contact" className='tabs'>Contact Us</Link></h4>

        </div>
        
        
      </div>
    )
  }
}
