import React from 'react'
import { data } from 'react-router-dom'

const Socialdata = () => {

    const socialdata=[

        {id:1, key:"Display Name",value:"Suresh 01"},
        {id:2,key:"User ID", value:"HL20241003ABC123"},
        {id:3, key:"Bio",value:"Explorer at heart 🌍 | Fitness enthusiast 💪 | Dog lover 🐾 | Living life one adventure at a time ✨"},
        {id:4, key:"Account type", value:"Public"},
        {id:5,key:"Status", value:"Explorer at heart 🌍 | Fitness enthusiast 💪 | Dog lover 🐾 | Living life one adventure at a time ✨"}
      
    ]

  return (
   <div className='container'>
    <div className='wrapper' style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
    <div style={{display:"flex",fontFamily:"roboto",color:"#fff",}}>
      <p>Socila media Information</p>
    </div>
    
      {
         socialdata.map( data=>(
          <div style={{display:"grid", gridTemplateColumns:"15% 85%",fontFamily:"roboto", }}>
          <p style={{color:"#B9B9B9"}}>{data.key}</p>
          <p style={{color:"#FFFFFF"}}>{data.value}</p>
          </div>
         ))


      }
    

    </div>

   </div>
  )
}

export default Socialdata