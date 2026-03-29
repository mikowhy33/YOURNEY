import {
  Box,
  Typography,
  Button,
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilterListIcon from '@mui/icons-material/FilterList';
import { allStudents } from '../mocks/AllStudentsMock';

import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { Chip } from '@mui/material';
import { useState } from 'react';

// DLA MANAGERA SZKOLY BEDZIE INNY WIDOK, BEDZIE MOGL WIECEJ RZECZY EDYTOWAC!
export const StudentCrmView = () => {
  const [activeTab, setActiveTab] = useState('Students');

  // input wyszukarki stan
  const [searchQuery, setSearchQuery] = useState('');

  // filtrowanie
  const filteredStudents = allStudents.filter((student) => {
    // jak input pusty defaultowo cala lista
    if (searchQuery.trim() === '') return true;

    const lowerCaseQuery = searchQuery.toLowerCase();

    // object.values wyciaga wszystko some sprawdza czy jakiekolwiek pole ma to co wpisane
    return Object.values(student).some((value) =>
      // zabezpieczenie na platnosci o ile zdecydujemy sie zrobic
      String(value).toLowerCase().includes(lowerCaseQuery),
    );
  });

  const navTabs = [
    { id: 'Students', label: 'Students', icon: <PeopleOutlinedIcon fontSize="small" />, count: 13 },
    { id: 'Teachers', label: 'Teachers', icon: <SchoolOutlinedIcon fontSize="small" />, count: 4 },
    { id: 'Managers', label: 'Managers', icon: <AssignmentIndOutlinedIcon fontSize="small" />, count: 2 },
  ];

  // symulacja zmiany kogo dane pobieramy, tu strzal do serwera
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    console.log(`Teraz serwer szuka danych dla: ${tabId}...`);
    // refetch z rtk query
  };

  return (
    <Box sx={{ p: 3, flexGrow: 1 }}>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          mb: 2,
          ml: 1,
          overflowX: 'auto',
        }}
      >
        {navTabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <Box
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                pb: 1.5,
                cursor: 'pointer',
                color: isActive ? 'primary.main' : 'text.secondary',

                borderBottom: isActive ? '2px solid' : 'transparent',
                borderColor: isActive ? 'primary.main' : 'transparent',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: isActive ? 'primary.main' : 'text.primary',
                },
              }}
            >
              {/* IKONKA */}
              {tab.icon}

              {/* TEKST */}
              <Typography variant="subtitle2" fontWeight={isActive ? 'bold' : 'medium'}>
                {tab.label}
              </Typography>

              {tab.count !== undefined && (
                <Chip
                  label={tab.count}
                  size="small"
                  sx={{
                    height: '20px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    backgroundColor: isActive ? 'primary.main' : 'transparent',
                    color: isActive ? 'white' : 'text.secondary',
                    border: isActive ? 'none' : '1px solid #e2e8f0',
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          mb: 3,
          flexWrap: 'wrap',
          gap: 2,
          p: 3,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h5" fontWeight="bold">
              13 Students
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" sx={{ borderColor: '#e2e8f0', color: 'text.primary', backgroundColor: '#ffffff' }}>
              Export
            </Button>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add student
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
            gap: 2,
          }}
        >
          <TextField
            placeholder="Search across all fields..."
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: { xs: '100%', md: '300px' }, backgroundColor: '#f8fafc' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {/* na razie mockup moze usuniete, moze zostanie nie wiem */}
            <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' }, mr: 2 }}>
              Teacher: All | Classes: All | Status: Live
            </Typography>
            <IconButton size="small" sx={{ border: '1px solid #e2e8f0', borderRadius: 1 }}>
              <FilterListIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* TABELA DANYCH */}
        <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: 2 }}>
          <Table aria-label="student crm table">
            {/* NAGLOWKI TABELI */}
            <TableHead sx={{ backgroundColor: '#f8fafc' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', borderBottom: '2px solid #e2e8f0' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', borderBottom: '2px solid #e2e8f0' }}>Phone</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', borderBottom: '2px solid #e2e8f0' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', borderBottom: '2px solid #e2e8f0' }}>
                  Registration date
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', borderBottom: '2px solid #e2e8f0' }}>Date of birth</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', borderBottom: '2px solid #e2e8f0' }}>City</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: 'text.secondary', borderBottom: '2px solid #e2e8f0' }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            {/* DANE Z SERWERA / MOCKOW */}
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow
                  key={student.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: '#f8fafc' } }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ width: 32, height: 32 }} />
                      <Box>
                        <Typography variant="body2" fontWeight="bold" color="primary.main">
                          {student.firstName} {student.lastName}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">{student.phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{student.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{student.regDate}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{student.dob}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">{student.city || '-'}</Typography>
                  </TableCell>

                  {/*  AKCJE (Trzy kropki) jeszcze nie zdecydowalem co tu bedzie*/}
                  <TableCell align="center">
                    <IconButton size="small" sx={{ border: '1px solid #e2e8f0', borderRadius: 1 }}>
                      <MoreHorizIcon fontSize="small" color="action" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
