import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AppLayout from './features/header/AppLayout';
import HomePage from './features/home/HomePage';
import JoinUsPage from './features/join-us/JoinUsPage';
import { createTheme } from '@mui/material/styles';
import PastEvents from './features/events/PastEvents';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<PastEvents />} />
            <Route path="/join" element={<JoinUsPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
