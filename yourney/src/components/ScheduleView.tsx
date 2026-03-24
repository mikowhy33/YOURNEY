import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {format} from 'date-fns/format';
import {parse} from 'date-fns/parse';
import {startOfWeek} from 'date-fns/startOfWeek';
import {getDay} from 'date-fns/getDay';
import {enUS} from 'date-fns/locale/en-US';

// UWAGA: Ten import jest krytyczny! Bez niego kalendarz będzie wyglądał jak rozsypane puzzle.
import 'react-big-calendar/lib/css/react-big-calendar.css';

// 1. Konfiguracja "tłumacza" dat (Localizer)
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// 2. Przykładowe dane (Twoje lekcje)
// Pamiętaj: w obiekcie Date() miesiące są indeksowane od zera! (0 = Styczeń, 2 = Marzec)
const myEventsList = [
  {
    title: 'English - Donna Swanson',
    start: new Date(2026, 2, 25, 9, 0), // 25 marca 2026, 09:00
    end: new Date(2026, 2, 25, 10, 15), // 25 marca 2026, 10:15
    resourceId: 1, // Przydatne później do przypisywania sal/nauczycieli
  },
  {
    title: 'Spanish',
    start: new Date(2026, 2, 26, 12, 0),
    end: new Date(2026, 2, 26, 13, 15),
    resourceId: 2,
  }
];

export default function ScheduleView() {
  return (
    // Kalendarz musi mieć narzuconą wysokość, inaczej się nie wyświetli!
    <div style={{ height: '80vh', padding: '20px' }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']} // Jakie widoki chcesz udostępnić
        defaultView="week" // Domyślnie ładujemy tydzień (jak na Twoim screenie)
        
        // Akcja po kliknięciu w konkretną lekcję (tutaj wstawimy w przyszłości Popover z MUI)
        onSelectEvent={(event) => alert(`Kliknąłeś lekcję: ${event.title}`)}
        
        // Zabezpieczenie przed przeciąganiem i klikaniem w tło (Read-Only)
        selectable={false} 
      />
    </div>
  );
}