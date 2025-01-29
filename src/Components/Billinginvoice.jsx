import React from 'react'
import '../Styles/Billinginvoice.css'

const Billinginvoice = () => {
  return (
    <div className='container'>
      
    <div className='d-flex justify-content-end mt-4'>
      <button className='btn btn-primary me-3'>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
</svg></button>
      
    </div>
   
   <table className="table table-borderless mt-4">
   <thead >
  <tr >
    <th>Advertisment No</th>
    <th>Advertisment firm</th>
    
    <th>Advertisename</th>
    <th>Amount paid</th>
    <th>Date of payment</th>
    <th>Download</th>
  </tr>
</thead><br/>
<tbody >
  <tr>
    <th >1</th>
    <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" /> Binfoled Ltd</td>
     <td>Active</td>
    <td>₹2,50,000</td>
    <td>02/04/2023</td>
    <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Download
    </button></td>
    
  </tr>
  <tr>
  <th >2</th>
    <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" /> Abstergo Ltd</td>
     <td>Active</td>
    <td>₹2,48,000</td>
    <td>02/04/2011</td>
    <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Download
    </button></td>
  </tr>
  <tr>
  <th >3</th>
    <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" />Big Kahuna Burger Ltd</td>
     <td>Active</td>
    <td>₹3,45,000</td>
    <td>04/04/2022</td>
    <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Download
    </button></td>
  </tr>
  <tr>
  <th >4</th>
    <td><img src="http://www.w3.org/2000/svg" class="rounded-circle" /> Barone LLC</td>
     <td>Active</td>
    <td>₹4,50,000</td>
    <td>05/04/2023</td>
    <td><button className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Download
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

export default Billinginvoice
