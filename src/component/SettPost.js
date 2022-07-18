import '../App.css';
import { useState } from 'react';
import axios from 'axios';

function SettPost() {
    const [users , setUsers] = useState([])
    const [name , setName] = useState("");
    const [gender , setGender] = useState();
    const [account_type , setAccountType] = useState();
    const [birthday , setBirthday] = useState();

    const postData =()=>{
      async function getAllUser(){
        try{
  
          const users = await axios.post(`http://127.0.0.1:8000/moderators/settingr` , {name , gender ,account_type,birthday})
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
      <input placeholder='name' onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
      <input placeholder='gender' onChange={(e)=>{setGender(e.target.value)}} /><br/><br/>
      <input placeholder='account_type' onChange={(e)=>{setAccountType(e.target.value)}} /><br/><br/>
      <input placeholder='birthday' onChange={(e)=>{setBirthday(e.target.value)}} /><br/><br/>
      <button onClick={postData}> submit</button>
      {<h4>{users}</h4>}


      </div>
    )
}

export default SettPost