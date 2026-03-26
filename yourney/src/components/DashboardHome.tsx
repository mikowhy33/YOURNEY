import { Box, Button, Divider, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { PopUpComponent } from './reusableComponents/Popup';
import { mockLessons } from '../mocks/lessonMock';

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
        <Box sx={{ width: { xs: '100%', md: '75%' }, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" >
              Hello User
            </Typography>
            <Typography variant="body1" color="text.secondary">
              [Docelowo nazwa nauczyciela/managera/ucznia z serwera]
            </Typography>
          </Box>

          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Today's Schedule
          </Typography>

          {mockLessons.map((lesson, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                mb: 3,
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 },
              }}
            >
              <Box sx={{ p: 2.5, backgroundColor: 'primary.main' }}>
                <Typography variant="h6" fontWeight="bold">
                  {lesson.topic}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, opacity: 0.9 }}>
                  <RoomIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">{lesson.room}</Typography>
                </Box>
              </Box>

              <Box
                sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                  <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body2" fontWeight="500">
                    {lesson.startTime} - {lesson.endTime}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                  <GroupIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body2" fontWeight="500">
                    Students: {lesson.studentCount}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
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

            <List disablePadding>
              {notes.length === 0 ? (
                <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 2 }}>
                  Your checklist is empty.
                </Typography>
              ) : (
                notes.map((note, index) => (
                  <Box key={index}>
                    <ListItem disableGutters sx={{ py: 1 }}>
                      <ListItemText primary={note}  sx={{ wordBreak: 'break-word', m: 0 }} />
                    </ListItem>
                    {index < notes.length - 1 && <Divider />}
                  </Box>
                ))
              )}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
