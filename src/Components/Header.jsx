import React from 'react'
import '../Styles/Header.css';
import { useLocation } from 'react-router-dom'
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
    <div>
     <div className='header-container'>
       <div className='header-title'>
           <p>{name}</p> 
        </div>
        <div className='search-notify'>
        <div className='header-serach'>
        <button id="header-button"><i className="bi bi-search"></i> Search</button>
        </div>

        <div className='header-notify'>
          <button id="notify-button" ><i className="bi bi-bell-fill "></i></button>
        </div>

        </div>


     </div>

     {location.pathname!=="/admin/user-management/profile-info/1"&&<div className='total'>
      <p id="total1">Total Users</p>
      <p id="total2">40,300</p>
      <p id="total3"><i className="bi bi-arrow-up-right "  style={{ background:"#26666333",color: "#4AD991" }}></i><span style={{ background:"#26666333",color: "#4AD991" }}>4.8</span>from yesterday</p>
     </div>}

   </div>   

  )
}

export default Header