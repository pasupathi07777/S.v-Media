import React, { useContext, useEffect } from 'react'
import Contex from '../Details/Contex'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-use-history'
import { Link } from 'react-router-dom'

const Editpost = () => {
  let Final_Result = ""
  let Final_edit = ""
  let { signupResponce, data, Editposttext, setEditposttext, Editpostimage, setEditpostimage, setfeed } = useContext(Contex)
  let { id } = useParams()
  id = Number(id)
  let history = useHistory()



  // let [relode, setrelode] = useState(false)
  let Responce = JSON.parse(localStorage.getItem('pasupathi_media_posts'))
  console.log(Responce)
  console.log(id)

  let Result = Responce.filter((a) => (a.id === id))

  Result.map(a =>
    Final_Result = a)
  console.log(Final_Result)









  useEffect(() => {

    setEditpostimage(Final_Result.image)
    setEditposttext(Final_Result.text)



  }, [Final_Result.image, Final_Result.text, setEditpostimage, setEditposttext])
  let crerateurl = (e) => {
    let Res = URL.createObjectURL(e[0])
    setEditpostimage(Res)

  }


  let editSumit = (e) => {
    e.preventDefault()
    let Responce = JSON.parse(localStorage.getItem('pasupathi_media_posts'))
    let Result = Responce.filter((a) => (a.id === id))
    Result.map(a =>
      Final_edit = a)
    Final_edit.image = Editpostimage
    Final_edit.text = Editposttext


    console.log(Responce)
    console.log(Result)
    console.log(Result)
    console.log(Final_edit)

    // localStorage.setItem('pasupathi_media_posts'(json.s))
    localStorage.setItem('pasupathi_media_posts', JSON.stringify(Responce))
    let ff = JSON.parse(localStorage.getItem('pasupathi_media_posts'))
    setfeed(ff)

    // setEditpostupdate(prevState => !prevState)

    history.push(`/${id}`)



  }


  return (
    <form action="" className='addpost p-2' onSubmit={editSumit}>
    
     <Link className='back-button' to={`/${id}`}>Back</Link>
      <article className=' article article-2  ' >
        <div className="article-box-1">
          <div className="profile-image">
          <img src={signupResponce.profileimage} alt="" srcset="" />

          </div>
          <div className="box-2">
            <div className="name">{signupResponce.name}


            </div>
            <div className="date">
              {data}



            </div>
          </div>
        </div>

        <textarea name="" id="post-content" placeholder='What On Your Mind?' value={Editposttext} onChange={(e) => setEditposttext(e.target.value)}></textarea>
        <div className="post-img">


          <label htmlFor="photo" className='photo'> {Final_Result.image !== '' ? <img className='' src={Editpostimage} alt="" /> : "Add Post"}</label>

          <input type="file" id="photo" style={{ display: 'none' }} onChange={(e) => crerateurl(e.target.files)} />
        </div>
        <button type="submit">Sumit</button>

      </article>
    </form>

  )
}

export default Editpost