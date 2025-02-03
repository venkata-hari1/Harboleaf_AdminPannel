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
    <div style={{width:"100%", display:"flex",flexDirection:"column"}}>
    
    <div style={{width:"100%", display:"flex", flexDirection:"column",borderRadius:"25px",height:"260px"}}>
        
        <div style={{display:"flex" }}>
           <p>Social media Information</p> 
        </div>
        
        <div style={{display:"flex", flexDirection:"column",color:"#ffff",fontFamily:"roboto",justifyContent:"space-between" }}>
            {
             socialdata.map( (data)=>(
             <ul key={data.id} style={{display:"flex",justifyContent:"start"}}>
                
                <li>{data.key}</li>
                <div style={{display:"flex"}}> <li className="ms-2" style={{display:"flex",justifyContent:"space-between"}}>{data.value}</li></div>
            </ul>  
                
            ))
         }
    </div>

    </div>
      

    </div>
  )
}

export default Socialdata