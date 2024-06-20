import React from "react";
import {Link} from "react-router-dom"
import  {useManyStates} from "../Context/Context";


const Card = ({user}) => {

  const imgR= "../../public/images/doctor.jpg";
  const { state } = useManyStates();

   const { favs, setFavs } = useManyStates();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className={`card    ${ "card-"+ state.teme }`}>
        <Link to={"/dentist/" + user.id}>
        <img src={imgR} alt={user.name} />
        <h4 className={`${ "letter-"+ state.teme }`}>{user.name}</h4>
        <h6>{user.username}</h6>

      </Link>
        <button onClick={() =>{
          setFavs((prev) => [...prev , user])
          // console.log(favs);
          }} className="favButton">Add fav</button>
    
    </div>
  );
};

export default Card;
