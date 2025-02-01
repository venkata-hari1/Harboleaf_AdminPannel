import React from 'react';
import '../Styles/Verticalnavigation.css';
import Harborleaf from '../assets/Harboleaf_logo.png';
import { useNavigate } from 'react-router-dom';
const Verticalnavigation = () => {
  const navigate=useNavigate()
  const menudata = [
    { id: 1, menu: "User Management", icon: "bi-people-fill", route: "user-management", locationRoute: "/admin/user-management" },
    { id: 2, menu: "User Management Reports", icon: "bi-people-fill", route: "user-reports", locationRoute: "/admin/user-reports" },
    { id: 3, menu: "GST User Management", icon: "bi-briefcase-fill", route: "gst-users", locationRoute: "/admin/gst-users" },
    { id: 4, menu: "GST User Reports", icon: "bi-briefcase-fill", route: "gst-reports", locationRoute: "/admin/gst-reports" },
    { id: 5, menu: "Emergency Management", icon: "bi-shield-fill-check", route: "emergency", locationRoute: "/admin/emergency", color: "#FF0000" },
    { id: 6, menu: "AD Management", icon: "bi-badge-ad-fill", route: "moniter-compaign", locationRoute: "/admin/moniter-compaign" },
    { id: 7, menu: "Edit Profile", icon: "bi-person-circle", route: "edit-profile", locationRoute: "/admin/edit-profile" },
];
const handleClick=(menu)=>{
  navigate(`/admin/${menu.route}`)
}
  return (
    <div className='container mt-3' style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <div className='logo'>
        <img src={Harborleaf} width="225px" height="55px" alt="Logo" />
      </div>
      <div>
        <p className='mt-4' style={{ color: "#898989" }}>MENU</p>
        <ul>
          {menudata.map((menu) => (
            <li key={menu.id} style={{cursor:'pointer'}} onClick={()=>handleClick(menu)}>
              <i className={`icons bi ${menu.icon}`} style={menu.color ? { color: menu.color } : {}}></i>
              <a className="ms-2">{menu.menu}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="adminbutton d-flex align-items-center p-3 rounded shadow mt-5">
        <button className="btn p-0">
          <img src="http://www.w3.org/2000/svg" className="rounded-circle" width="45px" height="45px" alt="Admin" />
        </button>

        <div className="ms-3" style={{ background: "#29292C" }}>
          <h6 className="mb-0 fw-bold" style={{ color: "#FFFFFF" }}>John Doe</h6>
          <small className="text-white" style={{ color: "#898989" }}>Admin</small>
        </div>

        <div className="ms-auto d-flex align-items-center" style={{ background: "#29292C" }}>
          <button style={{ background: "#29292C", border: "none", color: "white" }}>
            <i className="bi bi-bell-fill me-2"></i>
          </button>
          <button style={{ background: "#29292C", border: "none", color: "white" }}>
            <i className="bi bi-envelope-fill ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verticalnavigation
