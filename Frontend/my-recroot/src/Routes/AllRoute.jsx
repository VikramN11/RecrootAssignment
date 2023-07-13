import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Signup from '../Component/Signup';
import Signin from '../Component/Signin';
import NoPage from './NoPage';
import Blogs from './Blogs';
import CreateBlog from '../Component/CreateBlog';

const AllRoute = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  )
}

export default AllRoute