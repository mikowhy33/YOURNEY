import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScheduleView from './components/ScheduleView';
import { MainLayout } from './components/MainLayout';
import { DashboardHome } from './components/DashboardHome';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const enterpriseTheme = createTheme({
  palette: {
    primary: {
      // main:'#5fb2fa' //'#5a67d8',
      main:'#90D5FF' //'#5a67d8',
    },
    background: {
      default: '#F2F2F2',
      paper: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.04)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={enterpriseTheme}>
        <CssBaseline /> {/*reset marginesow box-sizing etc! */}
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout></MainLayout>}>
              <Route path="/" element={<DashboardHome />}></Route>

              <Route path="ScheduleView" element={<ScheduleView />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
