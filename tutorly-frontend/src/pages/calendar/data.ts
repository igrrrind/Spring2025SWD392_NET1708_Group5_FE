export interface ClassSchedule {
    id: string;
    classCode: string;
    date: string;
    startTime: string;
    endTime: string;
  }
  
  export const classSchedules: ClassSchedule[] = [
    {
      id: "1",
      classCode: "MATH101",
      date: "2025-01-05",
      startTime: "14:00",
      endTime: "15:30"
    },
    {
      id: "2",
      classCode: "ENG202",
      date: "2025-01-07",
      startTime: "10:00",
      endTime: "11:30"
    },
    {
      id: "3",
      classCode: "PHYS301",
      date: "2025-01-12",
      startTime: "13:00",
      endTime: "14:30"
    },
    {
      id: "4",
      classCode: "CHEM101",
      date: "2025-01-15",
      startTime: "09:00",
      endTime: "10:30"
    },
    {
      id: "5",
      classCode: "BIO201",
      date: "2025-01-20",
      startTime: "11:00",
      endTime: "12:30"
    },
    {
      id: "6",
      classCode: "MATH101",
      date: "2025-01-22",
      startTime: "14:00",
      endTime: "15:30"
    },
    {
      id: "7",
      classCode: "ENG202",
      date: "2025-01-25",
      startTime: "10:00",
      endTime: "11:30"
    },
    {
      id: "8",
      classCode: "PHYS301",
      date: "2025-01-28",
      startTime: "13:00",
      endTime: "14:30"
    }
  ];
  
  