import React from 'react';
import "./app.css"
import Public from './Public';
import Private from "./Private";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { useAuth } from './Hooks/useAuth';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

const App = () => {
  const {token} = useAuth()

  if(token){
    return <Private />
  }
  return  <Public />
  
}

export default App;