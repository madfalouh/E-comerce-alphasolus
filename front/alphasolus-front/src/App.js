import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import { useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import Home from './home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

const navigate=useNavigate()


useEffect(  ()=>{

navigate("/login")

} ,


[])



  return (
    <div className="App">

    
    

    <Routes>
        

 <Route path="/login" element={   <Login/>} />
 <Route path="/home" element={   <Home/>} />

</Routes>
  

         

     
      
    </div>

  );
}

export default App;
