import React from "react";
import Navbar from "./Components/Navbar/NavBar";
import Home from "./Pages/Home/Home";
import FindRide from "./Pages/FindRide/FindRide";
import PostRide from "./Pages/PostRide/PostRide";
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/get-ride" element={<FindRide/>}/>
        <Route path="/Post-ride" element={<PostRide/>}/>

{/*         <Route path="/searchRide" element={<SearchRide />} />
 */}    
{/*      <Route path="/ride-details" element={<RideDetails />} />
 */}
{/*         <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpDriver" element={<SignUpDriver />}/> 
 */}     
  </Routes>
    </>
  );
}

export default App;
