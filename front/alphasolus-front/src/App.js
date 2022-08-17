import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import Home from './home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Register from './pages/register';
import Cart from './pages/cart';


function App() {

const navigate=useNavigate()







  return (
    <div className="App">

    
    

    <Routes>
        

 <Route path="/login" element={   <Login/>} />
 <Route path="/home" element={   <Home/>} />
 <Route path="/register" element={   <Register/>} />
<Route path="/cart" element={   <Cart/>} />
</Routes>
  

         

     
      
    </div>

  );
}

export default App;
