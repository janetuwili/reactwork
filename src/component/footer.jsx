import React, { Component } from 'react'

 class Footer extends Component {
  render() {
    return (
      <div className='grid grid-cols-3 bg-gray-800 text-white m-0'>
        <div className=''>
          <h2>animals</h2>

          <ul>
            <li>cat</li>
            <li>pig</li>
            <li>hen</li>
            <li>chicken</li>
            <li>butterfly</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>playing</li>
            <li>dancing</li>
            <li>entertainment</li>
            <li>walking</li>
            <li>singing</li>
            <li>studying</li>

          </ul>
        </div>
        <div>
          we strive for success
        </div>

      </div>
    )
  }
}
export default Footer
