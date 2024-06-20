import React from 'react'
import Card from '../Components/Card'
import  {useManyStates} from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const { state } = useManyStates();
  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div  className={`${ "card-grid "+ state.theme }`}>
      {state.data.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  )
}

export default Home