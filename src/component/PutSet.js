import '../App.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';

function PutSet() {
    const [users , setUsers] = useState([])
    const [name , setName] = useState("");
    const [gender , setGender] = useState();
    const [account_type , setAccountType] = useState();
    const [birthday , setBirthday] = useState();
    const [id, setId] = useState(null);
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setGender(localStorage.getItem("gender"));
        setAccountType(localStorage.getItem("account_type"));
        setBirthday(localStorage.getItem("birthday"));
      }, []);

    const postData =()=>{
      async function getAllUser(){
        try{
  
          const users = await axios.post(`http://127.0.0.1:8000/moderators/update/${id}` , {name , gender ,account_type,birthday})
          console.log(users.data)
          setUsers(users.data.id)
  
        }catch(error){
          console.log(error)
        }
      }
      getAllUser()
    };
    
    const setUbdate = (e) => {
        let { id, name, gender,account_type,birthday } = e;
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("gender", gender);
        localStorage.setItem("account_type", account_type);
        localStorage.setItem("birthday",birthday);
    
      };
  
    return(
      <div className='App'>
           {
          users.map((e , i)=>{
            return(
            <ul>
              <li><h4>ID:{e.id}<br/> Name:{e.name} </h4></li>
       
              <button onClick={setUbdate(e)}>Ubdate</button>
       
            </ul>)
          })
        }
         <input placeholder='id' onChange={(e)=>{setId(e.target.value)}} /><br/><br/>
      <input placeholder='name' onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
      <input placeholder='gender' onChange={(e)=>{setGender(e.target.value)}} /><br/><br/>
      <input placeholder='account_type' onChange={(e)=>{setAccountType(e.target.value)}} /><br/><br/>
      <input placeholder='birthday' onChange={(e)=>{setBirthday(e.target.value)}} /><br/><br/>
      <button onClick={postData}> submit</button>
      {<h4>{users}</h4>}
     

      </div>
    )
}

export default PutSet