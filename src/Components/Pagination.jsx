import React from 'react'
import '../Styles/Pagination.css';
const Pagination = () => {
  return (
    <div className='position-fixed bottom-0 start-0 end-0 d-flex justify-content-center'>
     <nav aria-label="Page navigation">
  <ul class="pagination d-flex justify-content-center ">
    <li class="page-item me-2">
      <a class="page-link" id="lt1" href="#" aria-label="Previous" style={{backgroundColor: "#C4CDD5" ,display:"flex", justifyContent:"center", alignItems:"center"}}>
        <span id="lt2"aria-hidden="true">&lt;</span>
      </a>
    </li>
    <li class="page-item me-2"><a className="page-link text-primary" id="one" href="#" style={{backgroundColor:" #4200FF",border: "1px solid #4200FF", display:"flex", justifyContent:"center", alignItems:"center",color:"blue !important"}}>1</a></li>
    <li class="page-item me-2"><a className="page-link" href="#" style={{display:"flex", justifyContent:"center", alignItems:"center", border:""}}>2</a></li>
    <li class="page-item me-2"><a className="page-link" href="#" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>...</a></li>
    <li class="page-item me-2"><a className="page-link" href="#" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>9</a></li>
    <li class="page-item me-2"><a className="page-link" href="#" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>10</a></li>
    <li class="page-item me-2">
      <a class="page-link" href="#" aria-label="Next" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <span aria-hidden="true">&gt;</span>
      </a>
    </li>
  </ul>
</nav>

    </div>
  )
}

export default Pagination
