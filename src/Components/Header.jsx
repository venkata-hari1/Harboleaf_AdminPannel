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
      name = "GST User Management";
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
    <div className='header-wrapper' style={{
      display: "flex",
      height: "169px",
      width: "100%",
      backgroundImage: `url(${Header_bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} >

      <div className='wrapper1'>
        <div className='logo-name'>
          <p>{name}</p>
        </div>

        <div className='search'>
          <button className="btn" style={{ width: "420px", height: "54px", border: '1px solid  #585858a3', color: '#FFFFFF', display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: "20px" }}><i className="bi bi-search me-2"></i> Search</button>

          <div style={{ display: "flex", width: "55px", height: "55px", border: "1px solid #585858a3", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <button className='btn' style={{ display: "flex", color: '#ffff', justifyContent: "center", alignItems: 'center', paddingRight: "30px" }}><i className="bi bi-bell-fill ms-3"></i></button>
          </div>
        </div>
      </div>


      <div style={{ border: "1px grove blue", borderRadius: "15px", width: "200px", height: "148px", top: "88px", fontFamily: "roboto", flexDirection: "row", alignItems: "flex-start", marginLeft: "30px", position: "absolute" }}>
        <p>Total Users</p>
        <p style={{ fontSize: "26px" }}>40,300</p>
        <p style={{ fontWeight: "400" }}><i className="bi bi-arrow-up-right" style={{ height: "5px", width: "5px", color: "#4AD991" }}></i><span style={{ color: "#4AD991" }}>4.8</span> from Yesterday</p>
      </div>


    </div>
  )
}

export default Header