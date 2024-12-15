// import React from 'react'
// import Navbar from './Components/Navbar';
// import Intro from './Components/Intro';
// import Services from './Components/Services';
// import Enlightment from './Components/Enlightment';
// import Mission from './Components/Mission';
// import AboutUs from './Components/AboutUs';
// import Footer from './Components/Footer';
// import UserDetails from './Components/UserDetails';
// import Quests from './Components/Quests';
// import VideoConn from './Components/VideoConn';
// import NotFound from './Components/NotFound';

// import {Routes,Route} from 'react-router-dom'
// import Home from './Layouts/Home';
// import Profile from './Layouts/Profile';
// import Assessment from './Layouts/Assesment';
// import Jobs from './Layouts/Jobs';
// import HomeVideo from './Components/VideoCalling/HomeVideo';
// import RoomVideo from './Components/VideoCalling/RoomVideo';

// import Payment from './Components/Payment/Payment';
// import MentorsList from './Layouts/MentorsList';

// import Login from './Components/LogSigup/Login';
// import Signup from './Components/LogSigup/Signup';

// function App() {
//   return (
//     <div className='App'>
//        <Routes>

//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/signup' element={<Signup/>}/>
//         <Route path='*' element={<NotFound/>}/>

//         <Route path='/profile' element={<Profile/>}/>
//         <Route path='/assessment' element={<Assessment/>}/>
//         <Route path='/jobs' element={<Jobs/>}/>
//         <Route path='/joinroom' element={<HomeVideo/>}/>
//         <Route path='/joinroom/myroom/:roomid' element={<RoomVideo/>}/>
//         <Route path='/mentors/payment' element={<Payment/>}/>
//         <Route path='/mentors' element={<MentorsList/>}/>
        
//       {/*
//       <Navbar/>
//       <Intro/>
//       <Services/>
//       <Enlightment/>
//       <Mission/>
//       <AboutUs/>
//       <Footer/> */}
//       {/* <UserDetails/> */}
//       {/* <Quests /> */}
//       {/* <VideoConn /> */}
//       </Routes>
//     </div>
//   )
// }

// export default App






















import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Services from './Components/Services';
import Enlightment from './Components/Enlightment';
import Mission from './Components/Mission';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import UserDetails from './Components/UserDetails';
import Quests from './Components/Quests';
import VideoConn from './Components/VideoConn';
import NotFound from './Components/NotFound';

import Home from './Layouts/Home';
import Profile from './Layouts/Profile';
import Assessment from './Layouts/Assesment';
import Jobs from './Layouts/Jobs';
import HomeVideo from './Components/VideoCalling/HomeVideo';
import RoomVideo from './Components/VideoCalling/RoomVideo';

import Payment from './Components/Payment/Payment';
import MentorsList from './Layouts/MentorsList';

import Login from './Components/LogSigup/Login';
import Signup from './Components/LogSigup/Signup';
import PrivateRoute from './Components/PrivateRoute';
import MentorLogin from './Components/LogSigup/MentorLogin'
import MentorSignup from './Components/LogSigup/MentorSignup'
import MentorDashboard from './Components/MentorDashboard';
import CVPreview from './Components/CvGenerator/CVPreview';
import JobListings from './Components/Jobs/JobLisgings';
import CareerRecommendation from './Components/CareerRecom/CareerRecommendation';
import UniversityCard from './Components/Universities/UniversityCard';

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mentor/signup' element={<MentorSignup />} />
        <Route path='/mentor/login' element={<MentorLogin />} />
        <Route path='/mentor/dashboard' element={<MentorDashboard />} />
        {/* <Route path='/listuni' element={<UniversityCard />} /> */}
        {/* <Route path='/assessment' element={<CareerRecommendation />} /> */}
        <Route path='*' element={<NotFound />} />



        <Route path="/profile"  element={<Profile />} /> 
        <Route path='/jobs'  element={<JobListings />} /> 
        <Route path='/joinroom'  element={<HomeVideo />} />
        <Route path='/joinroom/myroom/:roomid'  element={<RoomVideo />} />
        <Route path='/mentors/payment'  element={<Payment />} />
        <Route path='/gencv'  element={<CVPreview />} />
        <Route path='/assessment'  element={<CareerRecommendation />} />
        <Route path='/listuni'  element={<UniversityCard />} />
        <Route path='/mentors'  element={<MentorsList />} />


        {/* Private Routes: Only accessible when the user is logged in */}
        {/* <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path='/jobs' element={<PrivateRoute element={<JobListings />} />} />
        <Route path='/joinroom' element={<PrivateRoute element={<HomeVideo />} />} />
        <Route path='/joinroom/myroom/:roomid' element={<PrivateRoute element={<RoomVideo />} />} />
        <Route path='/mentors/payment' element={<PrivateRoute element={<Payment />} />} />
        <Route path='/gencv' element={<PrivateRoute element={<CVPreview />} />} />
        <Route path='/assessment' element={<PrivateRoute element={<CareerRecommendation />} />} />
        <Route path='/listuni' element={<PrivateRoute element={<UniversityCard />} />} />
        <Route path='/mentors' element={<PrivateRoute element={<MentorsList />} />} /> */}


      </Routes>
    </div>
  );
}

export default App;
