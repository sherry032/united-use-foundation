import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
function AppLayout() {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main className="App">
                <Container sx={{py: 5}}>
                    <Outlet />
                </Container>
            </main>
            <footer className="App-footer">
                <p>&copy; 2024 UYF. All rights reserved.</p>
            </footer>
        </>
    );
  }
  
  export default AppLayout;