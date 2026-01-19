
import { Outlet } from "@tanstack/react-router"

export const Layout= () =>{
    return(
        <div>
           <header>product Ditalse </header>
              <main>
                <Outlet/>
              </main>
             <footer>
               <p>© 2024 My Company</p>
                </footer>  
        </div>
    ) 
}