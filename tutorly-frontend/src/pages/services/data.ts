export interface Service {
    id: string
    subject: string
    about: string
    videoUrl: string
    priceMin: number
    provider: string
    benefits: string[]
    successRate: number
    targetScore: number
    duration: string
    prerequisites: string[]
    curriculum: string[]
    testimonials: {
      text: string
      author: string
      score: number
    }[]
  }
  
  export const services: Service[] = [
    {
      id: "ielts-academic",
      subject: "IELTS Academic",
      about: "Comprehensive IELTS Academic preparation course designed to help students achieve their target band score.",
      videoUrl: "https://example.com/ielts-academic-intro",
      priceMin: 299,
      provider: "Global IELTS Experts",
      benefits: [
        "Personalized study plans",
        "Weekly mock tests",
        "One-on-one speaking practice",
        "Detailed writing feedback"
      ],
      successRate: 92,
      targetScore: 7.5,
      duration: "12 weeks",
      prerequisites: [
        "Intermediate English level (B1)",
        "Minimum age 16"
      ],
      curriculum: [
        "Listening strategies and practice",
        "Reading comprehension techniques",
        "Academic writing tasks 1 & 2",
        "Speaking confidence building"
      ],
      testimonials: [
        {
          text: "Improved from band 6.0 to 7.5 in just 8 weeks!",
          author: "Sarah Chen",
          score: 7.5
        },
        {
          text: "The writing feedback was incredibly detailed and helpful.",
          author: "Mohammed Ali",
          score: 8.0
        }
      ]
    },
    {
      id: "ielts-general",
      subject: "IELTS General Training",
      about: "Practical IELTS preparation focused on general English skills for work and migration purposes.",
      videoUrl: "https://example.com/ielts-general-intro",
      priceMin: 249,
      provider: "IELTS Masters",
      benefits: [
        "Flexible scheduling",
        "Real-life language practice",
        "Immigration consulting",
        "Job interview preparation"
      ],
      successRate: 88,
      targetScore: 7.0,
      duration: "10 weeks",
      prerequisites: [
        "Basic English level (A2)",
        "Minimum age 16"
      ],
      curriculum: [
        "General listening skills",
        "Reading for everyday contexts",
        "Letter writing and essays",
        "Speaking for daily situations"
      ],
      testimonials: [
        {
          text: "Successfully achieved the score needed for my visa application!",
          author: "John Smith",
          score: 7.0
        }
      ]
    }
  ]
  
  