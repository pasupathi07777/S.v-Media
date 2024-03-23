import React from 'react'
// import { CiCirclePlus } from "react-icons/ci";
import {Link } from 'react-router-dom'

const Status = () => {
  return (
    <div className="status">
      <Link to={'addstatus'}>
      <div className="create-status">
        <div className="box-1">
          <img src='' alt="" />
        </div>
        <div className="box-2">
          <p>Add story</p>
          <div className="status-icon">
            <div className="custom-add-icon">
              +
            </div>
            {/* <CiCirclePlus /> */}
          </div>
        </div>



      </div></Link>
      <div className="post-status">


      </div>

    </div>
  )
}

export default Status