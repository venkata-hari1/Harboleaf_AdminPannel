import React from "react"
import { useNavigate } from 'react-router-dom';
import './Styles/Login.css'
import Logo from "./Logo"
function Login() {
const navigate=useNavigate()
 const handleSignIn=(e)=>{
 e.preventDefault()
  navigate('/admin/user-management')
 }
 const handleForgetPassword=()=>{
  navigate('/otp')
 }
  return (

    <div className="container-fluid " style={{height:'100vh',overflowY:'hidden'}}>
      <Logo />
      <div className="row text-center text-white mt-5">
        <h3>ADMIN PANEL</h3>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <div>
            <h4 className="text-center mt-5">Sign In</h4>
            <form>
              <div className="mb-3 ">
                <input type="email" className="form-control" id="email" placeholder="email" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="password" required />
                
              </div>
              <div className="mb-3 text-end">
              <span className="forget-password" onClick={handleForgetPassword}>Forgot password?</span>
              </div>
              <button type="submit" className="signin btn btn-primary w-100" onClick={handleSignIn}>Sign In</button>
              <div className="mb-3 text-center text-white mt-3">
                <p className="noaccount" type="btn" >Dont have an account? <a href="#">Sign up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>

  )

}
export default Login