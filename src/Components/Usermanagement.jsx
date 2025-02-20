import React from 'react'
import "../Styles/Usermanagement.css";
import  Pagination  from './Pagination';
import '../Styles/Pagination.css';
import { useNavigate } from 'react-router-dom';
import Actions from './ActionBtns/Actions';
import { tabledata } from './JSON_Data/JSON';
import SuspendandFilter from './SuspendandFilter';

const Usermanagement = () => {
const[id,setId]=React.useState(null)
const navigate=useNavigate()
const userInfo=(id)=>{
  navigate(`profile-info/${id}`)
}
const handleOpen=(id)=>{
  setId((prev)=>(prev===id?null:id))
}

return (
  <div className='container' style={{height:"90vh"}}>
      <SuspendandFilter/>
    <div className="tab-content table-responsive">
   <table className="table table-borderless mt-5 ">
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
     tabledata.map((tdata)=>(
      <tr key={tdata.id}>
      <th>{tdata.id}</th>
      <td onClick={()=>userInfo(tdata.id)}>
      <img
            src={`https://robohash.org/${tdata.username}?size=40x40`}
            alt="avatar"
            className="rounded-circle me-2"
            width="30"
            height="30"
            style={{objectFit:"cover",border:'1px solid white',marginBottom:'2px'}}
          />
        {tdata.username}
        </td>
      <td>{tdata.accountstatus}</td> 
      <td>{tdata.contact}</td>
      <td>{tdata.date}</td>
      <td>{tdata.state}</td>    
      <td className='action-btns' onClick={()=>handleOpen(tdata.id)}>
        <button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Actions
    </button>
    {id===tdata.id&&<Actions/>}
    </td>
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

export default Usermanagement