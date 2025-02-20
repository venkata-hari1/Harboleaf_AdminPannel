import React from 'react'
import  '../Styles/Suspendaccounts.css';
import Pagination from './Pagination';
import { FilterandSuspendAccount } from './SuspendandFilter';

const Suspendaccounts = () => {

  const tabledata=[
    {
      id:1,
      username:'Navogithkour',
      contact: +91-9939393939,
      date: '10/01/2022',
      reason:"spam",
      status:"temporarly suspended"
   },
   {
    id:2,
    username:'Jakob',
    contact: +91-9939393939,
    date: '10/02/2022',
    reason:"spam",
    status:"temporarly suspended"
 },
 {
  id:3,
  username:'Mark',
  contact: +91-9939393939,
  date: '20/02/2023',
  reason:"illegal",
  status:"suspended"
},
{
  id:4,
  username:'Shoel altaf',
  contact: +91-9939393939,
  date: '20/02/2023',
  reason:"illegal",
  status:"suspended"
},
]

return (
    <div className='container'>
      <FilterandSuspendAccount />
   <div class="tab-content table-responsive">
   <table className="table table-borderless mt-4">
   <thead>
  <tr>
    <th id="sno">S.No</th>
    <th id="username">User Name</th>
    
    <th id="contact-details">Contact details</th>
    <th id="date">Date Suspended</th>
    <th id="reason">Reason</th>
    <th id="action">Actions</th>
    <th id="status">Status</th>
  </tr>
 </thead><br/> 
 <tbody id="user-data">
 {
     tabledata.map((tdata,index)=>(
      <tr key={tdata.id}>
      <th id='suspend-data1'>{tdata.id}</th>
      <td id='suspend-data2'><img src="http://www.w3.org/2000/svg" className="rounded-circle" /> {tdata.username}</td>
       <td id='suspend-data3'>{tdata.contact}</td>
       <td id='suspend-data4'>{tdata.date}</td>
       <td id='suspend-data5'>{tdata.reason}</td>    
       <td ><button id='suspend-data6' className="btn dropdown-toggle" style={{border:"1px solid red"}}>
      Actions
    </button></td>
    <td id="suspend-data7">{tdata.status}</td>
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
export default Suspendaccounts
