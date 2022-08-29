import React, { Component } from 'react'
import smallPlatter from '../assets/Images/1-2-person-platter.png'
import largePlatter from '../assets/Images/4-7-person-platter.png'

export default class Menu extends Component {
  render() {
    return (
      
      <div className='menu row m-3'>
        <div className='col-12 d-flex justify-content-around'>
          <h1 className='border-bottom border-dark'>Drinks</h1>
          <h1 className='border-bottom border-dark'>Food</h1>
        </div>
        <div className='col-6 p-3 border border-dark rounded'>
          <h2>
            Cocktails
          </h2>
          <ol>
            <li className='d-flex justify-content-between'><span>this will be item 1</span><p>$12.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 2</span><p>$11.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 3</span><p>$10.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 4</span><p>$13.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 5</span><p>$7.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 6</span><p>$13.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 7</span><p>$16.90</p></li>
          </ol>
          <h2>
            Drafts
          </h2>
          <ol>
            <li className='d-flex justify-content-between'><span>this will be item 1</span><p>$12.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 2</span><p>$11.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 3</span><p>$10.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 4</span><p>$13.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 5</span><p>$7.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 6</span><p>$13.90</p></li>
            <li className='d-flex justify-content-between'><span>this will be item 7</span><p>$16.90</p></li>
          </ol>
          <h2>
            Imports
          </h2>
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
          <div className='row border border-dark rounded p-3 m-2'>
            <div className='col-6'>
              <div className='row'>
                <div className='col-12'>

              <h3>Option 1 Classic</h3>
              <p>
                    This board comes with Salami, brie bites and manchego
                    cheese. Seasonal fruit and veggies with a variety of nuts,
                    crackers, olives, cornichon pickles and a sweet treat will
                    pair nicely together. (May come with substitutions)
              </p>
                    <h3>Option 2. Vegetarian</h3>
                    <p>This board will come with 2 different cheeses, brie and
                    manchego. Crackers, nuts and a variety of Olives and
                    pickles. The board also comes with a dip to accompany the seasonal veggies and fruit.</p>
                    <p>2-4 people<span>$45/$55</span></p>
              </div>
                </div>
            </div>
            <div className='col-6'>
              <img  className='img-fluid charcuterie-board-img rounded' src={smallPlatter} alt=''/>
            </div>

          </div>
          <div className='row border border-dark rounded p-3 m-2'>
            <div className='col-6'>
              
              <img  className='img-fluid charcuterie-board-img rounded' src={largePlatter} alt=''/>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-12'>
                  <h3>Option 1 Classic</h3>
                  <p> 
                    Salami and prosciutto along with a brie round and a
                    Syrah soaked bellavittano cheese will accompany this
                    board. Crackers and a variety of nuts and seasonal fruit
                    will compliment and pair with the meat and cheeses.
                    Olives and a small jar of honey will be the perfect taste
                    to add to any of the cheeses. (May come with
                    substitutions)
                      </p>
                    <h3>Option 2 Vegetarian</h3>
                    <p>This vegetarian board will come with 3 different
                    cheeses. Brie, manchego and a Syrah soaked</p>

                    <p>4-7 people<span>$45/$55</span></p>
                </div>

              </div>
            </div>

          </div>
          <div className='row border border-dark rounded p-3 m-2'>
            <div className='col-6'>
              <p>this is a description</p>
            </div>
            <div className='col-6'>
              <img  className='img-fluid charcuterie-board-img' src='https://placekitten.com/400' alt=''/>
            </div>

          </div>
          <div className='row border border-dark rounded p-3 m-2'>
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
