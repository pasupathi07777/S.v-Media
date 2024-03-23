import { createContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-use-history'
import {format} from 'date-fns'




let Contex = createContext({})


export let Dataprovider = ({ children }) => {

    // signup --------------------------------------------------------------------------------------
    let [sigupname, setsigupname] = useState("")
    let [sigupPassword, setsigupPassword] = useState("")
    let [signupResponce, setsignupResponce] = useState("")
    let [SignupError, setSignupError] = useState("")
    let [SignupResult, setSignupResult] = useState("")
    
    const history = useHistory()



    function fun1() {

        localStorage.setItem("pasupathi_media", JSON.stringify([{ mobilenumber: sigupname, password: sigupPassword }]));
        let Responce = JSON.parse(localStorage.getItem("pasupathi_media"))
        Responce.forEach(a=>(
           
            setsignupResponce(a)

        ))
        
        function Page() {
            history.push('Profileedit')
        }
        Page()
        return true

    }
    function fun2() {
        setSignupError("Already Login")
        setsigupname(SignupError)
        return false

    }

    let handlesumitSignup = (e) => {
        e.preventDefault()
        if (sigupPassword === '') {
            return
        }
        let Result = (signupResponce === null) ? fun1() : fun2()
        setSignupResult(Result)
        setsigupname("")
        setsigupPassword("")



    }
    // Login -------------------------------------

    let [loginUsername, setloginUsername] = useState("")
    let [loginPassword, setloginPassword] = useState("")
    let [loginError, setloginError] = useState("")
    let [usernameError, setusernameError] = useState("")
    let [passwordError, setpasswordError] = useState("")
    function fun3() {
        setusernameError("Account not found")
        console.log(loginError)

    }
    function fun4() {


        function Page() {
            history.push('Home')
        }
        let username=(signupResponce.mobilenumber === loginUsername)
        let password = signupResponce.password === loginPassword
       { username === true && password === false && setpasswordError("Incorrect password") }
        { username === false && password === true && setusernameError("Incorrect Username") }
        { (username === false && password === false) && setusernameError("Incorrect Username") }
        { (username === true && password === true) && Page() }
        }

    function loginSumit(e) {
        e.preventDefault()
        if (loginPassword === '') {
            return
        }
        
        signupResponce === null && fun3()
        signupResponce && fun4()
        setloginUsername("")
        setloginPassword("")

    }


    // update password 

    let [message, setmessage] = useState("")


    // profile edit 
    let [profileImage, setprofileImage] = useState("")
    let [Name, setName] = useState("")
    let [userName, setuserName] = useState("")
    let [Bio, setBio] = useState("")
    let [Genter, setGenter] = useState("")


    // post ariticle

    let items=[
       
        {id:1,date:format(new Date(),"MM,yyy,ddd,pp"),name:"pasupathi",content:"i am a developer",image:""},
        {id:2,date:format(new Date(),"MM,yyy,ddd,pp"),name:"raja",content:"i am a ui/uz desiner",image:""},
        {id:3,date:format(new Date(),"MM,yyy,ddd,pp"),name:"vinith",content:"i am a endinear",image:""}
    ]

    // footer
    let [addbtn, setaddbtn]=useState(false)
    console.log(addbtn)
  





    // local server
    useEffect(() => {
        let Responce = JSON.parse(localStorage.getItem("pasupathi_media")) 
        {Responce && Responce.forEach(a=>(
      
            setsignupResponce(a )
           

        ))}
       
        {!Responce && setsignupResponce(Responce)}


    }, [message])


    return (
        <Contex.Provider value={{
            sigupname, setsigupname, sigupPassword, setsigupPassword, handlesumitSignup, SignupError, setSignupError,
            loginUsername, setloginUsername, loginPassword, setloginPassword, loginSumit, usernameError, setusernameError,
            passwordError, setpasswordError, message, setmessage,
            // -------------profile edit
            profileImage, setprofileImage, Name, setName, Bio, setBio, Genter, setGenter, signupResponce,userName,setuserName,
            // posts feed
            items,
            // footer 
            addbtn,setaddbtn




        }}>
            {children}
        </Contex.Provider>
    )

}

export default Contex