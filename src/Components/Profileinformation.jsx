import React from 'react'
import Profiledata from './Profiledata'
import Socialdata from './Socialdata'
import Postdata from './Postdata'

const Profileinformation = () => {
  return (
    <div className='container' style={{display:"flex", flexDirection:"column",}} >
        <Profiledata />
        <Socialdata />
        <Postdata />

    </div>
  )
}

export default Profileinformation