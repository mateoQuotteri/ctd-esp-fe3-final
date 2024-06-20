import React from "react";
import Card from "../Components/Card";
import { useManyStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
//   const { state, dispatch } = useManyStates();
// console.log(state);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        <p>FAVS</p>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
