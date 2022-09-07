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
        <Link to='/home#about'> <a href='#about' className='tabs' >About</a></Link>
          <Link to="/menu" className='tabs'>Menu</Link>
          <Link to='/home#contact'> <a className='tabs'href='#contact'>Contact Us</a></Link>

        </div>
        
        
      </div>
    )
  }
}
