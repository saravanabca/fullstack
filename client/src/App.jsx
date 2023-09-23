import React from 'react';
import loadable from '@loadable/component';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./assets/css/loader.css"
import './App.css'
// import Login from './pages/login';

const Login = loadable(()=> import('./pages/Login'))
const Register = loadable(()=> import('./pages/Register'))
const Forgot = loadable(()=> import('./pages/Forgot'))

const Dashboard = loadable(()=> import('./pages/Dashboard'))
const AddFormData = loadable(()=> import('./pages/AddFormData'))

const UpdateFormData = loadable(()=> import('./pages/UpdateFormData'))
const DisplayFormData = loadable(()=> import('./pages/DIsplayFormData'))


function App() {
  return (
    <div>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Forgot" element={<Forgot/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route exact path="/addform" element={<AddFormData/>}/>
      <Route path="/updateform" element={<UpdateFormData/>}/>
      <Route exact path="/displaydata" element={<DisplayFormData/>}/>
      <Route path="/usecallback" element={<UpdateFormData/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
