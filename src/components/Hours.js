import React, { Component } from 'react'

export default class Hours extends Component {
  render() {
    return (
      <div className='row justify-content-center p-3'>
        <div className='col-6 hours border border-dark rounded'>
          <h2 className='text-center'>
            HOURS:
          </h2>
          <div className='text-center align-items-center'>

            <p><span>Everyday</span> 4:00pm - Close</p>

          </div>
        </div>
      </div>
    )
  }
}
