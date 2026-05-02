import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScheduleView from './components/ScheduleView';
import { MainLayout } from './components/MainLayout';
import { DashboardHome } from './components/DashboardHome';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { StudentCrmView } from './components/StudentCrmView';
import { UserProfileView } from './components/UserProfileView';
import { StudentDashboardView } from './components/StudentDashboardView';
import { ProtectedRoute } from './components/ProtectedRoute';

import { LoginView } from './components/LoginView';

const enterpriseTheme = createTheme({
  palette: {
    primary: {
      // main:'#5fb2fa' //'#5a67d8',
      main: '#90D5FF', //'#5a67d8',
    },
    background: {
      default: '#F2F2F2', //'#f4f7fb'
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
            <Route path="/login" element={<LoginView />}></Route>
            <Route element={<MainLayout></MainLayout>}>
              {/* Ochrona ścieżek  */}
              <Route element={<ProtectedRoute allowedRoles={['Teacher', 'Manager', 'Student']} />}>
                <Route path="/" element={<DashboardHome />}></Route>
                <Route path="ScheduleView" element={<ScheduleView />}></Route>

                <Route path="UserProfileView" element={<UserProfileView />}></Route>
              </Route>

              <Route element={<ProtectedRoute allowedRoles={['Teacher', 'Manager']} />}>
                <Route path="ScheduleView" element={<ScheduleView />}></Route>
                <Route path="StudentCrm" element={<StudentCrmView />}></Route>
              </Route>

              <Route element={<ProtectedRoute allowedRoles={['Student']} />}>
                <Route path="StudentDashboardView" element={<StudentDashboardView />}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
