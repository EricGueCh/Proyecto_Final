import { useEffect, useState } from "react"
import { getProducts } from "../actions/api.products"

export const CardProducts=(props)=>{
    const {tipo}=props
    const [cards, setCards]=useState([])
    useEffect(()=>{
        getProducts(tipo).then(res=>setCards(res.drinks))
    },[])
 console.log("producto",cards)
    return(
        <>
            {cards.map((card)=>(
                <div className="card-type" key={card.strDrinkThumb}>
                    <img src={card.strDrinkThumb}></img>
                    <h3>{card.strDrink}</h3>
                </div>
            ))
            }

        </>
    )
}