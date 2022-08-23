import React, { Component } from 'react'
import logo from '../assets/Images/volumeonelogo.jpg'

export default class Nav extends Component {


  render() {
    return (
      <div className='shadow row justify-content-between nav-bar'>
        <div className='col-6 p-3 m-1'>
        <img className='logo' src={logo} alt='Volume One Logo' />
        </div>
        
      </div>
    )
  }
}
