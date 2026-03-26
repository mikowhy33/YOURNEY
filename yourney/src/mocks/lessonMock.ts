
export type Student = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Lesson = {
  id: string;
  topic: string;
  room: string;
  startTime: string; 
  endTime: string;
  studentCount: number;
  students: Student[];
};

// mockowe dane lekcji
export const mockLessons: Lesson[] = [
  {
    id: "L-001",
    topic: "Introduction Into Python",
    room: "Snake-Lab (A-12)",
    startTime: "15:30",
    endTime: "17:00",
    studentCount: 4,
    students: [
      { id: "S-101", firstName: "Jan", lastName: "Kowalski" },
      { id: "S-102", firstName: "Zofia", lastName: "Nowak" },
      { id: "S-103", firstName: "Kacper", lastName: "Wiśniewski" },
      { id: "S-104", firstName: "Maja", lastName: "Wójcik" }
    ]
  },
  {
    id: "L-002",
    topic: "Programming In Minecraft: Redstone Logic",
    room: "Nether-Lab (B-05)",
    startTime: "17:15",
    endTime: "18:45",
    studentCount: 6,
    students: [
      { id: "S-105", firstName: "Antoni", lastName: "Kowalczyk" },
      { id: "S-106", firstName: "Julia", lastName: "Kamińska" },
      { id: "S-107", firstName: "Filip", lastName: "Lewandowski" },
      { id: "S-108", firstName: "Hanna", lastName: "Zielińska" },
      { id: "S-109", firstName: "Szymon", lastName: "Szymański" },
      { id: "S-110", firstName: "Alicja", lastName: "Dąbrowska" }
    ]
  },
  {
    id: "L-003",
    topic: "Games creation in Roblox Studio",
    room: "Roblox-Cave (C-01)",
    startTime: "19:00",
    endTime: "20:30",
    studentCount: 3,
    students: [
      { id: "S-111", firstName: "Oliwier", lastName: "Kozłowski" },
      { id: "S-112", firstName: "Lena", lastName: "Jankowska" },
      { id: "S-113", firstName: "Igor", lastName: "Mazur" }
    ]
  }
];