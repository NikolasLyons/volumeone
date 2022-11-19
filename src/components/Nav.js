import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {

  render() {
    return (
      <div className='shadow row nav-bar'>
        <div className='col-6 d-flex p-3 m-1'>
          <h1 className='volumelogo'>Volume</h1><Link to="/"><img className='logo' src='volumeonelogo.jpg' alt='Volume One Logo' /></Link><h1 className='volumelogo'>One</h1>

        </div>
        <div className=' col-md-4 d-flex justify-content-around align-self-center'>
          <h4 ><Link to="/about" className='tabs'>About</Link></h4>
          <h4 ><Link to="/menu/martinis" className='tabs'>Menu</Link></h4>
          <h4 ><Link to="/" className='tabs'>Contact Us</Link></h4>

        </div>
      </div>
    )
  }
}
