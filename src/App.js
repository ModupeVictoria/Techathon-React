
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer'
import Error from './Components/Error'


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route  path="/register" element={<Register/>}/>
           <Route  path="/login" element={<Login/>}/>
           <Route  path="/dashboard" element={<Dashboard/>}/>
           <Route path="/*" element= {<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
