import React from 'react'
import '../Styles/Gstusermanagement.css'
import Pagination from './Pagination'
import {GSTtable} from './JSON_Data/JSON'
import SuspendandFilter from './SuspendandFilter'
const Gstusermanagement = () => {
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
    <th>Subscription Start</th>
    <th>Sub End</th>
    <th>State</th>
  </tr>
</thead><br/>
<tbody >
{
     GSTtable.map((tdata,index)=>(
      <tr key={tdata.id}>
      <th>{tdata.id}</th>
      <td>{tdata.username}</td>
      <td>{tdata.gstusername}</td> 
      <td>{tdata.ssdate}</td>
      <td>{tdata.sedate}</td>
      <td>{tdata.state}</td>    
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

export default Gstusermanagement
