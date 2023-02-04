import { Navegacional } from "./components/Navegacional/Navegacion"

function App() {
  return (
    <>
    <Navegacional titulo="Madasgascar"
    nav1="inicio"
    nav2="tienda"
    nav3="hola"
    ></Navegacional>
    <Navegacional 
    nav2="tienda"
    nav3="hola"></Navegacional>
    </>
  )
}

export {App} 
