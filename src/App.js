import './App.css';
import React from "react";
import Profile from "./views/Profile"
import {BrowserRouter, Route} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

function App(){
      AOS.init()
      return (
          <BrowserRouter>
              <Route path='/' component = {
                  () => <Profile/>
              }/>
          </BrowserRouter>
      );
}

export default App
