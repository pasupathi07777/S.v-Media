import React, { useContext } from 'react'

import Feed from './Feed'
import Status from './Status'

import Contex from '../Details/Contex'


const Home = () => {
  let {feed }=useContext(Contex)
  return(
     <div className={feed.lengtn?'home-1':'home-1'}>
     
      
      <Status />
      <Feed/>
      
     

    
    </div>
  )
}

export default Home