import { Link } from "react-router-dom"

export const Header=()=>{
    return(
        <div className="header">
            <img src="/src/img/logo_principal.png" alt=""/>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Productos">Nuestros Productos</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </div>
    )
}