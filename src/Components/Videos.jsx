import React from 'react'
import { useContext } from 'react'
import Contex from '../Details/Contex'

const Videos = () => {
  let {updatestatus, feed}=useContext(Contex)
  return (
    <div className="notification">

      {feed.map(a=>
        <div className="box">
          <p>{a.message}</p>
        </div>

      )}
      {updatestatus.map(a=>
        <div className="box">
          <p>{a.message}</p>
        </div>

      )}
      

    </div>
  )
}

export default Videos