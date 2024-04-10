import { Dataprovider } from './Details/Contex';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import Resetpassword from './Components/Resetpassword';
import Updatepassword from './Components/Updatepassword';
import Profileedit from './Components/Profileedit'
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Status from './Components/Status'
import Search from './Components/Search'
import Addpost from './Components/Addpost'
import Video from './Components/Videos'
import Profile from './Components/Profile'
import Popbtn from './Components/Popbtn';
import Addpostvideo from './Components/Addpostvideo';
import Addstatus from './Components/Addstatus';
import Clikedpost from './Components/Clikedpost';
import Clickstatus from './Components/Clickstatus';
import { Editprofile } from './Components/Editprofile';
import Editpost from './Components/Editpost';
import { Link } from 'react-router-dom';

// ------------------------------------------------------------------------
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



import { FaImages } from "react-icons/fa";

import { FaBookOpen } from "react-icons/fa";

import { IoMdContact } from "react-icons/io";
import Errorpage from './Components/Errorpage';





function App() {




  return (
    <div className="App d-sm-flex flex-sm-row justify-content-between m-0 ">
      <Dataprovider>


        <div className="header d-sm-none w-100">
          <Header className='d-sm-none' />

        </div>


        <div className="Rout-Box ">
          <Routes>

            <Route path='/'>


              <Route path='Login' element={<Login />} />
              <Route path='Login/signup' element={<Signup />} />
              <Route path='Reset' element={<Resetpassword />} />
              <Route path='Updatepass' element={<Updatepassword />} />
              <Route path='Login/Profileedit' element={<Profileedit />} />
              <Route path='search' element={<Search />} />
              <Route index element={<Home />} />
              <Route path='/video' element={<Video />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/addpost' element={<Addpost />} />
              <Route path='/addvideo' element={<Addpostvideo />} />
              <Route path='/addstatus' element={<Addstatus />} />
              <Route path='/:id' element={<Clikedpost />} />
              <Route path='/search/:id' element={<Clikedpost />} />
              <Route path='/video/:id' element={<Clikedpost />} />
              <Route path='/editpost/:id' element={<Editpost />} />
              <Route path='/editpost/' element={<Editpost />} />
              <Route path='/status/:id' element={<Clickstatus />} />
              <Route path='/video/status/:id' element={<Clickstatus />} />
              <Route path='/editprofile' element={<Editprofile />} />
              <Route path='*' element={<Errorpage/>} />
            </Route>



          </Routes>
        </div>
        <div className="navbar d-none d-sm-block  ">
           <h2 className=' '>S.v Media</h2>
          
          <nav className=''>
            {/* <h2 className='pt-5 '>S.v Media</h2> */}

            <Link to={'/'}><FaHome />  Home</Link>
            <Link to={'search'}><FaSearch />  Search</Link>
            <Link to={'addpost'}><FaImages />  Add Post</Link>
            <Link to={'addstatus'}> <FaBookOpen />  Add Status</Link>
            <Link to={'video'}><FaHeart />  Notification</Link>
            <Link to={'profile'}><IoMdContact />  Profile</Link>


          </nav>

        </div>


        <div className="footer d-sm-none w-100">
          <Footer />

        </div>
        <Popbtn />

      </Dataprovider>




    </div>
  );
}
export default App;
