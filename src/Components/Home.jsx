import React, { useContext } from 'react'


import Feed from './Feed'


import Contex from '../Details/Contex'
import Status from './Status'





const Home = () => {
  let { feed } = useContext(Contex)
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