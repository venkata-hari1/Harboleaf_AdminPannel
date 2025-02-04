import React from 'react'
import '../Styles/Header.css';
import { useLocation } from 'react-router-dom'
import Header_bg from '../assets/Header_bg.png'
const Header = () => {
  const location = useLocation()
  let name = "";

  switch (location.pathname) {
    case "/admin/user-management":
      name = "User Management";
      break;
    case "/admin/user-reports":
      name = "User Management Reports";
      break;
    case "/admin/gst-users":
      name = "GST User Management"
      break;
    case "/admin/gst-reports":
      name = "GST User Reports";
      break;
    case "/admin/emergency":
      name = "Emergency Management";
      break;
    case "/admin/moniter-compaign":
      name = "AD Management";
      break;
    case "/admin/edit-profile":
      name = "Edit Profile";
      break;
    default:
      name = "Dashboard";
  }
  return (
    <div className="header-wrapper" 
    style={{display:"flex",height:"110px",width:"100%",background:"#4fabc2"}}>
     
     <div style={{
       width:"100%",
       height:"100%",
       background:"#357fb0",
       display:"flex",
       fontFamily:"roboto",
       color:"#ffff",
       fontWeight:600,
       

       
      }}>
       <p style={{background:"#357fb0",marginTop:"30px", marginLeft:"30px"}}>{name}</p>
     </div>

     <div style={{ background:"#357fb0",display:"flex",justifyContent:"end"}}>
     <button className="btn me-2" 
     style={{ width: "420px", height: "54px",background:"#00000080", border: '1px solid  #585858a3', color: '#FFFFFF', display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: "20px" }}><i className="bi bi-search me-2"></i> Search</button>
     </div>
    <div style={{background:"#357fb0",display:"flex"}}>
    <div style={{background:"#357fb0",  display: "flex", justifyContent:"center",paddingRight:"20px"}}>
            <button className='btn me-3' style={{ background:"#00000080",display: "flex",width:"50px", height:"54px",color: '#ffff', justifyContent: "center", alignItems: 'center',marginTop:"20px",marginRight:"20px"}}><i className="bi bi-bell-fill "></i></button>
     </div>
    </div>
     
    <div style={{ display:"flex",background:"#0c1320",flexDirection:"column",justifyContent:"start",alignItems:"start",color:"#ffff",borderRadius:"20px", width: "170px", height: "135px", top: "88px", fontFamily: "roboto",  marginLeft: "30px", padding:"15px",position: "absolute" }}>
        <p style={{fontSize:"14px",background:"#0c1320"}}>Total Users</p>
        <p style={{ fontSize: "22px",background:"#0c1320" }}>40,300</p>
        <p style={{ fontSize: "13px",fontWeight: "400",background:"#0c1320" }}><i className="bi bi-arrow-up-right" style={{ height: "5px", width: "5px", color: "#4AD991",background:"#26666333" }}></i><span style={{ background:"#26666333",color: "#4AD991" }}>4.8</span>  from Yesterday</p>
      </div>

     

</div>
  )
}

export default Header