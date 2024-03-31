import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Contex from '../Details/Contex'

const Signup = () => {
    let {sigupname,setsigupname,sigupPassword,setsigupPassword,handlesumitSignup,SignupError,setSignupError,SignuppasswordError,setSignuppasswordError}=useContext(Contex)
    console.log(SignupError)
    
    return (
        <form action="" className='login-form' onSubmit={handlesumitSignup}>
            <h2>SIGN UP</h2>
            <small className='alam1'>{SignupError}</small>
            <input type="number" id='username'  placeholder={"Mobile Number"} value={sigupname} onChange={(e)=>{setsigupname(e.target.value) ; setSignupError("");}}/>
            <small className='alam2'>{SignuppasswordError}</small>
            <input type="text" id='password' placeholder='Password' value={sigupPassword} onChange={(e)=>{setsigupPassword(e.target.value);setSignupError("");setSignuppasswordError("") }}/>
            
            
           
            
            <button type="submit" className='signup-btn'  >SIGNUP</button>
            <Link to={'/Login'}><p className='signup'>LOGIN</p></Link>
        </form>
    )   
}

export default Signup