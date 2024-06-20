import React from 'react'
import  {useManyStates} from "../Context/Context";

const Footer = () => {
  const { state } = useManyStates();
  return (
    <footer  className={state.theme}>
    <p>Powered by</p>
    <img src="../../public/images/DH.png" alt='DH-logo' />
</footer>
  )
}

export default Footer
