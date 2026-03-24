import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box } from '@mui/material';
import { useState } from 'react';

type noteTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  conversation?: any; // CELOWE UZYCIE ANY, czekamy na backend
  addNote: (note: string) => void;
  hidePopUp: () => void;
};

export const PopUpComponent = ({ addNote, hidePopUp }: noteTypes) => {
  const [note, setNote] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleNoteForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!conversation) return;

    if (note.length < 4) {
      setError('Note is too short, an absolute minimum is 4 characters');
      return;
    }

    addNote(note);
    setNote('');
    hidePopUp();
  };

  return (
    <Dialog
      open={true}
      onClose={hidePopUp}
      PaperProps={{
        sx: {
          width: '400px',
          minHeight: '400px',
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
          },
        },
      }}
    >
      {/* Title */}
      <Box component="form" onSubmit={handleNoteForm} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <DialogTitle sx={{ textAlign: 'center' }}>Add a note for this conversation</DialogTitle>

        {/* Main */}
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', pt: 1 }}>
          <TextField
            label="Please insert your note below"
            multiline // textarea!
            rows={6}
            variant="outlined"
            fullWidth
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
              if (error) setError(null);
            }}
            error={!!error} // ramka czerwona
            helperText={error}
            sx={{ mt: 1 }}
          />
        </DialogContent>

        {/* Stopka */}
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button onClick={hidePopUp} sx={{ backgroundColor: '#F5F5F5', color: 'black', mr: 4 }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit your note
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
