import { Link } from "react-router-dom"

export const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-content">
                <img src="/src/img/logo_principal.png" alt=""/>
                <div className="page-options">
                    <h3>Opciones de Página</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Productos">Nuestros Productos</Link></li>
                        <li><Link to="/Contacto">Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <h3>&copy; Elaborado por <b>ERIC GUERRERO</b>. Todos los derechos reservados.</h3>
            </div>
        </div>
    )
}