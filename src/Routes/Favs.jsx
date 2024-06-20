import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useManyStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
let favsStorage =   JSON.parse(localStorage.getItem("favs"))


const Favs = () => {
  const { state } = useManyStates();
 
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`${ "card-grid "+ state.theme }`}>
        <p>Tus dentistas favoritos</p>
         {favsStorage.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Favs;
