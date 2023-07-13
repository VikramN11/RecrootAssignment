  import { useState } from 'react';
  import axios from "axios";
  
  const Signup = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState(null);

    const handleSubmit = (e)=>{
       e.preventDefault();
       const payload = new FormData();
      payload.append('name', name);
      payload.append('email', email);
      payload.append('password', password);
      payload.append('profileImage', profile);

       axios.post(`http://localhost:8080/users/register`, payload).then(res=>{
        console.log(res);
       }).catch(err=>{
        console.log(err)});
    }
  
    
    return (
      <form action='/users/register' method='post' encType="multipart/form-data" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e=>setName(e.target.value)}
        required
      /><br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        required
      /><br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        required
      /><br />
      <input
        type="file"
        name="profileImage"
        onChange={(e)=>{
          console.log(e.target.files[0]);
          setProfile(e.target.files[0])
        }}
        required
      /><br />
      <input type="submit" value="Sign Up" />
    </form>
    );
  }

  export default Signup;