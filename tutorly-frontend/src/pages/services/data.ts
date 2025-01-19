export interface Service {
  id: string
  subject: string
  level: string
  about: string
  videoUrl: string
  pricePerHour: number
  provider: string
  benefits: string[]
  successRate: number
  ageRange: string
  duration: string
  prerequisites: string[]
  curriculum: string[]
  testimonials: {
    text: string
    author: string
    rating: number
  }[]
}

export const services: Service[] = [
  {
    id: "math-elementary",
    subject: "Mathematics",
    level: "Elementary",
    about: "Fun and interactive math lessons for elementary school children, focusing on building a strong foundation in arithmetic and problem-solving skills.",
    videoUrl: "https://example.com/math-elementary-intro",
    pricePerHour: 25,
    provider: "KidsMath Academy",
    benefits: [
      "Interactive online exercises",
      "Real-world math applications",
      "Progress tracking for parents",
      "Personalized learning path"
    ],
    successRate: 95,
    ageRange: "6-11 years",
    duration: "Ongoing, 1-hour sessions",
    prerequisites: ["Basic counting skills", "Familiarity with numbers up to 100"],
    curriculum: [
      "Addition and subtraction",
      "Multiplication and division",
      "Fractions introduction",
      "Geometry basics",
      "Word problems"
    ],
    testimonials: [
      {
        text: "My daughter's confidence in math has skyrocketed!",
        author: "Sarah P., Parent",
        rating: 5
      },
      {
        text: "The interactive exercises make learning math fun for my son.",
        author: "Michael R., Parent",
        rating: 4.5
      }
    ]
  },
  {
    id: "science-middle",
    subject: "Science",
    level: "Middle School",
    about: "Engaging science program covering biology, chemistry, and physics for middle school students. Includes virtual lab experiments and project-based learning.",
    videoUrl: "https://example.com/science-middle-intro",
    pricePerHour: 30,
    provider: "Young Einsteins Science Club",
    benefits: [
      "Virtual lab experiments",
      "Project-based learning",
      "Science fair support",
      "STEM career exploration"
    ],
    successRate: 92,
    ageRange: "11-14 years",
    duration: "12-week program, 2-hour sessions weekly",
    prerequisites: ["Basic math skills", "Curiosity about the natural world"],
    curriculum: [
      "Scientific method",
      "Cell biology and genetics",
      "Chemical reactions and elements",
      "Forces and motion",
      "Earth and space science"
    ],
    testimonials: [
      {
        text: "The virtual labs are amazing! My kid loves doing experiments from home.",
        author: "Lisa M., Parent",
        rating: 5
      },
      {
        text: "Great preparation for high school science courses.",
        author: "David K., Parent",
        rating: 4.8
      }
    ]
  },
  {
    id: "english-literature",
    subject: "English Literature",
    level: "High School",
    about: "Comprehensive English literature course for high school students, focusing on critical analysis, writing skills, and appreciation of classic and contemporary works.",
    videoUrl: "https://example.com/english-lit-intro",
    pricePerHour: 35,
    provider: "Wordsmith Academy",
    benefits: [
      "In-depth text analysis",
      "Essay writing workshops",
      "Vocabulary enhancement",
      "Public speaking opportunities"
    ],
    successRate: 88,
    ageRange: "14-18 years",
    duration: "Semester-long, 90-minute sessions twice weekly",
    prerequisites: ["Basic reading and writing skills", "Interest in literature"],
    curriculum: [
      "Shakespeare's plays",
      "American literature classics",
      "Poetry analysis",
      "Comparative literature",
      "Modern and contemporary fiction"
    ],
    testimonials: [
      {
        text: "My son's writing has improved dramatically. Great for college prep!",
        author: "Jennifer L., Parent",
        rating: 4.7
      },
      {
        text: "The discussions are thought-provoking and engaging.",
        author: "Robert T., Student",
        rating: 4.9
      }
    ]
  }
]



