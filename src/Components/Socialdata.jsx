import React from 'react'

const Socialdata = () => {

    const socialdata=[

        {id:1, key:"Display Name",value:"Suresh 01"},
        {id:2,key:"User ID", value:"HL20241003ABC123"},
        {id:3, key:"Bio",value:"Explorer at heart 🌍 | Fitness enthusiast 💪 | Dog lover 🐾 | Living life one adventure at a time ✨"},
        {id:4, key:"Account type", value:"Public"},
        {id:5,key:"Status", value:"Explorer at heart 🌍 | Fitness enthusiast 💪 | Dog lover 🐾 | Living life one adventure at a time ✨"}
      
    ]

  return (
   <div className='container' style={{display:"flex"}}>
       <div style={{display:"flex",flexDirection:"column",paddingRight:"100px"}}>
       <p style={{display:"flex",fontFamily:"Roboto"}}>Social Media Information</p>
       {
          socialdata.map(data=>(
           
            <ul key={data.id} style={{display:"flex",color:"#ffff",fontFamily:"Roboto"}}>
              
              <li>{data.key}</li>
              <li className='ms-5'>{data.value}</li>
            </ul>
           
          )) 
       } 


       </div>
  
   </div>
  )
}

export default Socialdata