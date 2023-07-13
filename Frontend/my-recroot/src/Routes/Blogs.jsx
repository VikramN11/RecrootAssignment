import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        getData();
      },[]);

    const getData = ()=>{
        axios.get("http://localhost:8080/blogs",{
            headers: {
                'Authorization': localStorage.getItem("token"),
            }
        }).then(res=>{
            console.log(res.data);
            setBlogs(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:8080/blogs/delete/${id}`,{
            headers: {
                'Authorization': localStorage.getItem("token"),
            }
        })
    }

    return (
        <div>
             {blogs?.map(el=>(
            <div key={el._id}>
                <h1>{el.title}</h1>
                <div>
                <button onClick={()=>handleDelete(el._id)}>Delete</button>
                <p>Posted on : {el.date}</p>
                </div>
            </div>
         ))}
        </div>
    )
}

export default Blogs