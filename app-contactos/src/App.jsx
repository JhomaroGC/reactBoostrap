import { useState } from 'react';

//Estilos

import '../src/assets/css/App.css';



//Componentes
import Main from './compontents/Main';
import Navegacion from './compontents/Navegacion';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegacion/>
    
      <Main
        count = {count}
        setCount = {setCount}
    />

   
    
    </>
  )
}

export default App

