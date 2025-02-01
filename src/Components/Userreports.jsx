import React from 'react'
const Userreports = () => {
  return (
    <div className='container'>
      
      <div className='d-flex justify-content-end mt-4'>
        <button className='btn btn-primary me-3' style={{backgroundColor:"#3856F3"}}>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill  ms-1" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
</svg></button>
        <button className='btn btn-outline-danger me-5' style={{color:"#FF0000",border:"1px solid #FF0000"}}>Suspended Accounts</button>
      </div>
     
     <table className="table table-borderless mt-4 ">
     <thead >
    <tr>
      <th>S.No</th>
      <th>User Name</th>
      <th>States</th>
      <th>Contact details</th>
      <th>User reported</th>
      <th>Reason</th>
      <th>Actions</th>
    </tr>
  </thead><br/>
  <tbody >
    <tr>
      <th >1</th>
      <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" />Navogithkour</td>
      <td>Active</td>
      <td>+91-9939393939</td>
      <td>10</td>
      <td><a href='#'> Vibe</a></td>
      <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Actions
      </button></td>
    </tr>
    <tr>
    <th >2</th>
      <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" />Viswaspatel</td>
      <td>Active</td>
      <td>+91-9939393939</td>
      <td>10</td>
      <td><a href='#'> post</a></td>
      <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Actions
      </button></td>
    </tr>
    <tr>
    <th >3</th>
      <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" />Nandan kumar</td>
      <td>Active</td>
      <td>+91-9939393939</td>
      <td>10</td>
      <td><a href='#'>Vibe</a></td>
      <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Actions
      </button></td>
    </tr>
    <tr>
    <th >4</th>
      <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" />Sunil Bhovadya</td>
      <td>Active</td>
      <td>+91-9939393939</td>
      <td>10</td>
      <td>Account</td>
      <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Actions
      </button></td>
    </tr>
    <tr>
    <th >4</th>
      <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" />MS Subramanyam</td>
      <td>Active</td>
      <td>+91-9940303040</td>
      <td>10</td>
      <td>Account</td>
      <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Actions
      </button></td>
    </tr>
  </tbody>
    </table>

    <div className='position-absolute bottom-0 end-50'>
    <ul className="pagination">
        <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
         <span aria-hidden="true">&laquo;</span>
        </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
        </li>
    </ul>
    </div>
       
    </div>

  )
}

export default Userreports
