import {Routes, Route} from 'react-router-dom'
import { Contacto, Home, Productos } from '../pages'
export const AppRouter=()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Contacto' element={<Contacto />}/>
            <Route path='/Productos' element={<Productos />}/>
        </Routes>
    )
}