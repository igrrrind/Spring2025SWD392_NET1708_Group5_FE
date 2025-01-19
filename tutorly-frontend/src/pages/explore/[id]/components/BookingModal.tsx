import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  serviceId: string
  bookingType: "package" | "hourly"
  pricePerHour: number
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export function BookingModal({ isOpen, onClose, serviceId }: BookingModalProps) {
  const [selectedChild, setSelectedChild] = useState('')
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [timeSlots, setTimeSlots] = useState<{ [key: string]: { hours: number, startTime: string } }>({})
//   const [weeks, setWeeks] = useState(1)
  const [notes, setNotes] = useState('')
  const navigate = useNavigate()

  const handleDayToggle = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    )
  }

  const handleTimeSlotChange = (day: string, hours: number, startTime: string) => {
    setTimeSlots(prev => ({ ...prev, [day]: { hours, startTime } }))
  }

//   const totalHours = selectedDays.reduce((total, day) => total + (timeSlots[day]?.hours || 0), 0) * weeks
//   const totalCost = totalHours * pricePerHour

  const handleBookService = () => {
    // Here you would typically send this data to your backend
    const bookingData = {
      serviceId,
      childId: selectedChild,
      schedule: selectedDays.map(day => ({
        day,
        time: timeSlots[day],
      })),
    //   totalCost,
      notes
    }
    console.log('Booking data:', bookingData)
    // Navigate to checkout page
    navigate('/checkout')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Book Tutoring Service</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="child" className="text-right">
              Child
            </Label>
            <Select value={selectedChild} onValueChange={setSelectedChild}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a child" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="child1">Child 1</SelectItem>
                <SelectItem value="child2">Child 2</SelectItem>
                <SelectItem value="child3">Child 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Horizontal layout for days of the week */}
          <div className="grid grid-cols-7 gap-4">
            {daysOfWeek.map(day => (
              <div key={day} className="flex flex-col items-center">
                <Label className="text-sm">{day}</Label>
                <Checkbox 
                  id={day} 
                  checked={selectedDays.includes(day)}
                  onCheckedChange={() => handleDayToggle(day)}
                />
                {selectedDays.includes(day) && (
                  <>
                    <Input 
                      type="number"
                      min="1"
                      placeholder="Hours"
                      value={timeSlots[day]?.hours || ''}
                      onChange={(e) => handleTimeSlotChange(day, parseInt(e.target.value), timeSlots[day]?.startTime || '')}
                      className="mt-2"
                    />
                    <Input 
                      type="time"
                      value={timeSlots[day]?.startTime || ''}
                      onChange={(e) => handleTimeSlotChange(day, timeSlots[day]?.hours || 0, e.target.value)}
                      className="mt-2"
                    />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* {bookingType === "hourly" &&
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="weeks" className="text-right">
                Weeks
                </Label>
                <Input
                id="weeks"
                type="number"
                min="1"
                value={weeks}
                onChange={(e) => setWeeks(parseInt(e.target.value))}
                className="col-span-3"
                />
            </div>
            } */}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requests or notes"
              className="col-span-3"
            />
          </div>

          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Total</Label>
            <div className="col-span-3">
              <p className="font-semibold">${totalCost.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">
                {totalHours} hours @ ${pricePerHour}/hour
              </p>
            </div>
          </div> */}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleBookService}>Book Service</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
