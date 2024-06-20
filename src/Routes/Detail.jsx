import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useManyStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useManyStates();

  const [dentist, setDentist] = useState({});
  const params = useParams();
  
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) => {
      setDentist(res.data)
      console.log(res.data);   
    })
  }, []);

  return (
    <>
      <h2 className={state.theme}>Nombre: {dentist.name}</h2>
      <h2  className={state.theme}>Username: {dentist.name}</h2>

      <p  className={state.theme}>Phone: {dentist.phone}</p>
      <a  className={state.theme} href={dentist.website}>Website</a>
      
    </>
  )
}

export default Detail