import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div className='menu row m-3'>
        <div className='col-6 p-3 border border-dark rounded'>
          <ol>
            <li className='d-flex justify-content-between'><span>this will be item 1</span><p>$12.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 2</span><p>$11.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 3</span><p>$10.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 4</span><p>$13.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 5</span><p>$7.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 6</span><p>$13.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 7</span><p>$16.90</p></li>
          </ol>
        </div>
        <div className='col-6 p-3'>
          <div className='row border border-dark rounded '>
            <div className='col-6'>
              <p>this is a description</p>
            </div>
            <div className='col-6'>
              <img  className='img-fluid charcuterie-board-img' src='https://placekitten.com/400' alt=''/>
            </div>

          </div>
          <div className='row border border-dark rounded'>
            <div className='col-6'>
              
              <img  className='img-fluid charcuterie-board-img' src='https://placekitten.com/400' alt=''/>
            </div>
            <div className='col-6'>
            <p>this is a description</p>
            </div>

          </div>
          <div className='row border border-dark rounded'>
            <div className='col-6'>
              <p>this is a description</p>
            </div>
            <div className='col-6'>
              <img  className='img-fluid charcuterie-board-img' src='https://placekitten.com/400' alt=''/>
            </div>

          </div>
          <div className='row border border-dark rounded'>
            <div className='col-6'>
              
              <img  className='img-fluid charcuterie-board-img' src='https://placekitten.com/400' alt=''/>
            </div>
            <div className='col-6'>
            <p>this is a description</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
