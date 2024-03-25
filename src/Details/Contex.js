import { createContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-use-history'
import { format } from 'date-fns'






let Contex = createContext({})


export let Dataprovider = ({ children }) => {



    // signup --------------------------------------------------------------------------------------
    let [sigupname, setsigupname] = useState("")
    let [sigupPassword, setsigupPassword] = useState("")
    let [signupResponce, setsignupResponce] = useState("")
    let [SignupError, setSignupError] = useState("")
    let [SignupResult, setSignupResult] = useState("")
    console.log(SignupResult)

    const history = useHistory()



    function fun1() {

        localStorage.setItem("pasupathi_media", JSON.stringify([{ mobilenumber: sigupname, password: sigupPassword }]));
        let Responce = JSON.parse(localStorage.getItem("pasupathi_media"))
        Responce.forEach(a => (

            setsignupResponce(a)

        ))

        function Page() {
            history.push('Profileedit')
        }
        Page()
        return true

    }
    function fun22() {
        setSignupError("Already Login")
        setsigupname(SignupError)
        return false

    }

    let handlesumitSignup = (e) => {
        e.preventDefault()
        if (sigupPassword === '') {
            return
        }
        let Result = (signupResponce === null) ? fun1() : fun22()
        setSignupResult(Result)
        setsigupname("")
        setsigupPassword("")



    }
    // Login -------------------------------------

    let [loginUsername, setloginUsername] = useState("")
    let [loginPassword, setloginPassword] = useState("")
    // let [loginError, setloginError] = useState("")
    let [usernameError, setusernameError] = useState("")
    let [passwordError, setpasswordError] = useState("")
    function fun3() {
        setusernameError("Account not found")


    }
    function fun4() {


        function Page() {
            history.push('Home')
        }
        let username = (signupResponce.mobilenumber === loginUsername)
        let password = signupResponce.password === loginPassword
        username === true && password === false && setpasswordError("Incorrect password")

        username === false && password === true && setusernameError("Incorrect Username")
            (username === false && password === false) && setusernameError("Incorrect Username")
                (username === true && password === true) && Page()
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

    let items = [

        { id: 1, date: format(new Date(), "MM,yyy,ddd,pp"), name: "pasupathi", content: "i am a developer", image: "" },
        { id: 2, date: format(new Date(), "MM,yyy,ddd,pp"), name: "raja", content: "i am a ui/uz desiner", image: "" },
        { id: 3, date: format(new Date(), "MM,yyy,ddd,pp"), name: "vinith", content: "i am a endinear", image: "" }
    ]

    // footer
    let [addbtn, setaddbtn] = useState(false)


    // popepbtn
    let Root = useHistory()
    let [statuspost, setstatuspost] = useState("")
    function fun2() {
        statuspost !== "" && Root.push('addstatus')
    }

    // img url conveter 
    function urlconvert(e) {
        setstatuspost(URL.createObjectURL(e.target.files[0]))


    }

    //   poststatus
    let [statusText, setstatusText] = useState("")
    let [updatestatus, setupdatestatus] = useState([])

    function backhome() {
        history.push('home')


    }

    function update(e) {
        e.preventDefault()


        // let Responce_1 = JSON.parse(localStorage.getItem("pasupathi_media_status"))
        // { !Responce_1 && localStorage.setItem("pasupathi_media_status", JSON.stringify([])); }
        let Responce = JSON.parse(localStorage.getItem("pasupathi_media_status"))
        let id = (Responce.length) ? Responce.length + 1 : 1
        localStorage.setItem("pasupathi_media_status", JSON.stringify([...Responce, { id: id, image: statuspost, text: statusText }]));
        let Responce_3 = JSON.parse(localStorage.getItem("pasupathi_media_status"))
        setupdatestatus(Responce_3)
        setstatuspost("")
        setstatusText("")
        backhome()






    }
    // post 

    let [postText, setpostText] = useState("")
    let [postimage, setpostimage] = useState(null)



    let [feed, setfeed] = useState([])

    function sumitpost(e) {
        e.preventDefault()
        let Responce_1 = JSON.parse(localStorage.getItem("pasupathi_media_posts"))
        let id = (Responce_1.length) ? Responce_1.length + 1 : 1
        localStorage.setItem("pasupathi_media_posts", JSON.stringify([...Responce_1, { id: id, name: Name, image: postimage, text: postText, date: format(new Date(), "MM,yyy,ddd,pp") }]));
        let Responce_3 = JSON.parse(localStorage.getItem("pasupathi_media_posts"))
        setfeed(Responce_3.reverse())
        setpostText("")
        setpostimage(null)

        backhome()



    }









    // local server
    useEffect(() => {
        let Responce = JSON.parse(localStorage.getItem("pasupathi_media"))
        let Responce_3 = (JSON.parse(localStorage.getItem("pasupathi_media_status")) == null) ? localStorage.setItem("pasupathi_media_status", JSON.stringify([])) : JSON.parse(localStorage.getItem("pasupathi_media_status"))
        let Responce_4 = (JSON.parse(localStorage.getItem("pasupathi_media_posts")) == null) ? localStorage.setItem("pasupathi_media_posts", JSON.stringify([])) : JSON.parse(localStorage.getItem("pasupathi_media_posts"))
        setupdatestatus(Responce_3)

        setfeed(Responce_4)




        Responce && Responce.forEach(a => (

            setsignupResponce(a)


        ))


        !Responce && setsignupResponce(Responce)


    }, [message])


    return (
        <Contex.Provider value={{
            sigupname, setsigupname, sigupPassword, setsigupPassword, handlesumitSignup, SignupError, setSignupError,
            loginUsername, setloginUsername, loginPassword, setloginPassword, loginSumit, usernameError, setusernameError,
            passwordError, setpasswordError, message, setmessage,
            // -------------profile edit
            profileImage, setprofileImage, Name, setName, Bio, setBio, Genter, setGenter, signupResponce, userName, setuserName,
            // posts feed
            items,
            // footer 
            addbtn, setaddbtn,
            // popepbtn
            fun2, statuspost, setstatuspost,
            // img url
            urlconvert,
            // post status
            statusText, setstatusText, update, updatestatus,
            // post 
            setpostText, setpostimage, sumitpost, feed





        }}>
            {children}
        </Contex.Provider>
    )
}



export default Contex