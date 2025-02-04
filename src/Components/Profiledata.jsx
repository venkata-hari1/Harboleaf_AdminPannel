import React from 'react'
import Rectangle from '../assets/Rectangle.png';
import { data } from 'react-router-dom';
const Profiledata = () => {

  const profiledata=[

    {id:1, key:"First Name",value:"Suresh"},
    {id:2,key:"Last Name", value:"Kumar"},
    {id:3, key:"Gender",value:"Male"},
    {id:4, key:"Date of Birth", value:"12-09-2022"},
    {id:5,key:"Phone Number", value:"+91-9434439454"}
  ]

return (
     <div className='container' style={{display:"flex", justifyContent:"space-between"}}>
     <div style={{display:"flex"}}>
      <img src={Rectangle}  width="174px" height="213px" style={{marginTop:"30px"}}/>
     </div>
      
      <div style={{display:'flex',flexDirection:"column",marginTop:"30px"}}>
        <p style={{display:"flex",paddingRight:"500px",fontFamily:"Roboto"}}>Suresh Kumar</p>
        {
          profiledata.map(data=>(
           
            <ul key={data.id} style={{display:"flex",color:"#ffff",fontFamily:"Roboto"}}>
              
              <li>{data.key}</li>
              <li className='ms-5'>{data.value}</li>
            </ul>
           
          )) 
       } 
     </div>
     
     <div style={{display:"flex"}}> 
     <button className='btn' style={{color:"#FF0000",border:"1px solid #3856F3",color:"#fff",fontFamily:"Roboto",height:"40px", marginTop:"30px"}}>Download Report<i className="bi bi-download "></i></button>
     </div>

     
     </div>
  )
}

export default Profiledata

