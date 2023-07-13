import { useState } from "react";
import axios from "axios";
import style from "../Style/Signin.module.css";

  
  const CreateBlog = () =>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e)=>{
      e.preventDefault();

       const payload = {title, body}
 
       axios.post(`http://localhost:8080/blogs/create`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token"),
        }
       }).then(res=>{
         console.log(res.data);
         setTitle('');
         setBody('');
        }).catch(err=>{
          console.log(err);
        })
      }

    return (
      <form className={style.createBlogContainer} onSubmit={handleSubmit}>
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
    </form>
    );
  }

  export default CreateBlog;