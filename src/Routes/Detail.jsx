import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
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
      <h2>Nombre: {dentist.name}</h2>
      <h2>Username: {dentist.name}</h2>

      <p>Phone: {dentist.phone}</p>
      <a href={dentist.website}>Website</a>
      
    </>
  )
}

export default Detail