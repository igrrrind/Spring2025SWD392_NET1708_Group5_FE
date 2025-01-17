import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, GraduationCap } from 'lucide-react'

export default function BecomeProvider() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Make a living by teaching the largest community of learners worldwide
            </h1>
            
            <div className="grid gap-8">
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black text-white font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sign up</h3>
                  <p className="text-muted-foreground">to create your tutor profile</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-900 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Get approved</h3>
                  <p className="text-muted-foreground">by our team in 5 business days</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-900 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Start earning</h3>
                  <p className="text-muted-foreground">by teaching students all over the world!</p>
                </div>
              </div>
            </div>

            <Button className="bg-emerald-400 hover:bg-emerald-500 text-black h-12 px-8 text-lg">
              Create a tutor profile now
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://static.preply.com/static/ssr/_next/static/images/main-asset-34138e0d378cd623f1ccc47edb229c59.jpg"
              alt="Tutor making heart shape with hands"
              className="w-full rounded-2xl p-12"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="space-y-4">
                <DollarSign className="h-8 w-8 text-emerald-400" />
                <h3 className="text-2xl font-bold">Set your own rate</h3>
                <p className="text-muted-foreground">
                  Choose your hourly rate and change it anytime. On average, English tutors charge $15-25 per hour.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="space-y-4">
                <Clock className="h-8 w-8 text-emerald-400" />
                <h3 className="text-2xl font-bold">Teach anytime, anywhere</h3>
                <p className="text-muted-foreground">
                  Decide when and how many hours you want to teach. No minimum time commitment or fixed schedule. Be your own boss!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="space-y-4">
                <GraduationCap className="h-8 w-8 text-emerald-400" />
                <h3 className="text-2xl font-bold">Grow professionally</h3>
                <p className="text-muted-foreground">
                  Attend professional development webinars and get tips to upgrade your skills. You'll get all the help you need from our team to grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

