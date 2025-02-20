import React from 'react'
import Pagination from './Pagination'
import Actions from './ActionBtns/Actions';
import UserPopUp from './PopUps/UserPopUp';
import SuspendandFilter from './SuspendandFilter';
const Userreports = () => {
  const[state,setState]=React.useState(false)
  const [id, setId] = React.useState(null)
  const handleOpen = (id) => {
    setId((prev) => (prev === id ? null : id))
  }
  const tabledata = [
    {
      id: 1,
      username: 'Navogithkour',
      state: 'Mizoram',
      contact: "+91-9939393939",
      userreported: 10,
      reason: "vibe",
    },
    {
      id: 2,
      username: 'Viswas Patel',
      state: 'TamilNadu',
      contact: "+91-9930302059",
      userreported: 12,
      reason: "post",
    },
    {
      id: 3,
      username: 'Nandan Raikar',
      state: 'Megalaya',
      contact: "+91-9930202503",
      userreported: 3,
      reason: "post",
    },
    {
      id: 4,
      username: 'Sunil Boudurya',
      state: 'Punjab',
      contact: "+91-9930402040",
      userreported: 3,
      reason: "Account",
    },
    {
      id: 5,
      username: 'MS Subramanyam',
      state: 'Tamilnadu',
      contact: "+91-9935930040",
      userreported: 4,
      reason: "Account",
    },

  ]
  const handleClick=()=>{
    setState(!state)
  }

  return (
   <div style={{position:'relative'}}>
    {state&&<UserPopUp handleClick={handleClick}/>}
    <div className='container'>
      <SuspendandFilter />
      <div class="tab-content table-responsive">
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
          </thead><br />
          <tbody >
            {
              tabledata.map((tdata) => (
                <tr key={tdata.id}>
                  <th>{tdata.id}</th>
                  <td onClick={handleClick}>
                    <img
                      src={`https://robohash.org/${tdata.username}?size=40x40`}
                      alt="avatar"
                      className="rounded-circle me-2"
                      width="30"
                      height="30"
                      style={{ objectFit: "cover", border: '1px solid white', marginBottom: '2px' }}
                    />
                    {tdata.username}</td>
                  <td>{tdata.state}</td>
                  <td>{tdata.contact}</td>
                  <td>{tdata.userreported}</td>
                  <td>{tdata.reason}</td>
                  <td><button onClick={() => handleOpen(tdata.id)} className="btn dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Actions
                  </button>
                    {id === tdata.id && <Actions />}
                  </td>
                </tr>


              ))
            }
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
    </div>

  )
}

export default Userreports
