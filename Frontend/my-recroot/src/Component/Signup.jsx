  import { useState } from 'react';
  import axios from "axios";
  
  const Signup = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState(null);

    const handleSubmit = (e)=>{
       e.preventDefault();
       let payload = {name, email, password, profile};
       axios.post(`http://localhost:8080/users/register`, payload).then(res=>{
        console.log(res);
       }).catch(err=>{
        console.log(err)});
    }
  
    
    return (
      <form method='post' encType="multipart/form-data" onSubmit={handleSubmit}>
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
          setProfile(e.target.files[0].name)
        }}
        required
      /><br />
      <button type="submit">Sign Up</button>
    </form>
    );
  }

  export default Signup;