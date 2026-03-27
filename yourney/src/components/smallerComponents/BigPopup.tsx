import { Dialog, DialogContent, Box, Typography, Avatar, IconButton, Button, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RoomIcon from '@mui/icons-material/Room';
import EditIcon from '@mui/icons-material/Edit';
import BoltIcon from '@mui/icons-material/Bolt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import type { Lesson, Student } from '../../mocks/lessonMock';
import AddIcon from '@mui/icons-material/Add';
type BigPopUpProps = {
  lessonData: Lesson;
  hidePopUp: () => void;
};

export const BigPopUpComponent = ({ hidePopUp, lessonData }: BigPopUpProps) => {
  // czy manager bedzie brane z serwera, w zaleznosci od tego, beda inne rzeczy dostepne
  const ismanager: boolean = false;

  // gdy nauczyciel wezmie z dysku tego pdfa
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // tylko jeden plik na razie
    const file = event.target.files?.[0];
    if (!file) return;

    console.log('nazwa', file.name, 'rozmiar:', file.size);

    // Tworzymy paczkę z danymi, którą ZROZUMIE serwer Twojego ziomala
    const formData = new FormData();
    formData.append('attachment', file); // attachment nazwa pola dla kuby, po stronie backendu

    // serwer musi wiedziec do ktorej lecji to wbic
    formData.append('lessonId', lessonData.id);
  };

  return (
    <Dialog
      open={true}
      onClose={hidePopUp}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          height: '90vh',
          backgroundColor: '#f8fafc',
        },
      }}
      slotProps={{
        backdrop: {
          sx: { backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)' },
        },
      }}
    >
      {/* Naglowek */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        {/* lewa strona naglowka */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Typography variant="h6" fontWeight="bold">
              {lessonData?.startTime} - {lessonData?.endTime}
            </Typography>
            <Typography variant="h6" color="primary.main" fontWeight="bold">
              {lessonData?.topic}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text.secondary', fontSize: '14px' }}>
            <Typography variant="body2">05-01-2026</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RoomIcon sx={{ fontSize: 16, mr: 0.5 }} /> {lessonData?.room}
            </Box>
          </Box>
        </Box>

        {/* prawa strona naglowka */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 4 }}>
          {' '}
          <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="subtitle2" color="primary.main" fontWeight="bold">
              Jonathan Marks
            </Typography>
          </Box>
          <Avatar sx={{ width: 40, height: 40, display: { xs: 'none', sm: 'flex' } }} />
        </Box>

        {/*  IKS  */}
        <IconButton
          onClick={hidePopUp}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: 'text.secondary',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* glowna zawartosc */}
      <DialogContent sx={{ p: 0, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* LEWA KOLUMNA */}
        <Box sx={{ flex: 3, p: 3, overflowY: { md: 'auto' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Students
            </Typography>

            <Chip
              label={lessonData?.students?.length || 0}
              size="small"
              sx={{ backgroundColor: 'rgba(90, 103, 216, 0.1)', color: 'primary.main', fontWeight: 'bold' }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            {lessonData?.students?.map((student: Student, index: number) => {
              // Sprytna funkcja do kolorowania statusów!
              const getAttendanceStyle = (status: string) => {
                switch (status) {
                  case 'Present':
                    return { bg: '#bbf7d0' };
                  case 'Late':
                    return { bg: '#fef08a' };
                  case 'Absent':
                    return { bg: '#f89da7' };
                  default:
                    return { bg: '#e2e8f0' };
                }
              };

              //na start wszyscy NIEobecni, nauczyciel moze sobie zmienic obecnosc, wtedy do serwera idzie info
              const aStyle = getAttendanceStyle(student.attendance || 'Absent');

              return (
                <Box
                  key={index}
                  sx={{
                    width: { xs: '100%', sm: 'calc(50% - 8px)' },
                    backgroundColor: '#ffffff',
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Avatar sx={{ width: 48, height: 48 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {student.firstName || "Student's Name"} {student.lastName || "Student's surname"}
                      </Typography>

                      <Box
                        sx={{
                          backgroundColor: aStyle.bg,
                          color: 'black',
                          px: 3,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: '12px',
                          fontWeight: 'bold',
                          mt: 0.5,
                          textAlign: 'center',
                          maxWidth: 93,
                        }}
                      >
                        {student.attendance || 'Present'}
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                    <Button variant="outlined" size="small" sx={{ minWidth: '30px', p: 0.5 }}>
                      <EditIcon fontSize="small" />
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* PRAWA KOLUMNA  */}
        <Box sx={{ flex: 1, backgroundColor: '#ffffff', p: 3, borderLeft: { md: '1px solid #e2e8f0' } }}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight="bold"
            sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <EditIcon fontSize="small" /> <Typography>Edit</Typography>
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
            {ismanager ? (
              <Button
                variant="outlined"
                color="inherit"
                fullWidth
                sx={{ justifyContent: 'flex-start', color: 'text.primary', borderColor: '#e2e8f0' }}
              >
                Teacher
              </Button>
            ) : null}

            <Button
              variant="outlined"
              color="inherit"
              fullWidth
              startIcon={<CalendarMonthIcon fontSize="small" />}
              sx={{ justifyContent: 'flex-start', color: 'text.primary', borderColor: '#e2e8f0' }}
            >
              Date & time
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              fullWidth
              startIcon={<PlaceIcon />}
              sx={{ justifyContent: 'flex-start', color: 'text.primary', borderColor: '#e2e8f0' }}
            >
              Location
            </Button>
          </Box>

          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight="bold"
            sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <BoltIcon fontSize="small" /> <Typography>Actions</Typography>
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Button
              variant="outlined"
              color="inherit"
              fullWidth
              startIcon={<AddIcon />}
              sx={{ justifyContent: 'flex-start', color: 'text.primary', borderColor: '#e2e8f0' }}
            >
              Add students
            </Button>
            <Button
              component="label" // musi byc label aby ponizej polaczyc z niewidzialnym inputem i tam wgrac plik!
              variant="outlined"
              color="inherit"
              fullWidth
              startIcon={<AddIcon />}
              sx={{ justifyContent: 'flex-start', color: 'text.primary', borderColor: '#e2e8f0' }}
            >
              Add attachments
              {/* niewidzialny input polaczony z buttonem */}
              <input type="file" hidden accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
