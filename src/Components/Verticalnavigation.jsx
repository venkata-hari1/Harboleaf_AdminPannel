import React from 'react'
import '../Styles/Verticalnavigation.css';
import Harborleaf from '../assets/Harboleaf_logo.png';
const Verticalnavigation = () => {

   const menudata=[
  
      "User Management",
      "User Management Reports",
      "GST User Management",
      "GST User Reports",
      "Emergency Management",
      "AD Management",
      "Edit profile"
  ]

     
return (
    <div className='container mt-3' style={{
      display:"flex",
      alignItems:"center",
      flexDirection:"column"
    }}>
      <div className='logo' />  
      <img src={Harborleaf}  width="225px" height="55px"/>
    <div>
      <p className='mt-4' style={{color:"#898989"}}>MENU</p>  
      <ul>
      {
        menudata.map( (menu,index) =>(
          <li key="index">
          {menu === "User Management" && <i className="icons bi bi-people-fill"></i>}
          {menu === "User Management Reports" && <i className="icons bi bi-people-fill"></i>}
          {menu === "GST User Management" && <i className="icons bi bi-briefcase-fill"></i>}
          {menu === "GST User Reports" && <i className="icons bi bi-briefcase-fill"></i>}
          {menu === "Emergency Management" && <i className="icons bi bi-shield-fill-check" style={{color:"#FF0000"}}></i>}
          {menu === "AD Management" && <i className="icons bi bi-badge-ad-fill" ></i>}
          {menu === "Edit profile" && <i className="icons bi bi-person-circle"></i>}
         <a className="ms-2">{menu}</a>
          </li>
          ))
      }  
      </ul>   
    </div>
      
    <div className="adminbutton d-flex align-items-center p-3  rounded shadow mt-5">
     
      <button className="btn p-0">
      <img src="http://www.w3.org/2000/svg" class="rounded-circle" width="45px" height="45px" />
      </button>
      
      <div className="ms-3" style={{background:"#29292C"}}>
        <h6 className="mb-0 fw-bold" style={{background:"#29292C",color:"#FFFFFF"}}>John Doe</h6>
        <small className="text-white" style={{background:"#29292C",color:"#898989"}}>Admin</small>
      </div>

      <div className="ms-auto d-flex align-items-center" style={{background:"#29292C"}}>
      <button style={{background:"#29292C",border:"none",color:"white"}}><i className="bi bi-bell-fill me-2"></i></button>
      <button style={{background:"#29292C",border:"none",color:"white",}}><i className="bi bi-envelope-fill ms-2 "></i>
      </button>
     
      </div>
    </div>
        
    </div>
    
  )
}

export default Verticalnavigation
