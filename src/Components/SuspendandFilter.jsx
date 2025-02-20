import React, { useState } from 'react'

const SuspendandFilter = () => {

  
  const[suspens,setSuspend]=useState(null) 
  const[dis,setDis]=useState("")
  
  function dropdownOpen(){
    
     setDis((prev)=>!prev)
     setSuspend('action_btns_container')
}

  return (
    <div>
      <div  style={{display:"flex",justifyContent:"end"}}>
     <button  className='btn btn-primary me-3' style={{backgroundColor:"#3856F3",fontFamily:"Roboto"}}>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill ms-1" viewBox="0 0 16 16">
     <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
    </svg></button>
    
      <button onClick={()=>dropdownOpen()} className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}> Suspended Accounts</button>
      <div className={suspens} style={{display:dis?"block":"none", marginTop:"40px"}}>
            <button className='gst-retrive-child'>Temporary Suspended</button>
            <button className='gst-retrive-child'>Suspended</button>
            <button className='gst-retrive-child'>Deleted</button>
        </div>
    </div>

    </div>
  )
}
export default SuspendandFilter


export const FilterandEmergency=()=>{

  

    return(
        <div className='d-flex justify-content-end mt-4' style={{paddingLeft:"50px"}}>
        <button className='btn btn-primary me-3'>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
      </svg></button>
        <button className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}> Emergency Reports</button>
      </div>

    )

}

export const FilterandSuspendAccount=()=>{
  
  const[suspens,setSuspend]=useState(null) 
  
  const[dis,setDis]=useState("")
  function dropdownOpen(){
    
    setDis((prev)=>!prev)
    setSuspend('action_btns_container')


  }
    return(
        <div>
          <div className='d-flex justify-content-end mt-4'>
          <button className='btn btn-primary' style={{backgroundColor:"#3856F3",fontFamily:"Roboto"}}>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill ms-1" viewBox="0 0 16 16">
         <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
         </svg>
         </button>
      <button onClick={()=>dropdownOpen()}className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}>Suspended</button>
      <div className={suspens} style={{display:dis?"block":"none", marginTop:"40px"}}>
            <button className='gst-retrive-child'>Temporary Suspended</button>
            <button className='gst-retrive-child'>Suspended</button>
            <button className='gst-retrive-child'>Deleted</button>
        </div>
    </div>
        </div>
    )
}