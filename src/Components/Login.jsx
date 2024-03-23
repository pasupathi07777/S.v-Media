import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Contex from '../Details/Contex'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-use-history'




const Login = () => {
    let { loginUsername, setloginUsername, loginPassword, setloginPassword, loginSumit, usernameError, setusernameError,
        passwordError, setpasswordError,message} = useContext(Contex)

    let [answer, setanswer] = useState("")
    let [Total, setTotal] = useState()
    let [first_number, setfirst_number] = useState()
    let [second_number, setsecond_number] = useState()
    let [Alert,setAlert] = useState('')
    let [forgot,setforgot]=useState(false)

    let his=useHistory()
    
    
    useEffect(() => {
        let f_num = Math.floor(Math.random() * 20 + 1)
        let s_num = Math.floor(Math.random() * 20 + 1)
        setTotal(f_num + s_num)
        


        setfirst_number(f_num)
        setsecond_number(s_num)






    }, [])
    

    let passreset = (e) => {
        e.preventDefault()
    

        let res=(Total === answer)?fun():setAlert(true)
        console.log( Alert)
        
        setanswer('')
        function fun(){
            his.push('Updatepass')
        }


    }
    

    
    return (
        <div className='login'>
            <div className={message && "message"}>{message}</div>
            <form action=""  className={(forgot===true)?'login-form-2':"login-form" } onSubmit={loginSumit}>
                <h2>LOGIN</h2>
                <small className='alam1'>{usernameError}</small>
                <input type="number" id='username' value={loginUsername} onChange={(e) => { setloginUsername(e.target.value); setusernameError("") }} placeholder='Mobile Number' />
                <small className='alam2'>{passwordError}</small>
                <input type="text" id='password' value={loginPassword} onChange={(e) => { setloginPassword(e.target.value); setpasswordError(""); }} placeholder='Password' />
                <p className='forgot' onClick={()=>setforgot(true)}> Forgot?</p>

                <button type="submit" className='login-btn'>LOGIN</button>
                <Link to={'/signup'}> <p className='signup'>SIGNUP</p> </Link>

            </form>
            <form action="" className={(forgot===true)?'human-check-box-2':"human-check-box " }  onSubmit={passreset}  >
                <h2>Solve this</h2>
                <p>{first_number} + {second_number}</p>
                <input type="number" className={(Alert===true)?"Alert":"a"} placeholder='Answer' required value={answer} onChange={(e) => setanswer(Number(e.target.value))} />
                <button type="submit">Sumit</button>
            </form>
        </div>

    )
}

export default Login