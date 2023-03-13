import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { index } from '@material-tailwind/react/types/components/select'
 class Navbar extends Component {
  render() {
    return (
      <div className=' nav-container text-white text-right  space-x-8 h-12 py-3'>
        <NavLink to='home'>home</NavLink>
        <NavLink to='aboutus'>aboutus</NavLink>
        <NavLink to='contact'>contact</NavLink>
        <NavLink to='Signup'>signup</NavLink>
      </div> 
    )
  }
}
export default Navbar
