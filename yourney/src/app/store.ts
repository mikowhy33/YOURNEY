import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer, // podpiecie do glownego magazynu!
    // gdy serwer dopisac: [api.reducerPath]: api.reducer
  },
});

// mapa dla lornetki, analizuje wartosc magazynu i generuje schemat, patrzy na authReducer tam widzi funckje
export type RootState = ReturnType<typeof store.getState>;

// zmusza do wysylania do magazynu tylko zdefuniowanych wczesniej rozkazow
export type AppDispatch = typeof store.dispatch;
