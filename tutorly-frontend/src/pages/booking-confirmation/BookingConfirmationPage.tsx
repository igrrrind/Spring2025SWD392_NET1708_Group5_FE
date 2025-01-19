import { CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'

export default function BookingConfirmationPage() {
  return (
    <div className="container mx-auto py-8 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl text-center">Booking Confirmed!</CardTitle>
          <CardDescription className="text-center">
            Your tutoring session has been successfully booked.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p>Thank you for choosing our tutoring service. We've sent a confirmation email with all the details of your booking.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/dashboard/my-classes">View My Classes</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

