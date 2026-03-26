import { Box, Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { PopUpComponent } from './reusableComponents/Popup';
import { mockLessons, type LessonStatus } from '../mocks/lessonMock';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';

export const DashboardHome = () => {
  const [popUpOpened, setPopUpOpened] = useState<boolean>(false);
  const [notes, setNotes] = useState<string[]>([]);

  const OpenPopUp = () => setPopUpOpened(true);
  const ClosePopUp = () => setPopUpOpened(false);
  const handleAddNote = (note: string) => setNotes((prev) => [...prev, note]);

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: { xs: 2, md: 4 } }}>
      {popUpOpened && <PopUpComponent hidePopUp={ClosePopUp} addNote={handleAddNote} />}

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexGrow: 1, gap: 4 }}>
        {/* lewa kolumna 75% */}
        <Box sx={{ width: { xs: '100%', md: '80%' }, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Hello User
            </Typography>
            <Typography variant="body2" color="text.secondary">
              [Docelowo zamiast user nazwa nauczyciela/managera/ucznia z serwera]
            </Typography>
          </Box>

          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Today's Schedule
          </Typography>

          {mockLessons.map((lesson, index) => {
            // DANE NA TEMAT KOLORW Z LEKCJI Z SERWERA!
            const getStatusColor = (status: LessonStatus) => {
              switch (status) {
                case 'COMPLETED':
                  return '#10b981'; // lekcja odbyta
                case 'UPCOMING':
                  return '#f59e0b'; // lekcja oczekuje
                case 'CANCELLED':
                  return '#ef4444'; // lekcja odwolana
                default:
                  return '#e2e8f0'; // jak blad to szare
              }
            };

            const lessonColor = getStatusColor(lesson.status);
            return (
              <Paper
                key={index}
                elevation={2} // okresla plaskosc kafelek
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  mb: 3,
                  borderRadius: 2,
                  border: '1px solid #e2e8f0',
                  borderLeft: `6px solid ${lessonColor}`,
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: 3, cursor: 'pointer' },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, borderBottom: '1.5px solid #acafb3' }}>
                  <Box sx={{ p: 2, pl: 1, maxWidth: 270 }}>
                    <Typography fontWeight="bold">{lesson.topic}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, opacity: 0.9 }}>
                      <RoomIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{lesson.room}</Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexGrow: 1,
                      pr:{xs:0,md: 2},
                      pl:{xs:1,md:0},
                      pb:{xs:1.5},
                      justifyContent: { xs: 'flex-start', md: 'flex-end' },
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                  
                    <AssignmentIcon sx={{ color: 'text.secondary' }} />

                    {/* GDY SERWER TU BEDA CYFRY ZALEZNE OD TEGO JAK NAUCZYCIEL WPISAL! */}
                    <Box sx={{ display: 'flex', width: '150px', height: '24px', borderRadius: 1, overflow: 'hidden' }}>
                      {/* obecni */}
                      <Box sx={{ flex: 3, backgroundColor: '#4caf50', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="caption" fontWeight="bold" color="white">
                          3
                        </Typography>
                      </Box>

                      {/* spoznieni */}
                      <Box sx={{ flex: 2, backgroundColor: '#ffb300', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="caption" fontWeight="bold" color="white">
                          2
                        </Typography>
                      </Box>

                      {/* nieobecni */}
                      <Box sx={{ flex: 1, backgroundColor: '#ef5350', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="caption" fontWeight="bold" color="white">
                          1
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                    <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
                    <Typography variant="body2" fontWeight="500">
                      {lesson.startTime} - {lesson.endTime}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                    <GroupIcon fontSize="small" sx={{ mr: 1 }} />
                    <Typography variant="body2" fontWeight="500">
                      Students expected: {lesson.studentCount}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Box>

        {/* prawa kolumna 25% */}
        <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '25%' }, gap: 3 }}>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, overflow: 'hidden' }}>
              Announcements
            </Typography>
            <Box sx={{ p: 1.5, backgroundColor: 'rgba(90, 103, 216, 0.1)', borderRadius: 1, borderLeft: '4px solid #90D5FF' }}>
              <Typography variant="body2">Staff meeting today at 14:00.</Typography>
            </Box>
          </Paper>

          <Paper elevation={1} sx={{ p: 3, borderRadius: 2, flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Checklist
            </Typography>

            <Button variant="contained" fullWidth startIcon={<AddIcon />} onClick={OpenPopUp} sx={{ mb: 3 }}>
              Add note
            </Button>

            <Box
              component="ul"
              sx={{
                pl: 2,
                m: 0,
                maxHeight: '300px',
                overflowY: 'auto',

                '&::-webkit-scrollbar': { width: '6px' },
                '&::-webkit-scrollbar-thumb': { background: '#cbd5e1', borderRadius: '4px' },
              }}
            >
              {notes.length === 0 ? (
                <Typography
                  component="li"
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, ml: -3, listStyle: 'none', textAlign: 'center' }}
                >
                  Your checklist is empty.
                </Typography>
              ) : (
                notes.map((note, index) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={index}
                    sx={{
                      py: 1,
                      wordBreak: 'break-word',
                      borderBottom: index < notes.length - 1 ? '1px solid #acafb3' : 'none',
                    }}
                  >
                    {note}
                  </Typography>
                ))
              )}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
