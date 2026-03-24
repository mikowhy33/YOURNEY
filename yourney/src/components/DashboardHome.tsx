import { Box, Button, Divider, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { PopUpComponent } from './reusableComponents/Popup';

export const DashboardHome = () => {
  const [popUpOpened, setPopUpOpened] = useState<boolean>(false);

  const [notes, setNotes] = useState<string[]>([]); // docelowo przechowywane na serwerze

  const OpenPopUp = () => {
    setPopUpOpened(true);
  };

  const ClosePopUp = () => {
    setPopUpOpened(false);
  };

  const handleAddNote = (note: string) => {
    setNotes((prev) => [...prev, note]);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
      {popUpOpened === true ? <PopUpComponent hidePopUp={ClosePopUp} addNote={handleAddNote}></PopUpComponent> : null}

      <Typography variant="body1">Hello User</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, gap: 2 }}>
        {/* main 80% */}
        <Box sx={{ width: '80%', backgroundColor: 'blue', borderRadius: 1, p: 2 }}>
          <Typography color="white">Glowne komponenty.</Typography>
        </Box>

        {/* sidebar 20% */}
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%', gap: 2 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Announcements
            </Typography>
            <Typography variant="body2">Announcment 1</Typography>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ pb: 2 }}>
              Checklist
            </Typography>
            <Button onClick={() => OpenPopUp()} sx={{ backgroundColor: '#5a67d8', color: '#ffffff', textTransform: 'none' }}>
              Add a note to the checklist
            </Button>

            <List disablePadding>
              {notes.map((note, index) => (
                <Box key={index}>
                  <ListItem disableGutters>
                    <ListItemText primary={note} sx={{ wordBreak: 'break-word' }} />
                  </ListItem>

                  {index < notes.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
