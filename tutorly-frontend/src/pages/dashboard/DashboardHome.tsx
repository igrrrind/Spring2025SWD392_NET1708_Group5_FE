import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ChevronLeft, ChevronRight, School, Settings, Library, X, Video } from 'lucide-react'

export default function Dashboard() {
  const upcomingClasses = [
    { id: 1, title: "English Conversation", date: new Date(), isToday: true },
    { id: 2, title: "Grammar Basics", date: new Date(Date.now() + 86400000), isToday: false }, // Tomorrow
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-bold">Good evening, Win</h1>
          <p className="text-muted-foreground">It's great having you here 🎉</p>
        </div>

        {/* Upcoming Classes Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Upcoming Classes</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingClasses.map((cls) => (
              <Card key={cls.id}>
                <CardContent className="p-6 space-y-2">
                  <div className="flex justify-between items-center">
                    <Calendar className="h-6 w-6" />
                    <span className="text-sm text-muted-foreground">
                      {cls.date.toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="font-semibold">{cls.title}</h3>
                  {cls.isToday && (
                    <Button className="w-full mt-2 bg-primary hover:bg-primary-dark" variant="default">
                      <Video className="mr-2 h-4 w-4" />
                      Join Class Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Onboarding Card */}
        <div className="relative rounded-lg bg-gray-50 p-6">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold">We're glad you're here!</h2>
            <p className="mb-4 text-muted-foreground">
              Get set for success on Tutorly with some basic tips.
            </p>
            <Button className="bg-primary hover:bg-primary-dark">
              View onboarding
            </Button>
          </div>
          <img
            src="https://static.preply.com/ds/illustrations/tokyo-ui/smiley.svg"
            alt="Welcome emoji"
            className="absolute bottom-0 right-4 w-32"
          />
        </div>

        {/* Recommended Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recommended</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between">
                  <Calendar className="h-6 w-6" />
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold">Improve your availability</h3>
                <p className="text-sm text-muted-foreground">
                  Make popular time slots available to increase your chances of
                  getting booked!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between">
                  <Settings className="h-6 w-6" />
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold">Enable money withdrawals</h3>
                <p className="text-sm text-muted-foreground">
                  Use a copy of your passport or official ID to confirm your
                  identity. Once verified, you can withdraw your funds safely.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between">
                  <School className="h-6 w-6" />
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold">
                  Complete the Welcome to Tutorly course
                </h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to enhance your profile, get students and more! Tutors
                  who complete this course earn three times as much as those who
                  don't.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between">
                  <Library className="h-6 w-6" />
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold">
                  Find resources for your lessons
                </h3>
                <p className="text-sm text-muted-foreground">
                  Save time on lesson prep with our tutor-curated library of
                  digital books, games, and materials
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

