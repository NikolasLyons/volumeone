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
            <h2>HAPPY HOUR 5 to 8</h2>
            <p> Domestic Draft Beer....$4</p>
            <p> Well Cocktails....$4</p>
            <h5>Happy hour Signature Cocktail:</h5>
            <p> Tickled Pink....$5</p>

          </div>
        </div>
      </div>
    )
  }
}
