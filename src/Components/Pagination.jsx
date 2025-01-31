import React from 'react'

const Pagination = () => {
  return (
    <div className='d-flex justify-content-center align-items-end' style={{height:"37vh"}}>
    <ul className="pagination">
        <li className="page-item me-2" >
        <a className="page-link"  href="#" aria-label="Previous"  >
         <span aria-hidden="true">&lt;</span>
        </a>
        </li>
        <li className="me-2"><a className="page-link" href="#" id="one">1</a></li>
        <li className="page-item me-2"><a className="page-link" href="#">2</a></li>
        <li className="page-item me-2"><a className="page-link" href="#">....</a></li>
        <li className="page-item me-2"><a className="page-link" href="#">9</a></li>
        <li className="page-item me-2"><a className="page-link" href="#">10</a></li>
  
        <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
        </a>
        </li>
    </ul>
    </div>
  )
}

export default Pagination
