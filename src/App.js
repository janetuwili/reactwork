import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './component/navbar'
import Menu from './component/Menu'
import Footer from './component/footer'
import Contact from './component/contact'
// import Footer from './component/footer'
import Home from './component/home'
import Aboutus from './component/aboutus'
import Content from './component/content'
import Signup from './component/Signup'
import Vieu from './component/Vieu'
import Display from './Display'



 class App extends Component {
  render() {
    return (
      <>
      <div>
        
        <Navbar/>
        
        
        <Routes>
            <Route path='' element={<Content/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/home' element={<Home/>}/>
            {/* <Route path='/footer' element={<Footer/>}/> */}
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Vieu' element={<Vieu/>}/>
          
        </Routes>
        
      </div>
      <Footer/>
      </>
    )
  }
}
export default App