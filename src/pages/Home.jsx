import { useState } from "react"
import { CardCategory } from "../components"
export const Home=()=>{
    const[categories, setCategories]=useState(["list"])
    return(
        <>
        <div className="page-home">
            <h2>Bienvenido a la licorería</h2>
            <img src="https://images.vexels.com/media/users/3/136295/isolated/preview/9293787a09b95e84c856e6474cff8ce0-marca-de-licorer-a.png" alt=""/>
            
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
