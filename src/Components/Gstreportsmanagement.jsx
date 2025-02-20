import React from 'react'
import Pagination from './Pagination'
import {GSTReports} from './JSON_Data/JSON'
import Actions from './ActionBtns/Actions';
import SuspendandFilter from './SuspendandFilter';
const Gstreportsmanagement = () => {
    const[id,setId]=React.useState(null)
    const handleOpen=(id)=>{
      setId((prev)=>(prev===id?null:id))
    }

  return (
    <div className='container'>
      <SuspendandFilter />
    <div class="tab-content table-responsive">
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
     GSTReports.map((tdata,index)=>(
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
      <td><button onClick={()=>handleOpen(tdata.id)} className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Actions
    </button>
       {id===tdata.id&&<Actions/>}
    </td>
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