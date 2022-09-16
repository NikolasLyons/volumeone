import React from 'react'
import smallPlatter from '../assets/Images/1-2-person-platter.png'
import largePlatter from '../assets/Images/4-7-person-platter.png'

export default function Food() {
  return (
    <div className='row justify-content-center'>

      <div className='col-10 p-3 '>
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
            <img className='img-fluid charcuterie-board-img rounded' src={smallPlatter} alt='' />
          </div>

        </div>
        <div className='row border border-dark rounded p-3 m-2'>
          <div className='col-6'>

            <img className='img-fluid charcuterie-board-img rounded' src={largePlatter} alt='' />
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
      </div>
    </div>
  )
}
