import { useState } from "react";
import axios from "axios";
import style from "../Style/CreateBlog.module.css";
import {Link} from "react-router-dom";

  
  const CreateBlog = () =>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e)=>{
      e.preventDefault();

       const payload = {title, body}
 
       axios.post(`https://wild-ruby-calf-sari.cyclic.app/blogs/create`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token"),
        }
       }).then(res=>{
         console.log(res.data);
         alert("Blog has been created")
         setTitle('');
         setBody('');
        }).catch(err=>{
          console.log(err);
        })
      }

    return (
      <form className={style.createBlogContainer} onSubmit={handleSubmit}>
        <h1 style={{fontSize:"larger", fontWeight:"700"}}>Create Blog</h1>
      <input
        type="text"
        name="title"
        placeholder="Please enter Heading"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
      <input
        type="textarea"
        name="body"
        placeholder="Start writing post..."
        value={body}
        onChange={e=>setBody(e.target.value)}
      />
      <input type="submit" value="Post" />

      <Link to="/blogs">See all Blogs</Link>
    </form>
    );
  }

  export default CreateBlog;