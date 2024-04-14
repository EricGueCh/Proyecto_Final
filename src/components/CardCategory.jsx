import { useEffect, useState } from "react"
import { getCategory } from "../actions/api.category"
import { Link } from 'react-router-dom'
// import '../index.css'

export const CardCategory=(props)=>{
    const {category}=props
    const [cards, setCards]=useState([])
    useEffect(()=>{
        getCategory(category).then(res=>setCards(res.drinks))
    },[])
    console.log("cards",cards)
    
    
    return(
        <>
            {cards.map((card)=>(
                <div className="card-category">
                    <Link className="card-cat" to="">{card.strCategory}</Link>
                </div>
            ))
            }

        </>
    )
}