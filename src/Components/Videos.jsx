import React from 'react'
import { useContext } from 'react'
import Contex from '../Details/Contex'
import { Link } from 'react-router-dom'

const Videos = () => {
  let {updatestatus, feed}=useContext(Contex)
  return (
    <div className="notification">

      {feed.map(a=>
        <div className="box">
         <Link to={`/video/${a.id}`}> <p>{a.message}</p></Link>
        </div>

      )}
      {updatestatus.map(a=>
        <div className="box">
          {/* <p>{a.message}</p> */}
          <Link to={`/video/status/${a.id}`}> <p>{a.message}</p></Link>
        </div>

      )}
      

    </div>
  )
}

export default Videos