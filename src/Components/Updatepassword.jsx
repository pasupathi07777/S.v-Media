import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-use-history'
import Contex from '../Details/Contex'




const Updatepassword = () => {

  let {  setmessage } = useContext(Contex)


  // let [passUpdatesucess,setpassUpdatesucess]=useState(false)
  let [success, setsuccess] = useState()
  let [newPassword, setnewPassword] = useState("")
  let [confirmPassword, setconfirmPassword] = useState("")
  let [passError, setpassError] = useState("")
  let [conformpassError, setconformpassError] = useState("")

  let history = useHistory()
  let his = () => {
    history.push('Login')

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
    
    Update_password.forEach(element => {
      element.password = confirmPassword

    })
    localStorage.setItem("pasupathi_media", JSON.stringify(Update_password));
    showmassage()
  }
  let fun2 = () => {
    setpassError("Not Match")
    setconformpassError("Not Match")




  }

  let passSumit = (e) => {
    e.preventDefault()
    if (newPassword === "" && confirmPassword==="" ) {
            
      setpassError("Required")
      setconformpassError("Required")
      // setSignupError("Required")
      return


      
  }else if(newPassword===""){
    setpassError("Required")
      return
  }else if(confirmPassword ===""){
    setconformpassError("Required")
      return

  }
    let Compair=(newPassword === confirmPassword)?true:false
    Compair===false && fun2()
    let Lengtn_compair=(newPassword.length>8 && confirmPassword.length >8)?true:false
    Lengtn_compair ===true && fun1()
    if(Compair===true){
      Lengtn_compair===false && (setpassError("8-20 Chracter"))
    Lengtn_compair===false && (setconformpassError("8-20 Chracter"))
    }
    
    setconfirmPassword("")
    setnewPassword("")


  }

  return (
    <form action="" className={"login-form"} onSubmit={passSumit} >
      <h2>New Password</h2>
      <small className='alam3'>{passError}</small>
      <input type="text" id='new-password' placeholder='New Password' value={newPassword} onChange={(e) => { setnewPassword(e.target.value); setpassError("");setconformpassError("") }} />

      <small className='alam4'>{conformpassError}</small>
      <input type="text" id='conform-password' placeholder='Conform Password' value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value); setpassError("");setconformpassError("") }} />
      <button type="submit" className='update-btn'>Sumit</button>




    </form>
  )
}

export default Updatepassword