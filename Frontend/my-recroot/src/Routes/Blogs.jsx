import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleBlog from '../Component/SingleBlog';
import {Link} from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        getData();
      },[]);

      const getData = ()=>{
        axios.get("https://wild-ruby-calf-sari.cyclic.app/blogs",{
            headers: {
                'Authorization': localStorage.getItem("token"),
            }
        }).then(res=>{
            console.log(res.data.blogs);
            setBlogs(res.data.blogs);
        }).catch(err=>{
            console.log(err);
        })
    }


    return (
        <div style={{width:"80%", height:"80%", margin:"auto"}}>
             {blogs?.map(el=> <SingleBlog key={el._id} {...el}/>)}
        </div>
    )
}

export default Blogs