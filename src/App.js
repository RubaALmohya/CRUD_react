import './App.css';
import Get from './component/GetUsers';
import FormP from './component/ResPost';
import Log from './component/LogPost';
import Setting from './component/SettPost';
import PutSet from './component/PutSet';
import Login from './component/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){

  
  return(
    <div className='App'>
  
      <h3>connect front-end </h3>
     
      <hr/>
      <Log/>
      <hr/>
      <Setting/>
      <hr/>
     <Login/>

      <Get/>  
      <hr/>
      <PutSet/>
      <hr/>
      <Router>
        {/* <Axios></Axios> */}
        {/* <nav>
          <Link to="/Axios"></Link>
        </nav> */}
        <Routes>
          <Route>
            <Route path="/"></Route>
            {/* <Route path="Home" element={<Home />}></Route> */}
            <Route path="create" element={ <FormP/>}></Route>
            <Route path="update" element={  <PutSet/>}></Route>
          </Route>
        </Routes>
      </Router>

     <button onClick={<Get/>}>Show</button> 

    </div>
  )
}
export default App;
