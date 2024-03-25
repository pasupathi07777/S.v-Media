import { Dataprovider } from './Details/Contex';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import Resetpassword from './Components/Resetpassword';
import Updatepassword from './Components/Updatepassword';
import Profileedit from './Components/Profileedit';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Status from './Components/Status'
import Search from './Components/Search'
import Addpost from './Components/Addpost'
import Video from './Components/Videos'
import Profile from './Components/Profile'
import Popbtn from './Components/Popbtn';
import Addpostvideo from './Components/Addpostvideo';
import Addstatus from './Components/Addstatus';
import Clikedpost from './Components/Clikedpost';
import Clickstatus from './Components/Clickstatus';
let login = true

function App() {
  return (
    <div className="App">
      <Dataprovider>
        {login && <Header />}
        {/* {login && } */}
        <Routes>

          <Route>
            <Route path='/' />

            <Route index element={<Login />} />
            <Route path='signup' element={<Signup />} />

            <Route path='Reset' element={<Resetpassword />} />
            <Route path='Updatepass' element={<Updatepassword />} />
            <Route path='Profileedit' element={<Profileedit />} />
            <Route path='Home' element={<Home />} />
            <Route path='search' element={<Search />} />

            <Route path='video' element={<Video />} />
            <Route path='profile' element={<Profile />} />
            <Route path='addpost' element={<Addpost />} />
            <Route path='addvideo' element={<Addpostvideo />} />
            <Route path='/home/addstatus' element={<Addstatus />} />
            <Route path='/home/:id' element={<Clikedpost />} />
            <Route path='home/status/:id' element={<Clickstatus/>} />


          </Route>

          <Route path='*' element={<Addstatus />} />





        </Routes>
        <Popbtn />
        {login && <Footer />}

      </Dataprovider>

    </div>
  );
}

export default App;
