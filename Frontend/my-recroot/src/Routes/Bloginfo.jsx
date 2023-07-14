import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Bloginfo = () => {

    const [data, setData] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(()=>{
        getData();
      },[]);

      const getData = ()=>{
        axios.get(`http://localhost:8080/blogs?id=${id}`,{
            headers: {
                'Authorization': localStorage.getItem("token"),
            }
        }).then(res=>{
            console.log(res.data);
            let deta = res.data.blogs;
            const desiredObj = deta.find(obj => obj._id == id);
            setData(desiredObj);
        }).catch(err=>{
            console.log(err);
        })
    }

    

  return (
    <div style={{width:"80%", height:'80%', margin:'auto'}}>
      <h1 style={{borderBottom:"2px solid red", fontSize:"large", textAlign:"left"}}>{data.title}</h1>
      <div style={{backgroundColor:"#ebebeb", height:"80vh"}}>
        <p>{data.body}</p>
      </div>
    </div>
  )
}

export default Bloginfo