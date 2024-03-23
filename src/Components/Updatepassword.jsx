import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-use-history'
import Contex from '../Details/Contex'




const Updatepassword = () => {

  let { message, setmessage } = useContext(Contex)


  // let [passUpdatesucess,setpassUpdatesucess]=useState(false)
  let [success,setsuccess]=useState()
  let [newPassword, setnewPassword] = useState("")
  let [confirmPassword, setconfirmPassword] = useState("")
  let [passError, setpassError] = useState("")

  let history = useHistory()
  let his = () => {
    history.push('/')

  }
  let showmassage = () => {
    console.log("nnnnnn")
    setsuccess(true)
    setmessage("Password Updated")
   
    
    setTimeout(() => {

       
       setmessage("")

    }, 3000);
    his()


  }

  let fun1 = () => {
    let Update_password = JSON.parse(localStorage.getItem("pasupathi_media"))
    Update_password.password = confirmPassword
    localStorage.setItem("pasupathi_media", JSON.stringify(Update_password));
   


    showmassage()
  }
  let fun2 = () => {
    setpassError("Not Match")
    


  }

  let passSumit = (e) => {
    e.preventDefault()
    // (newPassword === confirmPassword) ? fun1() : fun2()
    {(newPassword === confirmPassword) && fun1()}
    {(newPassword !== confirmPassword) && fun2()}
    setconfirmPassword("")
    setnewPassword("")
    

  }

  return (
    <form action="" className={"login-form"} onSubmit={passSumit} >
      <h2>New Password</h2>
      <small className='alam3'>{passError}</small>
      <input type="text" id='new-password' placeholder='New Password' value={newPassword} onChange={(e) => { setnewPassword(e.target.value); setpassError(""); }} />

      <small className='alam4'>{passError}</small>
      <input type="text" id='conform-password' placeholder='Conform Password' value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value); setpassError(""); }} />
      <button type="submit" className='update-btn'>Sumit</button>




    </form>
  )
}

export default Updatepassword