//definiujemy, jak wyglada stan autoryzacji i jakie akcje mogą go modyfikowac!!
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// typy dla TS
interface AuthState {
  token: string | null;
  role: string | null; // 'Student', 'Teacher', 'Manager'
  userName: string | null;
}

// Stan początkowy: czytamy z localStorage
const initialState: AuthState = {
  token: localStorage.getItem('token'),
  role: localStorage.getItem('role'),
  userName: localStorage.getItem('userName'),
};

//  wycinek globalnego stanu
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Akcja logowania
    setCredentials: (state, action: PayloadAction<{ token: string; role: string; userName: string }>) => {
      // mutacja w pamieci ram bo react zmieni widoki
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.userName = action.payload.userName;

      //Twardy zapis na dysku, pod odswiezenie przez usera strony zeby nie wylogowalo
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('role', action.payload.role);
      localStorage.setItem('userName', action.payload.userName);
    },
    // Akcja wylogowania
    logOut: (state) => {
      state.token = null;
      state.role = null;
      state.userName = null;

      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('userName');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
