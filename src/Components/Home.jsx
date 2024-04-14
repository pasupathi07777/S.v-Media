import React, { useContext } from 'react'
// import { Route, Routes } from 'react-router';


import Feed from './Feed'


import Contex from '../Details/Contex'
import Status from './Status'
// import Search from './Search';





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