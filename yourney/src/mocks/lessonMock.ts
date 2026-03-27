export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  attendance?: string | null;
};

export type Lesson = {
  id: string;
  topic: string;
  room: string;
  startTime: string;
  endTime: string;
  studentCount: number;
  status: LessonStatus;
  students: Student[];
};

export type LessonStatus = 'UPCOMING' | 'COMPLETED' | 'CANCELLED';

// mockowe dane lekcji
export const mockLessons: Lesson[] = [
  {
    id: 'L-001',
    topic: 'Introduction Into Python',
    room: 'Snake-Lab (A-12)',
    startTime: '15:30',
    endTime: '17:00',
    studentCount: 4,
    status: 'COMPLETED',
    students: [
      { id: 'S-101', firstName: 'Jan', lastName: 'Kowalski', attendance: null },
      { id: 'S-102', firstName: 'Zofia', lastName: 'Nowak', attendance: null },
      { id: 'S-103', firstName: 'Kacper', lastName: 'Wiśniewski', attendance: null },
      { id: 'S-104', firstName: 'Maja', lastName: 'Wójcik', attendance: null },
    ],
  },
  {
    id: 'L-002',
    topic: 'Programming In Minecraft: Redstone Logic',
    room: 'Nether-Lab (B-05)',
    startTime: '17:15',
    endTime: '18:45',
    studentCount: 6,
    status: 'UPCOMING',
    students: [
      { id: 'S-105', firstName: 'Antoni', lastName: 'Kowalczyk', attendance: null },
      { id: 'S-106', firstName: 'Julia', lastName: 'Kamińska', attendance: null },
      { id: 'S-107', firstName: 'Filip', lastName: 'Lewandowski', attendance: null },
      { id: 'S-108', firstName: 'Hanna', lastName: 'Zielińska', attendance: null },
      { id: 'S-109', firstName: 'Szymon', lastName: 'Szymański', attendance: null },
      { id: 'S-110', firstName: 'Alicja', lastName: 'Dąbrowska', attendance: null },
      { id: 'S-105', firstName: 'Antoni', lastName: 'Kowalczyk', attendance: null },
      { id: 'S-106', firstName: 'Julia', lastName: 'Kamińska', attendance: null },
      { id: 'S-107', firstName: 'Filip', lastName: 'Lewandowski', attendance: null },
      { id: 'S-108', firstName: 'Hanna', lastName: 'Zielińska', attendance: null },
      { id: 'S-109', firstName: 'Szymon', lastName: 'Szymański', attendance: null },
      { id: 'S-110', firstName: 'Alicja', lastName: 'Dąbrowska', attendance: null },
    ],
  },
  {
    id: 'L-003',
    topic: 'Games creation in Roblox Studio',
    room: 'Roblox-Cave (C-01)',
    startTime: '19:00',
    endTime: '20:30',
    studentCount: 3,
    status: 'CANCELLED',
    students: [
      { id: 'S-111', firstName: 'Oliwier', lastName: 'Kozłowski', attendance: null },
      { id: 'S-112', firstName: 'Lena', lastName: 'Jankowska', attendance: null },
      { id: 'S-113', firstName: 'Igor', lastName: 'Mazur', attendance: null },
    ],
  },
];
