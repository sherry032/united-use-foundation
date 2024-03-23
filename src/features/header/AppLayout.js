import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
function AppLayout() {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Container sx={{py: 5}}>
                    <Outlet />
                </Container>
            </main>
        </>
    );
  }
  
  export default AppLayout;