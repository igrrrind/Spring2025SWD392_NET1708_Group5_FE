
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useNavigate } from 'react-router-dom'

// This would typically come from your global state management or URL parameters
const mockBookingData = {
  serviceId: 'math-elementary',
  serviceName: 'Elementary Mathematics',
  childName: 'Alice Johnson',
  schedule: [
    { day: 'Monday', time: '15:00' },
    { day: 'Wednesday', time: '16:00' },
  ],
  weeks: 4,
  totalCost: 200,
}

export default function CheckoutPage() {
  const router = useNavigate()
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment
    console.log('Processing payment:', paymentInfo)
    // After successful payment, redirect to a confirmation page
    router('/booking-confirmation')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
            <CardDescription>Review your tutoring session details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Service</h3>
              <p>{mockBookingData.serviceName}</p>
            </div>
            <div>
              <h3 className="font-semibold">Student</h3>
              <p>{mockBookingData.childName}</p>
            </div>
            <div>
              <h3 className="font-semibold">Schedule</h3>
              <ul>
                {mockBookingData.schedule.map((slot, index) => (
                  <li key={index}>{slot.day} at {slot.time}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Duration</h3>
              <p>{mockBookingData.weeks} weeks</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Total Cost:</span>
              <span className="text-2xl font-bold">${mockBookingData.totalCost.toFixed(2)}</span>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
            <CardDescription>Enter your payment details securely</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={paymentInfo.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentInfo.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={paymentInfo.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name on Card</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={paymentInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Separator className="my-4" />
              <Button type="submit" className="w-full">Complete Payment</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

