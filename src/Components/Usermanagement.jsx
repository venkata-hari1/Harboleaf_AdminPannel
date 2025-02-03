import React from 'react'
import "../Styles/Usermanagement.css";
import  Pagination  from './Pagination';
import '../Styles/Pagination.css';

const Usermanagement = () => {

  const tabledata=[
    {
      id:1,
      username:'Navogithkour',
      accountstatus: 'active',
      contact: "+91-9939393939",
      date:"20/02/2001",
      state:"Telangana",
   },
   {
     id:2,
     username:'Mark',
     accountstatus: 'inactive',
     contact: "+91-9909393939",
     date:"20/02/2001",
      state:"Telangana",
    },
   {
   id:3,
   username:'Johnphelm',
   accountstatus: 'inactive',
   contact: "+91-9939393929",
    date:"20/02/2001",
    state:"Telangana",
  },
 {
 id:4,
 username:'Neroha sahol',
 accountstatus: 'active',
 contact: "+91-9939393940",
 date:"20/02/2001",
 state:"Telangana",
}
]

return (
    <div className='container'>
      
    <div className='d-flex justify-content-end mt-4'>
      <button className='btn btn-primary me-3' style={{backgroundColor:"#3856F3",fontFamily:"Roboto"}}>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill ms-1" viewBox="0 0 16 16">
<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
</svg></button>
      <button className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}> Suspended Accounts</button>
    </div>
   
   <table className="table table-borderless mt-4">
   <thead >
  <tr>
    <th>S.No</th>
    <th>User Name</th>
    <th>Account Status</th>
    <th>Contact details</th>
    <th>Date Added</th>
    <th>State</th>
    <th>Actions</th>
  </tr>
</thead><br/>
<tbody >
  {
     tabledata.map((tdata,index)=>(
      <tr key={tdata.id}>
      <th>{tdata.id}</th>
      <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" /> {tdata.username}</td>
      <td>{tdata.accountstatus}</td> 
      <td>{tdata.contact}</td>
      <td>{tdata.date}</td>
      <td>{tdata.state}</td>    
      <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Actions
    </button></td>
  </tr>


   ))
  }
</tbody>
  </table>
  <Pagination />
  </div>
  )
}

export default Usermanagement
