import React from 'react'
import Data from './Data.json'


export default function Display() {
  return (
    <div>
        {
            
            Data.map(post => (<h2>{post.name}</h2> 
            ))
        }

    </div>
  )
}
