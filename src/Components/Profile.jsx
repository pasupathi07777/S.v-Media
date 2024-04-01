
import { useContext } from 'react'
import Contex from '../Details/Contex'
import { useState } from 'react'
import { useHistory } from 'react-router-use-history'


const Profile = () => {
  let { setLogin } = useContext(Contex)
  let [a, seta] = useState(JSON.parse(localStorage.getItem("pasupathi_media")))
  let histoey = useHistory()

  let logout = () => {

    let responce = JSON.parse(localStorage.getItem("pasupathi_media_login"))
    responce.user = false
    console.log(responce)
    localStorage.setItem("pasupathi_media_login", JSON.stringify(responce))
    responce = JSON.parse(localStorage.getItem("pasupathi_media_login"))
    console.log(responce)
    setLogin(false)


  }

  let editprofile = () => {
    histoey.push('editprofile')

  }








  return (
    <>
      {a.map((s, i) =>
        <div className="profile" key={i}>
          <div className="profile-details">
            <div className="profile-photo">
              <div className="photo-box">
                <img src={s.profileimage} alt="" />

              </div>
            </div>
            <div className="form-box">
              <label htmlFor="name">Name</label>
              <div className="box">
                <p>{s.name}</p>
              </div>

            </div>
            <div className="form-box">

              <label htmlFor="username">Username</label>
              <div className="box">
                <p>{s.user_name}</p>
              </div>

            </div>
            <div className="form-box">

              <label htmlFor="Bio">Genter</label>

              <div className="box">{s.Genter}

              </div>

            </div>
            <div className="form-box">

              <label htmlFor="Bio">Bio</label>

              <div className="box-bio">{s.bio}

              </div>

            </div>

            <>
          <div className="form-box">
              <button className="edit-btn" onClick={editprofile}>Edit Profile</button>

            </div>
            <div className="form-box">
              <button className="signout-btn" onClick={logout}>Log Out</button>
            </div></>



           
          </div>
          
          

        </div >)}
    </>
  )












}

export default Profile