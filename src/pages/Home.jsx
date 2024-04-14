import { useState } from "react"
import { CardCategory } from "../components"
export const Home=()=>{
    const[categories, setCategories]=useState(["list"])
    return(
        <>
        <div className="page-home">
            <h2>Bienvenido a la licorería</h2>
            <img src="/src/img/logo_principal.png" alt=""/>
            
            <div className="section-category">
                <h2>Nuestras categorias</h2>
                <div className="products-category">
                    {/* <h4>Renderizar Api</h4> */}
                    {categories.map((category)=>(
                        <CardCategory key={category} category={category}/>
                    ))}
                </div>
            </div>
        </div>
        
        </>
    )
}