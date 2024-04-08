import React, { useContext } from 'react'


import Feed from './Feed'


import Contex from '../Details/Contex'
import Status from './Status'





const Home = () => {
  let { feed } = useContext(Contex)
  return (
    <div className={feed.lengtn ? 'home-1' : 'home-1'}>
     
     
    

      <Status  />
      <Feed />
     
    









    </div>
  )
}

export default Home