import { Link } from "react-router-dom"

export const Header=()=>{
    return(
        <div className="header">
            <img src="https://images.vexels.com/media/users/3/136295/isolated/preview/9293787a09b95e84c856e6474cff8ce0-marca-de-licorer-a.png" alt=""/>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Productos">Nuestros Productos</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </div>
    )
}
