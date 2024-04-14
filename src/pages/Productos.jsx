import { useState } from "react"
import { CardProducts } from "../components"
export const Productos=()=>{
    const[type1, setCategories]=useState(["Alcoholic"])
    
    return(
        <>
        <div className="page-products">
        <div className="section-products">
                <h2>Nuestras Bebidas Alcoholicas</h2>
                <div className="products-type">
                    {/* <h4>Renderizar Api</h4> */}
                    {type1.map((tipo)=>(
                        <CardProducts key={tipo} tipo={tipo}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}