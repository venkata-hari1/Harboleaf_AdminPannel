import React from 'react'
import Usermanagement from './Components/Usermanagement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Gstusermanagement from './Components/Gstusermanagement'
import Billinginvoice from './Components/Billinginvoice'
import Suspendaccounts from './Components/Suspendaccounts'
import Userreports from './Components/Userreports'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Usermanagement />}></Route> 
      <Route path='/user-management' element={<Usermanagement />}></Route> 
      <Route path='/suspend-accounts' element={<Suspendaccounts />} ></Route> 
      <Route path='/gst' element={<Gstusermanagement />} ></Route> 
      <Route path='/billing' element={<Billinginvoice />} ></Route> 
      <Route path='/user-reports' element={<Userreports />} ></Route> 
    
    </Routes>
    </BrowserRouter>
  )

}
export default App
