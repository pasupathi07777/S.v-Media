
import { useContext, useEffect, useState } from 'react'
import Contex from '../Details/Contex'
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Feed = () => {
  let { signupResponce, feed, likebtn } = useContext(Contex)

  // let like_value = ""
  let photo = ''

  let [updatephoto,setupdatephoto]=useState()
  
  let gg=()=>{
    let profile_img = JSON.parse(localStorage.getItem("pasupathi_media"))
    profile_img.map(a =>
      photo = a)

    console.log(photo.profileimage)
    setupdatephoto(false) 

  }
  updatephoto===true && gg()




  useEffect(() => {
   setupdatephoto(true) 

    



  }, [feed])

  let [text, settext] = useState(false)
  let toggle = () => {
    console.log(this.id)
    settext(!text)
    console.log(text)
  }




  return (
    <div className="feed">



      {feed.length ? feed.reverse().map(item =>

        <article className='article' key={item.id} style={{minWidth:'200px'}}>

          <div className="box-1">
              <div className="profile-image">
                {signupResponce.profileimage !== Error ? <img src={signupResponce.profileimage} alt="" /> : <p>kk</p>}

              </div>
              <div className="box-2">
                <p className="name m-0">
                  {signupResponce.name}

                </p>
                <div className="date">
                  {item.date}

                </div>
              </div>
          </div>
          <div className="feed-2 d-flex flex-column ">

            {item.text &&
            <div className="content">
              {text === true ? <p className='p-0 m-0'>{`${item.text.slice(0, 20)}`} <small onClick={toggle}> More...</small></p> : <p className='p-0 m-0'>{`${item.text}`} <small onClick={toggle}> Less...</small></p>}

             

            </div>}

            <Link to={`/${item.id}`}>
              
              
              {item.image && <img src={item.image} alt="Uploaded" />}
            </Link>
            




          
          </div>

          <div className="btn-group">
              <button style={item.like === true ? { color: 'blue' } : {}} onClick={() => likebtn(item.id)}> <AiOutlineLike />
              </button>
              <button><LiaCommentSolid /></button>
              <button><FaShare /></button>
          </div>
        </article>) : 
        <p className='mt-5'>no post </p>
      }




    </div>
  )
}
export default Feed


// {  <article className='article' key={item.id}>
          
//       <div className="box-1">
//       <div className="profile-image">
//      { signupResponce.profileimage!==Error ? <img src={signupResponce.profileimage} alt="" /> :<p>kk</p>}

//       </div>
//       <div className="box-2">
//         <div className="name">
//           {signupResponce.name}

//         </div>
//         <div className="date">
//           {item.date}

//         </div>
//       </div>
//     </div>
//    <div className="feed-2 d-flex flex-column">
//    {item.text && <div className="content">
//       {text ===true?<p>{`${item.text.slice(0,20)}`} <small onClick={toggle}> More...</small></p>:<p>{`${item.text}`} <small onClick={toggle}> Less...</small></p>}

//     </div>}
    



//     <Link to={`/${item.id}`}>
//       {/* <div className="post-img">
       
//       </div> */}
//       {item.image && <img src={item.image} alt="Uploaded" />}
//     </Link>
//    </div>

//     <div className="btn-group">
//       <button style={item.like==true ?{color:'blue'}:{}} onClick={()=>likebtn(item.id)}> <AiOutlineLike   />
//       </button>
//       <button><LiaCommentSolid  /></button>
//       <button><FaShare /></button>
//     </div>
//   </article>



// ) : <p>no post </p>}




// </div>}