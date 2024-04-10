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
    <main className='popep-btn d-sm-none' style={addbtn === true ? { bottom: 50 } : {}}>

      <div className="btn"  onClick={(e) => { fun1(); setaddbtn(false); }}><button type="submit"><FaImages /></button> Post</div>
    
      <div className="btn" onClick={(e) => { fun22(); setaddbtn(false); }}><button type="submit" >
      <FaBookOpen />
       
      </button> Status </div>






    </main>
  )
}

export default Popbtn