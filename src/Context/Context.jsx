import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/reducer";

const ManyStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs"))  || [];


const initialState = {
  data: [],
  theme: "light" ,

};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [favs, setFavs] = useState(lsFavs)

  
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
    
  }, [favs])


  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url)
      .then((res) => {
        dispatch({ type: "GET_DATA", payload: res.data })
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ManyStates.Provider value={{ state, dispatch , favs, setFavs}}>
      {children}
    </ManyStates.Provider>
  );
};

export default Context;
export const useManyStates = () => {
    return useContext(ManyStates);
};