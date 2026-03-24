import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { AppLink } from './AppLink';

export const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'auto' }}>
      <AppBar position="static" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Toolbar>
          {/* Wykorzystujemy prop 'component', żeby połączyć MUI Button z Twoim AppLink */}
          <Button component={AppLink} to="/">
            Main Dashboard
          </Button>

          <Button component={AppLink} to="ScheduleView" sx={{ color: 'white', display: 'block' }}>
            Schedule View
          </Button>
        </Toolbar>
      </AppBar>

      {/* Container centruje i ogranicza szerokość treści */}
      <Container component="main" maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, py: 4, width: 'screen' }}>
        {/* ŚCIEŻKI RENDEROWANE W TYM KOMPONENCIE */}
        <Outlet />
      </Container>
    </Box>
  );
};
