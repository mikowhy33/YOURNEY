
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {format} from 'date-fns/format';
import {parse} from 'date-fns/parse';
import {startOfWeek} from 'date-fns/startOfWeek';
import {getDay} from 'date-fns/getDay';
import {enUS} from 'date-fns/locale/en-US';


import 'react-big-calendar/lib/css/react-big-calendar.css';

// Konfiguracja dat 
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

// Przykladowe dane

const myEventsList = [
  {
    title: 'English - Donna Swanson',
    start: new Date(2026, 2, 25, 9, 0), // 25 marca 2026, 09:00
    end: new Date(2026, 2, 25, 10, 15), // 25 marca 2026, 10:15
    resourceId: 1,
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
    // Kalendarz musi miec narzucona wysokosc
    <div style={{ height: '80vh', padding: '20px' }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']} 
        defaultView="week" // domyslnie tydzien
        
        
        onSelectEvent={(event) => alert(`Kliknąłeś lekcję: ${event.title}`)}
        
        // readonly
        selectable={false} 
      />
    </div>
  );
}