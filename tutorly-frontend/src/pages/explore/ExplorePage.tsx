

import { useEffect } from "react"
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
import { Heart, Star, Users, Clock, GraduationCap } from 'lucide-react'
import { services } from "../services/data"
import { Link } from "react-router-dom"

export default function Explore() {
  useEffect(() => {
    const stickyElement = document.getElementById("stickyElement");
    
    const handleScroll = () => {
      if (!stickyElement) return;
      const top = stickyElement.getBoundingClientRect().top;
      
      if (top === 0) {
        stickyElement.classList.add("shadow-lg");
      } else {
        stickyElement.classList.remove("shadow-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-8 space-y-8 overflow-visible">
      <h1 className="text-3xl font-bold tracking-tight px-40">
        Explore Tutoring Services for Children
      </h1>
      
      <div className="space-y-4 sticky top-0 bg-background py-4 pt-6 px-40 z-10" id="stickyElement">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">Subject</span>
            <Select defaultValue="any">
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Subject</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">Level</span>
            <Select defaultValue="any">
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Level</SelectItem>
                <SelectItem value="elementary">Elementary</SelectItem>
                <SelectItem value="middle">Middle School</SelectItem>
                <SelectItem value="high">High School</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">Price Range</span>
            <Select defaultValue="any">
              <SelectTrigger>
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Price</SelectItem>
                <SelectItem value="0-25">$0 - $25/hour</SelectItem>
                <SelectItem value="25-50">$25 - $50/hour</SelectItem>
                <SelectItem value="50+">$50+/hour</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">Age Range</span>
            <Select defaultValue="any">
              <SelectTrigger>
                <SelectValue placeholder="Select age range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Age</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="11-14">11-14 years</SelectItem>
                <SelectItem value="15-18">15-18 years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="outline">Learning Style</Button>
          <Button variant="outline">Schedule</Button>
          <Button variant="outline">Special Needs</Button>
          <Button variant="outline">Group/Individual</Button>
          <div className="flex flex-1 gap-4 items-center">
            <Select defaultValue="recommended">
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="success-rate">Success Rate</SelectItem>
              </SelectContent>
            </Select>
            <div className="w-full">
              <Input placeholder="Search tutoring services..." />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-40">
        <h2 className="text-2xl font-semibold mb-6">
          {services.length} tutoring services available
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {services.map((service) => (
            <Card key={service.id}>
              <CardContent className="p-6">
                <Link to={`/explore/${service.id}`} className="block">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{service.subject}</h3>
                        <p className="text-sm text-muted-foreground">{service.provider}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{service.successRate}% Success Rate</span>
                      <span className="ml-1 text-sm text-muted-foreground">
                        ({service.testimonials.length} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {service.ageRange}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm">{service.about}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <Badge key={index} variant="secondary">{benefit}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    {service.curriculum.length} topics covered
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">${service.pricePerHour}</p>
                    <p className="text-sm text-muted-foreground">per hour</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Button className="w-full">Book a Session</Button>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

