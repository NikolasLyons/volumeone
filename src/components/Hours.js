import React, { Component } from 'react'

export default class Hours extends Component {
  render() {
    return (
      <div className='row justify-content-center p-3'>
        <div className='col-6 hours border border-dark rounded'>
          <h2 className='text-center'>
            HOURS:
          </h2>
          <div className='text-center'>

          <p><span>Mon-Wed</span> 12:00pm - 11:00pm</p>
          <p><span>Thur-Sat</span> 12:00pm - 2:00am</p>
          <p><span>Sun</span> Closed</p>
          </div>
        </div>
      </div>
    )
  }
}
