import React, { Fragment } from "react"
import Logo from "./Logo"
import './Styles/Updatepassword.css';
import { useNavigate } from "react-router-dom";
function Updatepassword(){
const navigate=useNavigate()
const handleUpdate=()=>{
  navigate('/')
}
interface HandleBackEvent extends React.MouseEvent<HTMLDivElement> {
  preventDefault: () => void;
}

const handleBack = (e: HandleBackEvent) => {
  e.preventDefault();
  navigate('/');
};
    return(
<Fragment>
<div className="parent-container">  
<div className="logo-box">
           <Logo />
          </div>
          <div className="title-box">
            <p>ADMIN PANEL</p>
          </div> 
        <div className="container-fluid1 ">
      
    <div className="row justify-content-center">
    <div className="col-md-6 d-flex justify-content-center">
      <div>
        <h4 className="text-center mt-4" style={{color:'#85B2E2'}}>Reset Password</h4>
        <form>
          
          <div className="mt-5 mb-3">
            <input type="password" className="form-control" id="password" placeholder="password"/>
         </div>
         <div className="mb-3">
            <input type="password" className="form-control" id="password" placeholder="Confirm password"/>
         </div>

          <button type="submit" className="btn btn-primary w-100" onClick={handleUpdate}>Update</button>
          <div className="mb-3 text-center text-white mt-3" onClick={handleBack}>
            <p className="noaccount">Go to login here <a href="#">Signin</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
        
      
       </div>
</div>
 </Fragment>      

    )

}
export default Updatepassword