import React from 'react'
import Usermanagement from './Components/Usermanagement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Gstusermanagement from './Components/Gstusermanagement'
import Billinginvoice from './Components/Billinginvoice'
import Suspendaccounts from './Components/Suspendaccounts'

import Dummycomponent from './Components/Dummycomponent'
import Emergencymanagement from './Components/Emergencymanagement'
import Monitercompaign from './Components/Monitercompaign'
import Verticalnavigation from './Components/Verticalnavigation'
import Gstreportsmanagement from './Components/Gstreportsmanagement'
import Userreports from './Components/Userreports'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Usermanagement />}></Route> 
      <Route path='/user-management' element={<Usermanagement />}></Route> 
      <Route path='/user-reports' element={<Userreports/>}></Route>
      <Route path='/suspend-accounts' element={<Suspendaccounts />} ></Route> 
      <Route path='/gst-users' element={<Gstusermanagement />} ></Route> 
      <Route path='/gst-reports' element={<Gstreportsmanagement />} ></Route> 
      <Route path='/billing' element={<Billinginvoice />} ></Route> 
     
      <Route path='/emergency' element={<Emergencymanagement />} ></Route> 
      <Route path='/moniter-compaign' element={<Monitercompaign/>} ></Route>
      <Route path='/vertical' element={<Verticalnavigation />}></Route>
    </Routes>
    </BrowserRouter>
  )

}
export default App
