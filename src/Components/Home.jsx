import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'

import Feed from './Feed'


import Contex from '../Details/Contex'


import Footer from './Footer'
import Search from './Search'
import Header from './Header'

import Status from './Status'

import Addpost from './Addpost'
import Video from './Videos'
import Profile from './Profile'

import Addpostvideo from './Addpostvideo'
import Addstatus from './Addstatus'
import Clikedpost from './Clikedpost'
import Clickstatus from './Clickstatus'
import Firstpage from './Firstpage'



const Home = () => {
  let { feed,Login } = useContext(Contex)
  return (
    <div className={feed.lengtn ? 'home-1' : 'home-1'}>
       {/* <Header /> */}
     
    

      <Status />
      <Feed />
      {/* <Routes>
        <Route path='/search' element={<Search/>}/>
      </Routes> */}
    









    </div>
  )
}

export default Home