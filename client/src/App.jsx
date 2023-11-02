import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./assets/css/loader.css"
import './App.css'

// login
const Login = loadable(() => import('./pages/login/Login'))
const Register = loadable(() => import('./pages/login/Register'))
const Forgot = loadable(() => import('./pages/login/Forgot'))

const Dashboard = loadable(() => import('./pages/Dashboard'))

// crud
const AddFormData = loadable(() => import('./pages/crud/AddFormData'))
const GetFormData = loadable(() => import('./pages/crud/GetFormData'))


const Pagenotfont = loadable(() => import('./pages/Pagenotfont'))


function App() {
  return (
    <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Forgot" element={<Forgot />} />

            <Route path="/Dashboard" element={<Dashboard />} />

            <Route exact path="/addformdata" element={<AddFormData />} />
            <Route exact path="/getformdata" element={<GetFormData />} />
          
            
            <Route path="/*" element={<Pagenotfont />} />

          </Routes>
        </BrowserRouter>
  
    </div>

  );
}

export default App;
