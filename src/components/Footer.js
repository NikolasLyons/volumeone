import React, { useState } from 'react'


export default function Footer() {
 const [info] = useState([
  { type:"Address", contactInfo: "2344 walabeeway sydney way Meridian idaho, 83646", id: 1},
  {type:"Phone", contactInfo: "(208)000-0000", id: 2},
  {type:"Email", contactInfo: "1234itsvolumeone@volumeone.com", id: 3}
 ])
    return (
      <div className='footer border border-dark  rounded p-3' id='contact row'>
        <div className='col-12'>
        <div className='row p-3'>
        <div className='col-12 text-center'>
        <p className=''>Contact Us!</p>

        </div>
        </div>
        <div className='row'>

        <div className='col-6  text-center p-3'>
        {info.map((info)=>(
          <React.Fragment key={info.id}>
            <h4>
              {info.type}
            </h4>
            <p>{info.contactInfo}</p>
          </React.Fragment>
        ))}
        </div>
       
         
        
        <div className='col-6  text-center'>
        <p>Follow us on social Media!</p>
        <div className='  d-flex justify-content-around p-3'>
        <div className='social-icons'>
          <i className='mdi mdi-instagram'></i>
        </div>
        <div className='social-icons'>
          <i className='mdi mdi-twitter'></i>
        </div>
        <div className='social-icons'>
          <i className='mdi mdi-facebook'></i>
        </div>
        </div>
        <p> &copy; Volumeone Reserves the Rights</p>
        
        </div>
        </div>
    
        </div>
      </div>
    )
  }

