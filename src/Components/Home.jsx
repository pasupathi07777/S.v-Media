import React, { useContext } from 'react'

import Feed from './Feed'
import Status from './Status'

import Contex from '../Details/Contex'


const Home = () => {
  let {addbtn}=useContext(Contex)
  return (
    <div className="home" style={addbtn===true?{backfaceVisibility:5}:{}}>
      
      <Status />
      <Feed/>
      
     

    
    </div>
  )
}

export default Home