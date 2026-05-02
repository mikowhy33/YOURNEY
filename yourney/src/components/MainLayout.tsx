import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Drawer, Button, Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { logOut } from '../features/auth/authSlice';
import LogoutIcon from '@mui/icons-material/Logout';

const DRAWER_WIDTH = 210;

// KONFIG MENU - kto co widzi
const MENU_CONFIG = {
  Student: [
    { title: 'Main Dashboard', path: '/' },
    { title: 'Schedule View', path: '/ScheduleView' },
    { title: "Student's metrics", path: '/StudentDashboardView' },
    { title: "User's profile", path: '/UserProfileView' },
  ],
  Teacher: [
    { title: 'Main Dashboard', path: '/' },
    { title: 'Schedule View', path: '/ScheduleView' },
    { title: "Student's crm", path: '/StudentCrm' },
    { title: "User's profile", path: '/UserProfileView' },
  ],
  Manager: [
    { title: 'Main Dashboard', path: '/' },
    { title: 'Schedule View', path: '/ScheduleView' },
    { title: "Student's crm", path: '/StudentCrm' },
    { title: "User's profile", path: '/UserProfileView' },
  ],
};

export const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // ROLA Z REDUXA
  const { role } = useAppSelector((state) => state.auth);
  console.log(role +'ROLA')
  const dispatch = useAppDispatch(); // Inicjalizacja dyspozytora
  const navigate = useNavigate(); // Inicjalizacja nawigacji

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  //DOBIERAMY MENU NA PODSTAWIE ROLI (domyślnie Student )
  const currentMenu = role ? MENU_CONFIG[role as keyof typeof MENU_CONFIG] : MENU_CONFIG['Student'];

  const drawerContent = (
    // Zmiana: height: '100%' pozwala na użycie mt: 'auto' dla elementów na dole
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', mt: { xs: 2, md: 4 } }}>
      {/* Kontener na linki nawigacyjne */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
        {currentMenu.map((item) => (
          <Button
            key={item.title}
            component={NavLink}
            to={item.path}
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
            {item.title}
          </Button>
        ))}
      </Box>

      {/* Kontener na przycisk wylogowania - zepchnięty na dół */}
      <Box sx={{ mt: 'auto', p: 2, borderTop: '1px solid #e2e8f0' }}>
        <Button
          fullWidth
          onClick={handleLogout}
          startIcon={<LogoutIcon />}
          sx={{
            justifyContent: 'flex-start',
            color: '#ef4444', // Czerwony kolor dla akcji destrukcyjnych
            '&:hover': {
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
            },
          }}
        >
          Log out
        </Button>
      </Box>
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
