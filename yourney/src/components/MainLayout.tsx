import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Drawer, Button, Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DRAWER_WIDTH = 210;

export const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: { xs: 2, md: 4 }, p: 2 }}>
      <Button
        component={NavLink}
        to="/"
        onClick={() => setMobileOpen(false)}
        sx={{
          justifyContent: 'flex-start',
          color: '#000000',
          '&.active': {
            backgroundColor: 'primary.main',
            color: '#000000',
            fontWeight: 'bold',
          },
        }}
      >
        Main Dashboard
      </Button>

      <Button
        component={NavLink}
        to="/ScheduleView"
        onClick={() => setMobileOpen(false)}
        sx={{
          justifyContent: 'flex-start',
          color: '#000000',
          '&.active': {
            backgroundColor: 'primary.main',
            color: '#000000',
            fontWeight: 'bold',
          },
        }}
      >
        Schedule View
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* pasek z burgerem tylko telefony */}
      <AppBar position="fixed" sx={{ display: { md: 'none' }, backgroundColor: 'primary.main' }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Your School, brane z serwera!
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Pasek Mobilki temporary na przycisk */}
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // zamiast niszczyc komponent to go ukrywa!
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH, backgroundColor: '#ffffff', color: '#000000' },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Pasek laptopy */}
      <Drawer
        variant="permanent" // zawsze widoczne
        sx={{
          display: { xs: 'none', md: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          // nazwa konkretnego diva w drawerze na ktorym wszystko sie dzieje
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, backgroundColor: '#ffffff', color: '#000000' },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Glowna tresc */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: { xs: 7, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` }, // kluczowe, bierzemy cala szerokosc i ucinamy pasek menu!
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
