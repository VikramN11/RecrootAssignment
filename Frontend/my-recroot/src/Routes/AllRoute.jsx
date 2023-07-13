import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Signup from '../Component/Signup';
import Signin from '../Component/Signin';
import NoPage from './NoPage';

const AllRoute = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="blogs" element={<Signup />} />
          <Route path="contact" element={<Signin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  )
}

export default AllRoute