import React from 'react'



export default function Banner() {
  return (
    <div className=' col-12 bannerBack' style={{ backgroundAttachment: 'fixed', backgroundImage: `url("https://media-cdn.tripadvisor.com/media/photo-s/0b/a8/3f/4e/outside-of-lucky-fins.jpg")` }}>
      <div className='text-center p-4 text-light'>
        <h1>NOW OPEN!</h1>
        <h3>See Hours Below!</h3>
      </div>
    </div>
  )
}
