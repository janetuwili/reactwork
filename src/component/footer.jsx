import React, { Component } from 'react'

 class Footer extends Component {
  render() {
    return (
      <div className=' footer grid grid-cols-3 bg-slate-200'>
        <div>
          <h2>Free Themes</h2>
          <ul className=''>
            
            <li><a>All Free Themes</a></li>
            <li><a>Activelo Theme</a></li>
            <li><a>Illdy Theme</a></li>
            <li><a>Shapely</a></li>
            <li><a>Shapely</a></li>
            <li><a>Sparkling Theme</a></li>
            <li><a>Dazzling Theme</a></li>
            <li><a>Travelfying Theme</a></li>
            <li><a>Unite Wordpress Theme</a></li>
          </ul>
        </div>
        <div>
        <h2>Useful</h2>
          <ul className=''>
            
            <li><a>About colorlib</a></li>
            <li><a>Advertise</a></li>
            <li><a>Wordpress Theme</a></li>
            <li><a>Website Templates</a></li>
            <li><a>Bootstrap Template</a></li>
            <li><a>Support Forum</a></li>
            <li><a>Contact us</a></li>
            <li><a>We are hiring</a></li>
           
          </ul>

        </div>
        <div>
          <h2>Colorlib</h2>
          <ul>
            <li>We change everything WordPress.</li>
            <li>One WP theme at a time.</li>
          </ul>
        </div>

      </div>
    )
  }
}
export default Footer

