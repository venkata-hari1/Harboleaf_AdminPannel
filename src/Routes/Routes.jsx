import React from 'react'
import PrivateRoutes from './PrivateRoutes'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Auth/Login'
import Updatepassword from '../Components/Auth/Updatepassword'
import Otp from '../Components/Auth/OTP'
const AppRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Login />}/>
      <Route path="/reset-password" element={<Updatepassword />}/> 
      <Route path="/Otp" element={<Otp />}/>
      <Route path='/admin/*' element={<PrivateRoutes />}/> 
    </Routes>
  )

}
export default AppRoutes
