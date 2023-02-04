
function Navegacional(props){
    return(
        <nav >
            <h1>{props.titulo}</h1>
            <ul>
                <li>{props.nav1}</li>
                <li>{props.nav2}</li>
                <li>{props.nav3}</li>
            </ul>
        </nav>
    );
}
Navegacional.defaultProps ={
    titulo: 'My Title',
    nav1: 'Home'
    }
export  {Navegacional};