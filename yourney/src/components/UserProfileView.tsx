import { Box, Typography, Avatar, Chip, Paper, Divider } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { useState } from 'react';

export const UserProfileView = () => {
  // MOZLIWE ZE TEN STAN DLA ZAKLADEK SKASOWANY BO ICH W PRZYSZLOSCI NIE BEDZIE!
  const [activeTab, setActiveTab] = useState('Profile');
  const tabs = ['Profile', 'Attachments', 'Related contacts'];

  // Mockowane dane (docelowo z RTK Query z endpointu /api/users/{id}!!)
  const userData = {
    firstName: 'Jane',
    lastName: 'Doe',
    role: 'Teacher',
    gender: 'Female',
    age: '31 years old',
    phone: '123456789',
    email: 'jane@yourney.com',
    status: 'Programming Teacher',
    address: "007 portland's 12/23 Ireland",
    subject: 'Programming in javascript',
    level: 'Intermediate Teacher',
    source: 'Referred by a friend',
    dob: '03-09-1995',
    availability: 'Mondays, Tuesdays',
    notes: "Good with teaching teenagers, doesn't like working with children below 9 year's old.",
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, flexGrow: 1 }}>
      {/*  Gorna sekcja */}
      <Box
        sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: 3, mb: 4 }}
      >
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <Avatar sx={{ width: 80, height: 80, backgroundColor: '#f87171', fontSize: '2rem' }}>
            {userData.firstName[0]}
            {userData.lastName[0]}
          </Avatar>

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <Typography variant="h5" fontWeight="bold">
                {userData.firstName} {userData.lastName}
              </Typography>
              <Chip
                label={userData.role}
                size="small"
                sx={{ backgroundColor: '#f1f5f9', color: '#64748b', fontWeight: 'bold', height: '20px', fontSize: '11px' }}
              />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, color: 'text.secondary', fontSize: '14px' }}>
              <Typography variant="body2">{userData.gender}</Typography>
              <Typography variant="body2">{userData.age}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', gap: 0.5 }}>
                <PhoneOutlinedIcon sx={{ fontSize: 16 }} /> {userData.phone}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', gap: 0.5 }}>
                <EmailOutlinedIcon sx={{ fontSize: 16 }} /> {userData.email}
              </Box>
              <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
              <Typography variant="body2" fontWeight="bold" color="text.primary">
                Status: {userData.status}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* NAWIGACJA, NIE WIEM CZY COS TU BEDZIE CZY NIE, NA RAZIE TAK ZOSTAJE Z ZAKLADKAMI DODATKOWYMI */}
      <Box sx={{ display: 'flex', gap: 4, borderBottom: '1px solid #e2e8f0', mb: 3, maxWidth: '1800px' }}>
        {tabs.map((tab) => (
          <Box
            key={tab}
            onClick={() => setActiveTab(tab)}
            sx={{
              pb: 1.5,
              cursor: 'pointer',
              color: activeTab === tab ? 'primary.main' : 'text.secondary',
              borderBottom: activeTab === tab ? '2px solid' : '2px solid transparent',
              borderColor: activeTab === tab ? 'primary.main' : 'transparent',
              fontWeight: activeTab === tab ? 'bold' : 'medium',
              transition: 'all 0.2s ease',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 'inherit' }}>
              {tab}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* glowna karta*/}
      <Paper elevation={1} sx={{ border: '1px solid #e2e8f0', borderRadius: 2, p: 4, mb: 4, maxWidth: '1800px' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, rowGap: 4 }}>
          <Box sx={{ width: '100%' }}>
            <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
              Address
            </Typography>
            <Typography variant="body2">{userData.address}</Typography>
          </Box>
          {/* 3 rowne kolumny od sm */}
          <Box sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' } }}>
            <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
              Subject
            </Typography>
            <Typography variant="body2">{userData.subject}</Typography>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' } }}>
            <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
              Level
            </Typography>
            <Typography variant="body2">{userData.level}</Typography>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' } }}>
            <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
              Source (Initial Referrer)
            </Typography>
            <Typography variant="body2">{userData.source}</Typography>
          </Box>
          {/* drugi wiersz */}
          <Box sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' } }}>
            <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
              Date of birth
            </Typography>
            <Typography variant="body2">{userData.dob}</Typography>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' } }}>
            <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
              Availability
            </Typography>
            <Typography variant="body2">{userData.availability}</Typography>
          </Box>

          <Box sx={{ width: '100%' }}>
            <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
              General notes
            </Typography>
            <Typography variant="body2">{userData.notes}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
