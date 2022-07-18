import '../App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function GetUsers() {
    const [users , setUsers] = useState([])
    useEffect(()=>{
      async function getAllUser(){
        try{
  
          const users = await axios.get(`http://127.0.0.1:8000/moderators/show`)
          console.log(users.data.users)
          setUsers(users.data.users)
  
        }catch(error){
          console.log(error)
        }
      }
      getAllUser()
    },[]);
  
    return(
      <div className='App'>
        <h3>All users</h3>
        {
          users.map((user , i)=>{
            return(
            <ul>
              <li><h4>ID:{user.id}<br/> Username:{user.name} <br/> gender:{user.gender} 
              </h4></li>
            </ul>)
          })
        }
      </div>
    )
}

export default GetUsers