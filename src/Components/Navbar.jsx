import React from 'react'
import {Link} from "react-router-dom"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useNavigate } from 'react-router-dom';
import  {useManyStates} from "../Context/Context";

const Navbar = () => {
  const navigate = useNavigate();
  const { state , dispatch} = useManyStates();
  return (
    <nav  className={state.theme}>
    <button onClick={() => navigate(-1)}>Volver </button>
    
      <Link to="/"> <h3>Home</h3></Link>
      <Link to="/contact"> <h3>Contacto</h3></Link>
      <Link to="/favs"> <h3>Favs</h3></Link>

      <button onClick={
        ()=>{
          dispatch({ type: "CHANGE_THEME" });
          console.log(state);
        }
      }>Change theme</button>
   
    </nav>
  )
}

export default Navbar