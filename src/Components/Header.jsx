import React from 'react'
import '../Styles/Header.css';
import Header_bg from '../assets/Header_bg.png'
const Header = () => {

   return (
    <div className='header-wrapper' style={{
          display:"flex",
          height:"169px",
          width: "100%",
          backgroundImage:`url(${Header_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          }} >
        
        <div className='wrapper1'>
        <div className='logo-name'>
           <p>User Management</p> 
        </div>
         
         <div className='search'>
         <button className="btn" style={{width:"420px", height:"54px",border:'1px solid  #585858a3',color:'#FFFFFF',display:'flex',justifyContent:'start',alignItems:'center',marginTop:"20px"}}><i className="bi bi-search me-2"></i> Search</button>
        
         <div style={{display:"flex",width:"55px", height:"55px",border:"1px solid #585858a3",justifyContent:"center",alignItems:"center",marginTop:"20px" }}>
            <button className='btn' style={{display:"flex", color:'#ffff', justifyContent:"center",alignItems:'center',paddingRight:"30px"}}><i className="bi bi-bell-fill ms-3"></i></button> 
        </div>
        
        
         </div>
        

        </div>

    </div>
  )
}

export default Header