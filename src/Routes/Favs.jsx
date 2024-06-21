import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useManyStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
let favsStorage =   JSON.parse(localStorage.getItem("favs"))


const Favs = () => {
  const { state } = useManyStates();
  const randomNum = Math.random();

  console.log("favs sto " + favsStorage );
 
  return (
    <>
      <div className={`${ "card-grid "+ state.theme }`}>
        <p className={`${ "letter-"+ state.theme }`}>Tus dentistas favoritos</p>
         {favsStorage.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Favs;
