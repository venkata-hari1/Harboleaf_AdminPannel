import React from 'react'
import Pagination from './Pagination'
const Gstreportsmanagement = () => {
  
    const tabledata=[
        {
          id:1,
          username:'Navogithkour',
          gstusername: '22AAAAA0000A1Z5',
          reason:"Fake",
          state:'Telangana',
          date:"01/12/2012",
          userreported:'10',
          reasonview:'Vibe'
      },
      {
        id:2,
        username:'Nandan Raviokur',
        gstusername: '33AAAAA0000A1Z5',
        reason:"Fake",
        state:'Maharastra',
        date:"04/12/2014",
        userreported:'20',
        reasonview:'Vibe'
    },
    {
        id:3,
        username:'Vyas devan',
        gstusername: '44AAAAA0000A1Z6',
        reason:"Fake",
        state:'Karnakataka',
        date:"06/11/2023",
        userreported:'10',
        reasonview:'post'
    }, 
    {
        id:4,
        username:'Ms subramanyan',
        gstusername: '44AAAAA0000A1Z5',
        reason:"Spam",
        state:'Andhrapradesh',
        date:"04/12/2013",
        userreported:'15',
        reasonview:'Vibe'
    },   
   
  ]
  
  return (
    <div className='container'>
      
    <div className='d-flex justify-content-end mt-4'>
      <button className='btn btn-primary me-3'  style={{backgroundColor:"#3856F3",fontFamily:"Roboto"}}>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill ms-2" viewBox="0 0 16 16">
    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
    </svg></button>
      <button className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}>Suspended Accounts</button>
    </div>
   
<div className="tab-content table-responsive">
   <table className="table table-borderless mt-4">
   <thead >
  <tr >
    <th>S.No</th>
    <th>User Name</th>
    <th>GST Username</th>
    <th>Reason</th>
    <th>State</th>
    <th>Actions</th>
    <th>Date</th>
    <th>Users Reported</th>
    <th>Reason</th>
    
  </tr>
</thead><br/>
<tbody >
{
     tabledata.map((tdata,index)=>(
      <tr key={tdata.id}>
      <th>{tdata.id}</th>
      <td> 
      <img
            src={`https://robohash.org/${tdata.username}?size=40x40`}
            alt="avatar"
            className="rounded-circle me-2"
            width="30"
            height="30"
            style={{objectFit:"cover",border:'1px solid white',marginBottom:'2px'}}
          />
        {tdata.username}</td>
      <td>{tdata.gstusername}</td> 
      <td>{tdata.reason}</td>
      <td>{tdata.state}</td>
      <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Actions
    </button></td>
      <td>{tdata.date}</td>
      <td>{tdata.userreported}</td>
      <td>{tdata.reasonview}</td>
     
          
     </tr>


   ))
  }
  
 </tbody>
  </table>
  </div>
  <Pagination />
     
  </div>
  )
}

export default Gstreportsmanagement