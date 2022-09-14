import React from 'react'



export default function Banner() {
  return (
    <div className=' col-12 bannerBack' style={{ backgroundImage: `url("http://cdn.cnn.com/cnnnext/dam/assets/191202161925-budapest-bars---parisi-udvar-hotel-budapest-parisi-passage-bar.jpg")` }}>
      <div className='text-center p-4 text-light'>
        <h1>NOW OPEN!</h1>
        <h3>See Hours Below!</h3>
      </div>
    </div>
  )
}
