import { Box, Typography, Paper, Avatar, Button, Divider } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


// TEN WIDOK TYLKO DLA UCZNIA/RODZICA. NIE DLA NAUCZYCIELA/ MANAGERA!!

export const StudentDashboardView = () => {
  // bedzie brane z serwera dla danego ucznia
  const attendanceMock = { present: 30, absent: 50, late: 20 };
  const absentEnd = attendanceMock.absent;
  const lateEnd = absentEnd + attendanceMock.late;

  return (
    <Box
      sx={{
        display: 'flex',
        p: 5,
        flexGrow: 1,
        backgroundColor: 'primary.background.default',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: 3,
      }}
    >
      {/*  lewa kolumna szersza */}
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* gorny rzad uwagi negatywne/pozytywne */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* wykres obecnosci dla danego ucznia */}
          <Paper
            elevation={1}
            sx={{ flex: 1, p: 3, borderRadius: 3, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}
          >
            <Typography variant="subtitle1" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <InsertInvitationOutlinedIcon fontSize="small" color="primary" /> Attendance
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, mb: 2 }}>
              {/* chwilowe rozwiazanie, potem kolory beda zalezne/brane z serwera */}
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  background: `conic-gradient(
                    #f43f5e 0% ${absentEnd}%, 
                    #fbbf24 ${absentEnd}% ${lateEnd}%, 
                    #10b981 ${lateEnd}% 100%
                  )`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ width: 110, height: 110, backgroundColor: 'white', borderRadius: '50%' }} />
              </Box>
            </Box>

            {/* legenda z procentami */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981' }} />{' '}
                <Typography>{`Present ${attendanceMock.present}%`} </Typography>
              </Typography>
              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#f43f5e' }} />{' '}
                <Typography>{`Absent ${attendanceMock.absent}%`}</Typography>
              </Typography>
              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#fbbf24' }} />{' '}
                <Typography>{`Late ${attendanceMock.late}%`}</Typography>
              </Typography>
            </Box>
          </Paper>

          {/* pochwaly/uwagi DODAC NA CLICKA POPUP Z KONKRETNYMI INFORMACJAMI WS POCHWAL/UWAG */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: '#fef08a',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <StarOutlineIcon sx={{ mb: 1, color: '#ca8a04' }} />
              <Typography variant="subtitle2" fontWeight="bold" color="#854d0e">
                Positive remarks:
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="#713f12">
                4
              </Typography>
            </Paper>

            <Paper
              elevation={1}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: '#fecdd3',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <OutlinedFlagIcon sx={{ mb: 1, color: '#e11d48' }} />
              <Typography variant="subtitle2" fontWeight="bold" color="#9f1239">
                Areas for improvement:
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="#881337">
                1
              </Typography>
            </Paper>
          </Box>
        </Box>

        {/* DOLNY RZĄD: Lista Lekcji */}
        <Paper elevation={1} sx={{ p: 3, borderRadius: 3, border: '1px solid #e2e8f0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MenuBookOutlinedIcon fontSize="small" color="primary" /> Lessons
            </Typography>
            <Button size="small" sx={{ textTransform: 'none' }}>
              View all lessons in calendar
            </Button>
          </Box>

          {/* Zakładki */}
          <Box sx={{ display: 'flex', gap: 3, borderBottom: '1px solid #e2e8f0', mb: 3 }}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="primary.main"
              sx={{ borderBottom: '2px solid', pb: 1, cursor: 'pointer' }}
            >
              Upcoming lessons
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ pb: 1, cursor: 'pointer' }}>
              Past lessons
            </Typography>
          </Box>

          {/* Karta pojedynczej lekcji */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderLeft: '4px solid #ef4444',
              backgroundColor: '#ffffff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              borderRadius: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                08-01-2026
              </Typography>
              <Typography variant="body2" fontWeight="bold" mt={0.5}>
                9:00 - 10:15
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, ml: 4 }}>
              <Typography variant="subtitle2" fontWeight="bold">
                English
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <LocationOnOutlinedIcon fontSize="inherit" /> Computer Lab
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Donna Swanson
              </Typography>
              <Avatar sx={{ width: 24, height: 24 }} />
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* prawa kolumna wezsza */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Ogłoszenia */}
        <Paper elevation={1} sx={{ p: 3, borderRadius: 3, border: '1px solid #e2e8f0' }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <CampaignOutlinedIcon fontSize="small" color="primary" /> Announcements for students
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[1, 2, 3].map((item) => (
              <Box key={item}>
                {/* <Typography variant="subtitle2" color="primary.main" cursor="pointer">Office Hours Update</Typography> */}
                <Typography variant="caption" color="text.secondary" display="flex" alignItems="center" gap={1} mt={0.5}>
                  <Avatar sx={{ width: 16, height: 16, fontSize: '9px', backgroundColor: '#10b981' }}>AT</Avatar>
                  From Abs Test on 04-01-2026 0:00
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Zapisane klasy */}
        <Paper elevation={1} sx={{ p: 3, borderRadius: 3, border: '1px solid #e2e8f0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MenuBookOutlinedIcon fontSize="small" color="primary" /> Enrolled classes
            </Typography>
            <Button size="small" sx={{ textTransform: 'none' }}>
              View all
            </Button>
          </Box>

          {/* Nagłówki tabelki */}
          <Box sx={{ display: 'flex', backgroundColor: '#f8fafc', p: 1, borderRadius: 1, mb: 2 }}>
            <Typography variant="caption" fontWeight="bold" sx={{ flex: 1, color: 'text.secondary' }}>
              Class
            </Typography>
            <Typography variant="caption" fontWeight="bold" sx={{ flex: 1, color: 'text.secondary' }}>
              Recurring day/time
            </Typography>
          </Box>

          {/* Wiersz z klasą */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <Typography variant="subtitle2" color="primary.main" fontWeight="bold">
                English
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">Monday (12:00-13:15),</Typography>
              <Typography variant="body2">
                Tuesday (12:00-13:15) and <span style={{ color: '#3b82f6' }}>5 more</span>
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1.5 }} />

          {/* Kolejny Wiersz */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#ec4899', mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle2" color="primary.main" fontWeight="bold">
                  Spanish
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Level 1
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">Monday (16:00-17:00),</Typography>
              <Typography variant="body2">
                Tuesday (16:00-17:00) and <span style={{ color: '#3b82f6' }}>3 more</span>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
