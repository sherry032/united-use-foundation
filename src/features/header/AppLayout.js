import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
function AppLayout() {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
  }
  
  export default AppLayout;