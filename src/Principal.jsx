import { Footer, Header } from "./components"
import { AppRouter } from "./routers/AppRouter"

export const Principal=()=>{
    return(
        <div>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}