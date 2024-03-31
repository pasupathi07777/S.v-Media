import React from 'react'
import { useContext } from 'react'
import Contex from '../Details/Contex'
import { Link } from 'react-router-dom'



const Status = () => {
  let { fun5, urlconvert, updatestatus } = useContext(Contex)


  return (
    <div className="status">

      <div className="btn">
        <button className="create-status" onClick={fun5}>

          <label htmlFor="status-post">
            <input type="file" id='status-post'  onChange={(e) => urlconvert(e)} />
            <div className="box-1">
              <img src='' alt="" />
            </div>
            <div className="box-2">
              <p>Add story</p>
              <div className="status-icon">
                <div className="custom-add-icon">
                  +
                </div>

              </div>
            </div>
          </label>



        </button>
      </div>

      <div className="post-status">

        {updatestatus.length?updatestatus.map(statu =>
         <Link to={`status/${statu.id}` } key={statu.id}><main className='each-post' key={statu.id}>

           
         <img src={`${statu.image}`} alt="" />
         {/* <video  src={`${statu.image}`} ></video> */}


       </main></Link>):<p></p>


          



        }



      </div>

    </div>
  )
}

export default Status