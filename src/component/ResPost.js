import '../App.css';
import { useState } from 'react';
import axios from 'axios';

function ResPost() {
    const [users , setUsers] = useState([])
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");


    const postData =()=>{
      async function getAllUser(){
        try{
  
          const users = await axios.post(`http://127.0.0.1:8000/moderators/register` , {username , email ,password})
          console.log(users.data)
          setUsers(users.data.message)
  
        }catch(error){
          console.log(error)
        }
      }
      getAllUser()
    };
  
    return(
      <div className='App'>
      <input placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} /><br/><br/>
      <input placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} /><br/><br/>
      <input placeholder='pass' onChange={(e)=>{setPassword(e.target.value)}} /><br/><br/>
      <button onClick={postData}> Res</button>
      {<h4>{users}</h4>}


      </div>
    )
}

export default ResPost