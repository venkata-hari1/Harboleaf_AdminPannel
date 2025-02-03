import React from 'react'
import Rectangle from '../assets/Rectangle.png';
const Profiledata = () => {

  const profiledata=[

    {id:1, key:"First Name",value:"Suresh"},
    {id:2,key:"Last Name", value:"Kumar"},
    {id:3, key:"Gender",value:"Male"},
    {id:4, key:"Date of Birth", value:"12-09-2022"},
    {id:5,key:"Phone Number", value:"+91-9434439454"}
  ]

return (
    <div className='profile-container mt-5' style={{width:"100%"}}>
      <div style={{display:"flex",
        width:"100%",
        backgroundColor:"#60606017",
        height:"417px",
        borderRadius:"25px", 
        Top:"10px"}}>  
      <div className='profile-photo' style={{display:"flex", width:"20%",}}>
        <img src={Rectangle}  width="174px" height="213px" style={{marginLeft:"46px",}} />
      </div>
      <div className='profile-data' style={{display:"flex", width:"60%",flexDirection:"column"}}>
        <div style={{display:"flex"}}>
        <p style={{display:"flex"}}>Suresh Kumar</p><br/>
        </div><br/>
              
         <div style={{display:"flex",flexDirection:"column"}}>
           {
             profiledata.map((data)=>(

               <div style={{display:"flex",
                 fontFamily:"roboto",
               }}>
                <ul key={data.id} style={{display:"flex",justifyContent:"space-between",color:"#ffff"}}>
                   <li className="me-5" style={{display:"flex",fontWeight:"400"}}>{data.key}</li>
                   <li   style={{display:"flex",justifyContent:"space-between !important"}}>{data.value}</li>
                </ul>
               </div> 


             ) )

           }
        </div>
      </div>
      <div style={{display:"flex",width:"20%"}}>
      <button className='btn' style={{color:"#FF0000",border:"1px solid #3856F3",color:"#fff",fontFamily:"Roboto",height:"40px"}}>Download Report<i className="bi bi-download ms-2"></i></button>
      </div>
      </div>
    </div>
  )
}

export default Profiledata