import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { services } from "../../services/data";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { BookingModal } from "./components/BookingModal";

export default function ClientServicePage() {
  const { id } = useParams<{ id: string }>(); // Access the route parameter
  const service = services.find((c) => c.id === id);
//   const [hours, setHours] = useState(1); // Slider value for custom hours
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [bookingType, setBookingType] = useState<'hourly' | 'package'>('hourly')
  const handleOpenBookingModal = (type: 'hourly' | 'package') => {
    setBookingType(type)
    setIsBookingModalOpen(true)
  }



  if (!service) {
    return <div>Service not found</div>;
  }

  const maxHours = 10; // Assuming package includes 10 hours

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/explore">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Explore
        </Link>
      </Button>

      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        {/* Main Content */}
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="mb-2">{service?.level}</Badge>
                  <CardTitle className="text-2xl">{service?.subject}</CardTitle>
                  <p className="text-muted-foreground">{service?.provider}</p>
                </div>
                <Badge variant="secondary" className="text-lg">
                  ${service?.pricePerHour}/hour
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="mr-2 h-4 w-4" />
                      Age Range: {service?.ageRange}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      Duration: {service?.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold text-lg">{service?.successRate}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">About this Service</h3>
                  <p className="text-muted-foreground">{service?.about}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About this Provider</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service?.provider}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Placeholder for Introduction Video</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Video goes here</p>
              </div>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-6">
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
        </div>

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

        </div>

        {/* Sticky Booking Options */}
        <div className="sticky top-8 self-start">
          <Card>
            <CardHeader>
              <CardTitle>Booking Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* <div>
                  <h3 className="font-semibold mb-2">Custom Booking</h3>
                  <p className="text-muted-foreground mb-4">
                    Choose the number of hours you want to book.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Hours:</span>
                      <span className="font-semibold">{hours}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max={maxHours}
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full"
                    />
                    <Button className="w-full" onClick={() => handleOpenBookingModal('hourly')}>Book {hours} Hour{hours > 1 ? "s" : ""}</Button>
                  </div>
                </div> */}

                <div>
                  <h3 className="font-semibold mb-2">Full Package</h3>
                  <p className="text-muted-foreground mb-4">
                    Get the complete curriculum at a discounted rate.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Package price:</span>
                      <span className="font-semibold">${service?.pricePerHour * maxHours}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Includes {maxHours} hours of tutoring
                    </p>
                    <Button className="w-full" onClick={() => handleOpenBookingModal('package')}>Purchase Full Package</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        bookingType={bookingType}
        serviceId={service.id}
        pricePerHour={service.pricePerHour}
      />
    </div>
  );
}
