import React from 'react'


export default function Footer() {

  return (
    <div className='footer p-3' id='contact row'>
      <div className='col-12'>
        <div className='row p-3'>
          <div className='col-12 text-center'>
            <p className=''>Contact Us!</p>

          </div>
        </div>
        <div className='row'>

          <div className='col-6  text-center p-3'>
            <h4>Address</h4>
            <p style={{ color: '#da3b3b' }}>1441 N Eagle Rd #200, Meridian, ID 83642</p>
            <h4>Phone</h4>
            <a className='tabs' href="tel:2087247604">(208)724-7604</a>
            <h4>Email</h4>
            <a className='tabs' href="mailto:volume1meridian@gmail.com.com ? subject = Contact Us">volume1meridian@gmail.com</a>
          </div>



          <div className='col-6  text-center'>
            <p>Follow us on social Media!</p>
            <div className='  d-flex justify-content-center p-3'>
              <div className='social-icons'>
                <i className='mdi mdi-instagram p-3'></i>
              </div>
              <div className='social-icons'>
                <a target="_blank" href='https://www.facebook.com/profile.php?id=100086435231208'><i className='mdi mdi-facebook'></i></a>
              </div>
            </div>
            <p> &copy; Volumeone Reserves the Rights</p>

          </div>
        </div>

      </div>
    </div >
  )
}

