import React from 'react';
import axios from 'axios';
import style from "../Style/Singleblog.module.css";
import { useNavigate } from 'react-router-dom';

const SingleBlog = ({_id, title, body,date}) => {
    const navigate = useNavigate();

    const handleEdit = (id)=>{

    }

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:8080/blogs/delete/${id}`,{
            headers: {
                'Authorization': localStorage.getItem("token"),
            }
        })
    }

  return (
      <div className={style.singleblogContainer} onClick={()=>navigate(`/bloginfo/${_id}`)}>
                <h1>{title}</h1>
                <div>
                <button onClick={()=>handleEdit(_id)}>Edit</button>
                <button onClick={()=>handleDelete(_id)}>Delete</button>
                <p>Posted on : {date}</p>
                </div>
        </div>
  )
}

export default SingleBlog