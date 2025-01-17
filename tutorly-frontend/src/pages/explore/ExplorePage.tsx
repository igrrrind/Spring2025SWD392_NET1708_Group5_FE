import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from 'lucide-react'

export default function Explore() {
  const stickyElement = document.getElementById("stickyElement");

  window.addEventListener("scroll", () => {
    if  (!stickyElement) return
    const top = stickyElement.getBoundingClientRect().top;

    if (top === 0) {
      stickyElement.classList.add("shadow-lg");
    } else {
      stickyElement.classList.remove("shadow-lg");
    }
  });

  return (
    <div className="py-8 space-y-8 overflow-visible">
        
      <h1 className="text-3xl font-bold tracking-tight px-40">
        Explore Online English Tutors & Teachers
      </h1>
      <div className="space-y-4 sticky top-0 bg-white py-4 pt-6 px-40" id="stickyElement">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-2">
          <span className="text-sm text-muted-foreground">I want to learn</span>
          <Select defaultValue="english">
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <span className="text-sm text-muted-foreground">Price per lesson</span>
          <Select defaultValue="3-40">
            <SelectTrigger>
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-40">$3 — $40+</SelectItem>
              <SelectItem value="3-10">$3 — $10</SelectItem>
              <SelectItem value="10-20">$10 — $20</SelectItem>
              <SelectItem value="20-40">$20 — $40</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <span className="text-sm text-muted-foreground">Country of birth</span>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any country</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <span className="text-sm text-muted-foreground">I'm available</span>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any time</SelectItem>
              <SelectItem value="morning">Morning</SelectItem>
              <SelectItem value="afternoon">Afternoon</SelectItem>
              <SelectItem value="evening">Evening</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button variant="outline">Specialties</Button>
        <Button variant="outline">Also speaks</Button>
        <Button variant="outline">Native speaker</Button>
        <Button variant="outline">Tutor categories</Button>
        <div className="flex flex-1 gap-4 items-center">
          <Select defaultValue="top">
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top">Our top picks</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
          <div className="w-full">
            <Input placeholder="Search by name or keyword" />
          </div>
        </div>
        </div>
      </div>

      <div className="mx-40">
        <h2 className="text-2xl font-semibold mb-6">
          28,879 English teachers that match your needs
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%2020.20.03-8MxgzsZZtSsKPTq0HibG64sT7OVl8m.png" alt="Jonathan L." className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">Jonathan L.</h3>
                      <p className="text-sm text-muted-foreground">Super Tutor</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">5</span>
                    <span className="ml-1 text-sm text-muted-foreground">(33 reviews)</span>
                  </div>
                  <p className="mt-2 text-sm">English</p>
                  <p className="text-sm text-muted-foreground">Speaks English (Native), Portuguese (Beginner)</p>
                  <p className="mt-2 text-sm">23 active students • 2,349 lessons</p>
                </div>
              </div>
              <p className="mt-4 text-sm">Improve your confidence and fluency. Children and young people welcome. — I am a certified tutor with over 20 years experience and have taught a wide range...</p>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <Badge variant="secondary" className="mr-2">TEFL</Badge>
                  <Badge variant="secondary">IELTS</Badge>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">$36</p>
                  <p className="text-sm text-muted-foreground">per 50-min lesson</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Button className="w-full">Book trial lesson</Button>
                <Button variant="outline" className="w-full">Send message</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%2020.20.03-8MxgzsZZtSsKPTq0HibG64sT7OVl8m.png" alt="Sarah D." className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">Sarah D.</h3>
                      <p className="text-sm text-muted-foreground">Professional</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                    <span className="ml-1 text-sm text-muted-foreground">(36 reviews)</span>
                  </div>
                  <p className="mt-2 text-sm">English</p>
                  <p className="text-sm text-muted-foreground">Speaks English (Native), Spanish (Intermediate)</p>
                  <p className="mt-2 text-sm">25 active students • 3,261 lessons</p>
                </div>
              </div>
              <p className="mt-4 text-sm">Native qualified English teacher with international experience — Hi! I'm Sarah, a qualified English teacher from Leicester, UK.</p>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <Badge variant="secondary" className="mr-2">CELTA</Badge>
                  <Badge variant="secondary">Business English</Badge>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">$40</p>
                  <p className="text-sm text-muted-foreground">per 50-min lesson</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Button className="w-full">Book trial lesson</Button>
                <Button variant="outline" className="w-full">Send message</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

