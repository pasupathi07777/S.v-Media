import React, { useContext, useEffect } from 'react'
import { FaImages } from "react-icons/fa";

import { FaBookOpen } from "react-icons/fa";

import Contex from '../Details/Contex';
import { useHistory } from 'react-router-use-history';


const Popbtn = () => {
  let { addbtn, setaddbtn, fun2, statuspost } = useContext(Contex)

  let Root = useHistory()

  // function urlconvert(e) {
  //   setstatuspost(URL.createObjectURL(e[0]))


  // }
  let fun1 = () => {

    Root.push('addpost')


  }
  let fun22 = () => {

    Root.push('addstatus')


  }

  useEffect(() => {
    fun2()

  }, [statuspost,fun2])


  return (
    <main className='popep-btn' style={addbtn === true ? { bottom: 50 } : {}}>

      <div className="btn"><button type="submit" onClick={(e) => { fun1(); setaddbtn(false); }}><FaImages /></button> Post</div>
      {/* <div className="btn"><button type="submit" onClick={(e) => { fun2(); setaddbtn(false); }}>
        <label htmlFor="status-post"><FaBookOpen /></label>
        <input type="file" name="" onChange={(e) => urlconvert(e)} id="status-post" />
      </button> Status</div> */}
      <div className="btn"><button type="submit" onClick={(e) => { fun22(); setaddbtn(false); }}>
      <FaBookOpen />
       
      </button> Status</div>






    </main>
  )
}

export default Popbtn