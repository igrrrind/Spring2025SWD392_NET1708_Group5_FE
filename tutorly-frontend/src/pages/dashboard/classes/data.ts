export interface Student {
    id: string
    name: string
    email: string
  }
  
  export interface Lesson {
    id: string
    title: string
    date: string
    startTime: string
    endTime: string
    status: 'upcoming' | 'completed' | 'cancelled'
    topic: string
  }
  
  export interface Class {
    id: string
    name: string
    subject: string
    description: string
    classCode: string
    schedule: string
    startDate: string
    endDate: string
    students: Student[]
    lessons: Lesson[]
  }
  
  export const classes: Class[] = [
    {
      id: "cls-001",
      name: "Advanced Mathematics",
      subject: "Mathematics",
      description: "A comprehensive course covering advanced mathematical concepts including calculus, algebra, and trigonometry.",
      classCode: "MATH401",
      schedule: "Monday, Wednesday 4:00 PM - 5:30 PM",
      startDate: "2024-01-15",
      endDate: "2024-05-30",
      students: [
        { id: "std-001", name: "Alice Johnson", email: "alice@example.com" },
        
      ],
      lessons: [
        {
          id: "les-001",
          title: "Introduction to Calculus",
          date: "2024-01-15",
          startTime: "16:00",
          endTime: "17:30",
          status: "completed",
          topic: "Limits and Continuity"
        },
        {
          id: "les-002",
          title: "Derivatives",
          date: "2024-01-17",
          startTime: "16:00",
          endTime: "17:30",
          status: "completed",
          topic: "Rules of Differentiation"
        },
        {
          id: "les-003",
          title: "Applications of Derivatives",
          date: "2024-01-22",
          startTime: "16:00",
          endTime: "17:30",
          status: "upcoming",
          topic: "Rate of Change Problems"
        },
      ]
    },
    {
      id: "cls-002",
      name: "English Literature",
      subject: "English",
      description: "Explore classic and contemporary literature while developing critical analysis skills.",
      classCode: "ENG302",
      schedule: "Tuesday, Thursday 3:00 PM - 4:30 PM",
      startDate: "2024-01-16",
      endDate: "2024-05-31",
      students: [
        { id: "std-004", name: "David Wilson", email: "david@example.com" },
       
      ],
      lessons: [
        {
          id: "les-004",
          title: "Shakespeare's Macbeth",
          date: "2024-01-16",
          startTime: "15:00",
          endTime: "16:30",
          status: "completed",
          topic: "Act 1 Analysis"
        },
        {
          id: "les-005",
          title: "Character Development",
          date: "2024-01-18",
          startTime: "15:00",
          endTime: "16:30",
          status: "upcoming",
          topic: "Character Motivations and Conflicts"
        }
      ]
    }
  ]
  
  