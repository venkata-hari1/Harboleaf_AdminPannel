import React from 'react'
import PrivateRoutes from './PrivateRoutes'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Auth/Login'
import Updatepassword from '../Components/Auth/Updatepassword'
import Otp from '../Components/Auth/OTP'
import Header from '../Components/Header'
import Profiledata from '../Components/Profiledata'
import Socialdata from '../Components/Socialdata'
import Postdata from '../Components/Postdata'
const AppRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Login />}/>
      <Route path="/reset-password" element={<Updatepassword />}/> 
      <Route path="/Otp" element={<Otp />}/>
      <Route path='/admin/*' element={<PrivateRoutes />}/> 
      <Route path='/header' element={<Header />}/> 
      <Route path='/profile' element={<Profiledata />}/> 
      <Route path='/social' element={<Socialdata />}/> 
      <Route path='/post' element={<Postdata />}/> 
      
 
    </Routes>
  )

}
export default AppRoutes
