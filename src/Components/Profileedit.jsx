import React, { useContext } from 'react'
// import { useHistory } from 'react-router-use-history'
import Contex from '../Details/Contex'

const Profileedit = () => {


    let { profileImage, setprofileImage, Name, setName, Bio, setBio, Genter, setGenter, signupResponce, userName, setuserName,setLogin, setpotfolio} = useContext(Contex)

    let setprofileImg = (e) => {
        setprofileImage(URL.createObjectURL(e[0]))



    }

    // let His = useHistory()
    function History() {
        setLogin(true)
        // His.push('/')
    }
    function potfolio_details(){
        let user_potfolio=localStorage.getItem("pasupathi_media")
        setpotfolio(user_potfolio)


    }







    let handleSumit = (e) => {
        e.preventDefault()

        localStorage.setItem("pasupathi_media", JSON.stringify([{ ...signupResponce, user_name: userName, name: Name, profileimage: profileImage, bio: Bio, Genter: Genter }]));
        
        History()
        potfolio_details()

    }

    return (
        <form action="" className='Profileedit-form' onSubmit={handleSumit} >
            <div className="box-profile">
                <div className="img-box">{profileImage && <img src={profileImage} alt="" />}</div>
                <input type="file" id='image' className='image' onChange={(e) => setprofileImg(e.target.files)} required />
                <label htmlFor="image" id='image' className='image-lable'>Edit Profile</label>
            </div>
            <label htmlFor="name" id='name-lable'>Name</label>
            <input type="text" id='name' value={Name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="username" id='Username-lable'  >Username</label>
            <input type="text" id='Username' value={userName} onChange={(e) => setuserName(e.target.value)} required />
            <label htmlFor="bio" id='bio-lable'>Bio</label>
            <input type="text" id='bio' value={Bio} onChange={(e) => setBio(e.target.value)}  />
            <label htmlFor="Genter" id='genter'>Genter</label>
            <select name="" id="genter-select" onChange={(e) => setGenter(e.target.value)}>
              
                {/* <option value="Femail">Femail</option>
                <option value="male" >male</option>
                <option value="Trans">Trans</option> */}
            </select>
            <button type="submit">Save</button>


        </form>
    )
}

export default Profileedit