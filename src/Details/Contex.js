import { createContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-use-history'
import { format } from 'date-fns'







let Contex = createContext({})


export let Dataprovider = ({ children }) => {

    // login logout contyrol

    let [Login, setLogin] = useState(false)


    // Rooting
    const history = useHistory()

    // signup --------------------------------------------------------------------------------------
    let [sigupname, setsigupname] = useState("")
    let [sigupPassword, setsigupPassword] = useState("")
    let [signupResponce, setsignupResponce] = useState("")
    let [SignupError, setSignupError] = useState("")
    let [SignuppasswordError, setSignuppasswordError] = useState("")

    // let [SignupResult, setSignupResult] = useState("")


    function fun1() {
        let Username_validation = (sigupname.length === 10) ? true : false
        let Userpassword_validation = (sigupPassword.length > 8) ? true : false
        let SignupResult = Username_validation === true && Userpassword_validation === true
        console.log(SignupResult)
        Username_validation === false && setSignupError("Enter Valid Number")
        Userpassword_validation === false && setSignuppasswordError("8-20 chracters")

        SignupResult === true && localStorage.setItem("pasupathi_media", JSON.stringify([{ mobile_number: sigupname, password: sigupPassword }]))
        SignupResult === true && Page()
        function Page() {
            let log_sign_responce = JSON.parse(localStorage.getItem("pasupathi_media_login"))
            log_sign_responce.user = true
            console.log(log_sign_responce)
            localStorage.setItem("pasupathi_media_login", JSON.stringify(log_sign_responce))

            history.push('Profileedit')
            setSignupError("")
            setSignuppasswordError("")




        }
        if (SignupResult) {
            let Responce = JSON.parse(localStorage.getItem("pasupathi_media"))
            Responce.forEach(a => (


                setsignupResponce(a)

            ))
        }

        return true

        // localStorage.setItem("pasupathi_media", JSON.stringify([{ mobile_number: sigupname, password: sigupPassword }]));


    }
    function fun22() {
        setSignupError("Already Login")
        setsigupname(SignupError)
        return false

    }

    let handlesumitSignup = (e) => {
        e.preventDefault()
        if (sigupPassword === "" && sigupname === "") {

            setSignuppasswordError("Required")
            setSignupError("Required")
            return



        } else if (sigupname === "") {
            setSignupError("Required")
            return
        } else if (sigupPassword === "") {
            setSignuppasswordError("Required")
            return

        }
        signupResponce === null ? fun1() : fun22()

        setsigupname("")
        setsigupPassword("")



    }
    // Login ------------------------------------------------------------------------------------------------------------------

    let [loginUsername, setloginUsername] = useState("")
    let [loginPassword, setloginPassword] = useState("")
    let [usernameError, setusernameError] = useState("")
    let [passwordError, setpasswordError] = useState("")
    function fun3() {
        setusernameError("Account not found")


    }
    function Page() {


        let log_sign_responce = JSON.parse(localStorage.getItem("pasupathi_media_login"))
        log_sign_responce.user = true
        console.log(log_sign_responce)
        localStorage.setItem("pasupathi_media_login", JSON.stringify(log_sign_responce))
        setLogin(true)

        console.log(log_sign_responce)
        console.log(Login)
    }
    function fun4() {



        let username = signupResponce.mobile_number === loginUsername
        let password = signupResponce.password === loginPassword

        username === true && password === false && setpasswordError("Incorrect password")
        username === false && password === true && setusernameError("Incorrect Number")
        username === false && password === false && setusernameError("Incorrect Number")
        loginUsername.length < 10 && setusernameError("Enter 10 Dgits")
        username === true && password === true && Page()
    }

    function loginSumit(e) {
        e.preventDefault()
        if (loginPassword === '') {
            setusernameError("Enter Username")
            setpasswordError("Enter password")
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
    let [potfolio, setpotfolio] = useState([])
    console.log(potfolio)
  




    // footer
    let [addbtn, setaddbtn] = useState(false)


    // popepbtn
    let Root = useHistory()
    let [statuspost, setstatuspost] = useState("")
    function fun2() {
        statuspost !== "" && Root.push('addstatus')
    }




    //   poststatus
    let [statusText, setstatusText] = useState("")
    let [updatestatus, setupdatestatus] = useState([])

    // img url conveter 
    function urlconvert(e) {
        setstatuspost(URL.createObjectURL(e.target.files[0]))


    }

    function backhome() {
        history.push('/')


    }
    function backlogin() {
        history.push('Login')


    }

      // notificatio set up

      let notify=[]
      console.log(notify)

      let time= format(new Date(), "pp")



    function update(e) {
        e.preventDefault()
        let time= format(new Date(), "pp")



        let Responce = JSON.parse(localStorage.getItem("pasupathi_media_status"))
        let id = (Responce.length) ? Responce.length + 100 : 100
        localStorage.setItem("pasupathi_media_status", JSON.stringify([...Responce, { id: id, image: statuspost, text: statusText, message: `${signupResponce.name} Add New Status` }]));
        let Responce_3 = JSON.parse(localStorage.getItem("pasupathi_media_status"))
        setupdatestatus(Responce_3.reverse())
        let res= JSON.parse(localStorage.getItem("pasupathi_status"))
        localStorage.setItem("pasupathi_status", JSON.stringify([...res,{id:id,message:`${signupResponce.name} Add New status`,for:"status",
        date: time}]))
        console.log(notify)
        setstatuspost("")
        setstatusText("")

        history.push('/')






    }
    // post 

    let [postText, setpostText] = useState("")
    let [postimage, setpostimage] = useState("")

    // click post
    let [Editposttext, setEditposttext] = useState("")
    let [Editpostimage, setEditpostimage] = useState("")
    let [Editpostupdate, setEditpostupdate] = useState(true)

  




    let [feed, setfeed] = useState([])

    function sumitpost(e) {
        e.preventDefault()
        let Responce_1 = JSON.parse(localStorage.getItem("pasupathi_media_posts"))
        let id = (Responce_1.length) ? Responce_1.length + 1 : 1
        localStorage.setItem("pasupathi_media_posts", JSON.stringify([...Responce_1, { id: id, name: Name, image: postimage, text: postText, date: format(new Date(), "MM,yyy,ddd,pp"), message: `${signupResponce.name} Add New post`, like: false }]));
        let Responce_3 = JSON.parse(localStorage.getItem("pasupathi_media_posts"))
        setfeed(Responce_3.reverse())
        let res= JSON.parse(localStorage.getItem("pasupathi_status"))
        localStorage.setItem("pasupathi_status", JSON.stringify([...res,{id:id,message:`${signupResponce.name} Add New Post`,for:"post",date: time}]))
      
        console.log(res)


        setpostText("")
        setpostimage("")

        backhome()



    }

    // edit post

    let [editbox, seteditbox] = useState(false)












    // like button controll
    let [checked, setrchecked] = useState(false)

    let likebtn = (id) => {


        setrchecked(!checked)
        let Responce_1 = JSON.parse(localStorage.getItem("pasupathi_media_posts"))
        Responce_1.map(a => a.id === id ? a.like = checked : '')
        console.log(Responce_1)
        localStorage.setItem("pasupathi_media_posts", JSON.stringify(Responce_1))
        Responce_1 = JSON.parse(localStorage.getItem("pasupathi_media_posts"))
        setfeed(Responce_1.reverse())




    }

    let [Relode, setrelode] = useState(false)


    let Check = () => {
        let log_sign_responce = (JSON.parse(localStorage.getItem("pasupathi_media_login")) === null) ? localStorage.setItem("pasupathi_media_login", JSON.stringify({ user: Login })) : JSON.parse(localStorage.getItem("pasupathi_media_login"))

        log_sign_responce.user === true && backhome()
        log_sign_responce.user === false && backlogin()
        log_sign_responce.user === true && setLogin(log_sign_responce.user)

        setrelode(false)



    }
    Relode===true && Check()















    // local server
    useEffect(() => {

      



        let Responce = JSON.parse(localStorage.getItem("pasupathi_media"))
        Responce && Responce.forEach(a => (
            setsignupResponce(a)
        ))
        let Responce_3 = (JSON.parse(localStorage.getItem("pasupathi_media_status")) == null) ? localStorage.setItem("pasupathi_media_status", JSON.stringify([])) : JSON.parse(localStorage.getItem("pasupathi_media_status"))
        let Responce_4 = (JSON.parse(localStorage.getItem("pasupathi_media_posts")) == null) ? localStorage.setItem("pasupathi_media_posts", JSON.stringify([])) : JSON.parse(localStorage.getItem("pasupathi_media_posts"))
        setupdatestatus(Responce_3.reverse())

        setfeed(Responce_4.reverse())
       


      

        setrelode(true)

        let Responce_5 = (JSON.parse(localStorage.getItem("pasupathi_status")) == null) ? localStorage.setItem("pasupathi_status", JSON.stringify([])) : JSON.parse(localStorage.getItem("pasupathi_status"))
        console.log(Responce_5)























        !Responce && setsignupResponce(Responce)



    }, [message, Login])







    return (
        <Contex.Provider value={{
            // Login
            Login, setLogin,

            sigupname, setsigupname, sigupPassword, setsigupPassword, handlesumitSignup, SignupError, setSignupError,
            loginUsername, setloginUsername, loginPassword, setloginPassword, loginSumit, usernameError, setusernameError,
            passwordError, setpasswordError, message, setmessage, SignuppasswordError, setSignuppasswordError,//setSignupError
            // -------------profile edit
            profileImage, setprofileImage, Name, setName, Bio, setBio, Genter, setGenter, signupResponce, userName, setuserName, setpotfolio,


            // footer 
            addbtn, setaddbtn,
            // popepbtn
            fun2, statuspost, setstatuspost,
            // img url
            urlconvert,
            // post status
            statusText, setstatusText, update, updatestatus,
            // post 
            setpostText, setpostimage, sumitpost, feed, postimage, setfeed,
            //clickpost 

            // ;like btn
            likebtn, checked,

            //editpost

            Editposttext, setEditposttext, Editpostimage, setEditpostimage, setEditpostupdate, Editpostupdate, editbox, seteditbox






        }}>
            {children}
        </Contex.Provider>)
}



export default Contex