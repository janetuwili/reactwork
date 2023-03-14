import React, { Component } from 'react'
import "../index.css"
import { SocialIcon } from 'react-social-icons';


class Contact extends Component {
  render() {
    return (
      <div className='contact-container'>
        <div className='image-container bg-gradient-to-r bg-cover'>
          {/* <img style={{width:"100%", height:"60vh"}} src='' alt='background-image'/> */}
          <h1 className='pt-5 px-12 font-bold text-lg'>Unsplash</h1>
          <p className='m-2'>The internet’s source for visuals.</p>
          <p className='m-2'>Powered by creators everywhere.</p>
          


        </div>
        <div className='grid grid-cols-3'>
          <div className='italic font-bold pt-0 m-2 w-70'>
            Do not hesitate to contact us if you wish and want to relax.
            We are here for solutions. Come and enjoy with your friend,
            which makes you to relax and feel free for every occasion.
            We offer better service to our customers.
            We have various kinds of animal that are very beautiful and more interesting,
            which is more visible to our partner.


          </div>
          <div>
            <div className='italic font-bold pt-2 m-2 w-70'>
              {/* ...existing text here... */}
              <div className='flex mt-4'>
                <SocialIcon url='https://www.facebook.com/' style={{ height: 30, width: 30, marginRight: 10 }} />
                <SocialIcon url='mailto:example@example.com' style={{ height: 30, width: 30, marginRight: 10 }} />
                <SocialIcon url='https://www.twitter.com/' style={{ height: 30, width: 30, marginRight: 10 }} />
                <SocialIcon url='tel:+1234567890' style={{ height: 30, width: 30 }} />
              </div>
            </div>
          </div>
          <div className='picture-container'>
            <img src='https://images.unsplash.com/photo-1678750267387-f15742256ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
          </div>

        </div>



      </div>
    )
  }
}
export default Contact
