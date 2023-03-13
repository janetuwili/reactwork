import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div className='Signup'>
        <form action="">
            <label htmlFor="">name</label>
            <input type="text" placeholder='enter your name' /><br />
            <label htmlFor="">Email</label>
            <input type="text" placeholder='enter your email' /><br />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='enter password' /><br />
            <label htmlFor="">ConfirmPassword</label>
            <input type="text" placeholder='confirm password'/>
            <button>Signup</button>
        </form>
      </div>
    )
  }
}
