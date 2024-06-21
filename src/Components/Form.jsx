import React from "react";
import  {useManyStates} from "../Context/Context";
import {useState} from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const { state } = useManyStates();
  const [show, setShow] = useState(false);

  const [error, setError] = useState(false);

  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const manejoEnvio = (e) => {
    e.preventDefault();
    if (user.nombre.length > 5 && emailRegex.test(user.email)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
      console.log("Errrooor");
    }
  };


  return (
    <div className={state.theme}>
      <form onSubmit={manejoEnvio}>
       <label htmlFor="">Nombre</label>
       <input
  type="text"
  id="nombre"
  value={user.nombre}
  onChange={(e) => setUser({ ...user, nombre: e.target.value })}
/>
<input
  type="email"
  id="email"
  value={user.email}
  onChange={(e) => setUser({ ...user, email: e.target.value })}
/>

<button type="submit">Sumbit</button>
      </form>
       
      {error && (
        <p style={{ color: "red" }}>Debe colocar sus datos correctamente</p>
      )}

{show && (
        <p style={{ color: "green" }}>Todo enviado!</p>
      )}

    </div>

    
  );

};

export default Form;
