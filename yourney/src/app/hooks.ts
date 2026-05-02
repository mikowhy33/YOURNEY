import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';


// zmiana rzeczy w magazynie, wysylanie danych aby je nadpisac
export const useAppDispatch = () => useDispatch<AppDispatch>();

// pozwala podejrzec co lezy w glownym magazynie, jak ktos cos zmieni to odswieza widok na ekranie
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;