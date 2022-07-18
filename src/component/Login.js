import React, { useState  , useEffect} from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
  
    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        setUser(foundUser);
      }
    }, []);
  
    // logout the user
    const handleLogout = () => {
      setUser({});
      setUsername("");
      setPassword("");
      localStorage.clear();
    };
  
    const handleSubmit = async e => {
      e.preventDefault();
      const user = { username, password };

      const response = await axios.post(`http://127.0.0.1:8000/moderators/login`,
        user
      );
  
      setUser(response.data);

      localStorage.setItem("user", JSON.stringify(response.data));
    };
  
    if (user) {
      return (
        <div>
          {user.name} is loggged in
          <button onClick={handleLogout}>logout</button>
        </div>
      );
    }
  
    // if there's no user, show the login form
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={username}
            placeholder="enter a username"
            onChange={({ target }) => setUsername(target.value)}
          />
          <div>
            <label htmlFor="password">password: </label>
            <input
              type="password"
              value={password}
              placeholder="enter a password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

export default Login;
