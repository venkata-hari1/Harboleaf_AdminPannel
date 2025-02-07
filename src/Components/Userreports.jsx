import React from 'react'
import Pagination from './Pagination'
const Userreports = () => {
   
  const tabledata=[
    {
      id:1,
      username:'Navogithkour',
       state: 'Mizoram',
      contact: "+91-9939393939",
      userreported:10,
      reason:"vibe",
   },
   {  
     id:2,
      username:'Viswas Patel',
      state: 'TamilNadu',
      contact: "+91-9930302059",
      userreported:12,
      reason:"post",
   },
   {  
     id:3,
     username:'Nandan Raikar',
     state: 'Megalaya',
     contact: "+91-9930202503",
     userreported:3,
     reason:"post",
  },
  {  
    id:4,
     username:'Sunil Boudurya',
     state: 'Punjab',
     contact: "+91-9930402040",
     userreported:3,
     reason:"Account",
  },
  {  
    id:5,
     username:'MS Subramanyam',
     state: 'Tamilnadu',
     contact: "+91-9935930040",
     userreported:4,
     reason:"Account",
  },
  
]

  return (
   
    <div className='container'>
      
    <div className='d-flex justify-content-end mt-4'>
      <button className='btn btn-primary me-3' style={{backgroundColor:"#3856F3",fontFamily:"Roboto"}}>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill ms-1" viewBox="0 0 16 16">
      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
     </svg></button>
      <button className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}> Suspended Accounts</button>
    </div>
   
<div className="tab-content table-responsive">
   <table className="table table-borderless mt-4 ">
   <thead >
  <tr>
    <th>S.No</th>
    <th>User Name</th>
    <th>States</th>
    <th>Contact details</th>
    <th>User Reported</th>
    <th>Reason</th>
    <th>Actions</th>
  </tr>
</thead><br/>
<tbody >
  {
     tabledata.map((tdata)=>(
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
      <td>{tdata.state}</td> 
      <td>{tdata.contact}</td>
      <td>{tdata.userreported}</td>
      <td>{tdata.reason}</td>    
      <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Actions
    </button></td>
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

export default Userreports
