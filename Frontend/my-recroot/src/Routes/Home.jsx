import React from 'react'
import Signup from '../Component/Signup'
import Signin from '../Component/Signin'
import Blogs from './Blogs'
import CreateBlog from '../Component/CreateBlog'

const Home = () => {
  return (
    <div>
        {/* <Signin/> */}
        <Blogs/>
        {/* <CreateBlog/> */}
    </div>
  )
}

export default Home