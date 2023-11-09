import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chistes from "./chistes" 

function App() {
  const [contenido, setcontenidoApi] = useState(null);
  
  const reqApi = async () => {
    const api = await fetch('https://icanhazdadjoke.com/search', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const contenidoApi = await api.json();

    console.log(contenidoApi);
    setcontenidoApi(contenidoApi.results);
  }

  console.log(contenido);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <header>
          <h1>Cuentame un chiste</h1>
          {contenido ? (
              <Chistes chistes ={contenido} />
          ):(
              <button onClick={reqApi} className='btn-search'>Buscar chiste</button>
          )}
        
        </header>
      </div>
    </>
  )
}

export default App
