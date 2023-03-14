import React, { Component } from 'react'
import {Card,CardHeader,
} from "@material-tailwind/react";

 class Home extends Component {
  render() {
    return (
      <>
      <div className=' bg-slate-300'>
        <h2 className='text-black'>Animal</h2>
        <p className='m-5'>A complete collection of the best animal website templates based on Bootstrap Framework 
          what guarantees you full flexibility and extensibility. If you want to promote animal shelters, zoos, 
          pet clinics, or even start an online pet store, you just came to the right place.
          It all becomes a lot simpler with any fantastic web designs you find here. 
          Each of the templates for animal websites is simple to use and effortless to maintain. 
           site skin is coded with beginners in mind, which makes editing a noncomplex process. 
           You are closer than ever to launching your forthcoming project. 
           Bring your passion for animals to the online space quickly with our convenient tools.</p>
      </div>
      <div className='grid grid-cols-3 pt-5'>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/farmie-free-template.jpg.webp" alt="profile-picture" />
      </CardHeader>    
    </Card>
        </div>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/dogger-free-template-353x278.jpg" alt="profile-picture" />
      </CardHeader>
      
    </Card>
        </div>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/petsitting-free-template-353x278.jpg" alt="profile-picture" />
      </CardHeader>
     
    </Card>
        </div>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/anipat-free-template-353x278.jpg" alt="profile-picture" />
      </CardHeader>
     
    </Card>

        </div>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/thepetcare-free-template-353x278.jpg" alt="profile-picture" />
      </CardHeader>
     
    </Card>
        </div>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/animalshelter-free-template-1-353x278.jpg.webp" alt="profile-picture" />
      </CardHeader>
     
    </Card>
        </div>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/breed-free-template-353x278.jpg.webp" alt="profile-picture" />
      </CardHeader>
     
    </Card>
        </div>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/doglife-free-template-353x278.jpg.webp" alt="profile-picture" />
      </CardHeader>
     
    </Card>
        </div>
        <div>
          <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/horseclub-free-template-353x278.jpg.webp" alt="profile-picture" />
      </CardHeader>
     
    </Card>
        </div>
    
      </div>
      <div className='bg-slate-300 h-20 pt-5'>
        We change everything WordPress. One WordPress theme at a time
        <button className='bg-blue'>Find out more</button>
      </div>
      </>
      
    )
  }
}
export default Home
