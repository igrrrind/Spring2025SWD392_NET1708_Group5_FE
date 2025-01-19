import { ArrowLeft, Clock, Users, GraduationCap, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "../data"
import { Link, useParams } from 'react-router-dom'

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>(); // Access the route parameter
  const service = services.find((c) => c.id === id)


  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/dashboard/services">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </Button>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <Badge className="mb-2">{service?.level}</Badge>
                <CardTitle className="text-2xl">{service?.subject}</CardTitle>
              </div>
              <Badge variant="secondary">
                ${service?.pricePerHour}/hour
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  Age Range: {service?.ageRange}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  Duration: {service?.duration}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Provider: {service?.provider}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Star className="mr-2 h-4 w-4" />
                  Success Rate: {service?.successRate}%
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">About this Service?</h3>
                <p className="text-muted-foreground">{service?.about}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {service?.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prerequisites</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {service?.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Curriculum</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {service?.curriculum.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Testimonials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {service?.testimonials.map((testimonial, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <p className="italic mb-2">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{testimonial.author}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to={`/services/${service?.id}/edit`}>Edit Service</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

