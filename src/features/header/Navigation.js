import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from "./logo.jpg"

const routes = [
    {
    name: "Home",
    path: "/"
    },
    {
    name: "Past Events",
    path: "/events"
    },
    {
    name: "Join us",
    path: "/join"
    },
]

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const NavigationLinks = (
    <List>
      {routes.map((route, index) => (
        <ListItem button key={index} component={RouterLink} to={route.path}>
          <ListItemText primary={route.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Box sx={{bgcolor: "white", p: 3, display: "flex", alignItems: "center", gap: 3}}>
        <img src={logo} alt="logo" style={{display: "inline-block", height: "80px", width: "80px"}}/>
        <Typography variant={isMobile ? "h6" : "h4"} sx={{ textTransform: "uppercase", color: "black", fontWeight: "bold" }}>
          United youth foundation
        </Typography>
      </Box>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer}
              ModalProps={{ keepMounted: true }}
            >
              {NavigationLinks}
            </Drawer>
          </>
        ) : (
          <div>
            {routes.map((route, index) => (
              <Typography
                key={index}
                variant="h6"
                component={RouterLink}
                to={route.path}
                sx={{ marginRight: 2, textDecoration: 'none', color: 'inherit' }}
              >
                {route.name}
              </Typography>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
