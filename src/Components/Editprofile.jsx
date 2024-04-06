import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-use-history'


export const Editprofile = () => {
    // let geb="mail"
    let history = useHistory()
    let [name, setname] = useState("")
    let [username, setusername] = useState("")
    let [bio, setbio] = useState("")
    let [genter, setgenter] = useState("dd")
    let [profileimage, setprofileimage] = useState("")
    console.log(name)
    console.log(username)
    console.log(bio)
    console.log(genter)
    console.log(profileimage)

    console.log(name)
    let result = ""
    useEffect(() => {
        let respomce = JSON.parse(localStorage.getItem("pasupathi_media"))
        console.log(respomce)
        respomce.map((a) =>
            result = a

        )
        console.log(result)
        setname(result.name)
        setusername(result.user_name)
        setbio(result.bio)
        setgenter(result.genter="male")
        setprofileimage(result.profileimage)
        

    }, [])


    let handleSumit = (e) => {
        e.preventDefault()
        let respomce = JSON.parse(localStorage.getItem("pasupathi_media"))

        respomce.map((a) =>
            result = a



        )
        result.name = name
        result.user_name = username
        result.bio = bio
        result.Genter = genter
        result.profileimage = profileimage

        localStorage.setItem("pasupathi_media", JSON.stringify(respomce))
        history.push('/profile')






    }
    let createUrl = (e) => {
        let responce = URL.createObjectURL(e[0])
        setprofileimage(responce)
    }

 
    return (
        <form action="" className='Profileedit-form' onSubmit={handleSumit} >
            <div className="box-profile">
                <div className="img-box"><img src={profileimage} alt="" /></div>
                <input type="file" id='image' className='image' onChange={(e) => createUrl(e.target.files)} />
                <label htmlFor="image" id='image' className='image-lable'>Edit Profile</label>
            </div>
            <label htmlFor="name" id='name-lable'>Name</label>
            <input type="text" id='name' value={name} onChange={(e) => setname(e.target.value)} required />

            <label htmlFor="username" id='Username-lable'  >Username</label>
            <input type="text" id='Username' value={username} onChange={(e) => setusername(e.target.value)} />
            <label htmlFor="bio" id='bio-lable'>Bio</label>
            <input type="text" id='bio' value={bio} onChange={(e) => setbio(e.target.value)} />
            <label htmlFor="Genter" id='genter'>Genter</label>
            <select name="" id="genter-select" value={genter} onChange={(e) => setgenter(e.target.value)} >
                <option value="male" defaultValue>male</option>
                <option value="Femail">Femail</option>

                <option value="Trans">Trans</option>
            </select>
            
            {/* <input type="text" id='Username' value={username} onClick={genterOption} /> */}
            <button type="submit">Save</button>


        </form>
    )
}
