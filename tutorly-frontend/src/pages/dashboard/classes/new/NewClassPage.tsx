import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { User2 } from "lucide-react";

// Mock data for bookings and teachers
const mockBookings = [
  {
    id: "booking1",
    serviceName: "Elementary Mathematics",
    studentId: "student1",
    studentName: "Alice Johnson",
    hours: 40,
    schedule: [
      { day: "Mon", beginTime: "09:00", endTime: "11:00" },
      { day: "Wed", beginTime: "13:00", endTime: "15:00" },
    ],
  },
  {
    id: "booking2",
    serviceName: "Middle School Science",
    studentId: "student2",
    studentName: "Bob Smith",
    hours: 40,
    schedule: [
      { day: "Tue", beginTime: "10:00", endTime: "12:00" },
      { day: "Thu", beginTime: "14:00", endTime: "16:00" },
    ],
  },
];

const mockTeachers = [
  { id: "teacher1", name: "John Doe" },
  { id: "teacher2", name: "Jane Smith" },
];

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CreateNewClassPage() {
  const [selectedBooking, setSelectedBooking] = useState("");
  const [classCode, setClassCode] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [schedules, setSchedules] = useState<
    { day: string; beginTime: string; endTime: string }[]
  >([]);
  const [lessons, setLessons] = useState<number | null>(null);
  const [newSchedule, setNewSchedule] = useState({
    day: "",
    beginTime: "08:00",
    endTime: "09:00",
  });

  const router = useNavigate();

  const handleBookingChange = (bookingId: string) => {
    setSelectedBooking(bookingId);
    const booking = mockBookings.find((b) => b.id === bookingId);
    if (booking) {
      setSchedules(booking.schedule || []);
      calculateLessons(booking.hours, schedules);
    }
  };

  const handleUpdateSchedule = (
    index: number,
    key: "day" | "beginTime" | "endTime",
    value: string
  ) => {
    const updatedSchedules = [...schedules];
    updatedSchedules[index][key] = value;
    setSchedules(updatedSchedules);
    const booking = mockBookings.find((b) => b.id === selectedBooking);
    if (booking) calculateLessons(booking.hours, updatedSchedules);
  };

  const handleRemoveSchedule = (index: number) => {
    const updatedSchedules = schedules.filter((_, i) => i !== index);
    setSchedules(updatedSchedules);
    const booking = mockBookings.find((b) => b.id === selectedBooking);
    if (booking) calculateLessons(booking.hours, updatedSchedules);
  };

  const calculateLessons = (
    totalHours: number,
    schedule: { day: string; beginTime: string; endTime: string }[]
  ) => {
    let remainingHours = totalHours;
    let totalLessons = 0;
  
    schedule.forEach(({ beginTime, endTime }) => {
      if (remainingHours <= 0) return;
  
      const [startHour, startMin] = beginTime.split(":").map(Number);
      const [endHour, endMin] = endTime.split(":").map(Number);
      const dailyHours = Math.max(0, endHour + endMin / 60 - (startHour + startMin / 60));
  
      if (dailyHours > 0) {
        const lessonsForDay = Math.floor(Math.min(dailyHours, remainingHours));
        totalLessons += lessonsForDay;
        remainingHours -= lessonsForDay;
      }
    });
    console.log(totalLessons)
  
    setLessons(totalLessons);
  };
  
  const handleAddSchedule = () => {
    const { day, beginTime, endTime } = newSchedule;
  
    if (!day || !beginTime || !endTime) return alert("All fields are required");
  
    // Check for overlaps in the current schedule
    const isConflict = schedules.some(
      (s) =>
        s.day === day &&
        ((beginTime >= s.beginTime && beginTime < s.endTime) ||
          (endTime > s.beginTime && endTime <= s.endTime))
    );
  
    if (isConflict) {
      alert("Schedule conflicts with an existing time slot!");
      return;
    }
  
    const updatedSchedules = [...schedules, newSchedule];
    setSchedules(updatedSchedules);
    setNewSchedule({ day: "", beginTime: "08:00", endTime: "09:00" });
  
    const booking = mockBookings.find((b) => b.id === selectedBooking);
    if (booking) calculateLessons(booking.hours, updatedSchedules);
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newClassData = {
      selectedBooking,
      classCode,
      selectedTeacher,
      schedules,
      lessons,
    };
    console.log("New class data:", newClassData);
    router("/dashboard/my-classes");
  };

  const selectedBookingData = mockBookings.find(
    (booking) => booking.id === selectedBooking
  );

  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Class</h1>
      <Card>
        <CardHeader>
          <CardTitle>Class Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Class Code */}
            <div className="space-y-2">
              <Label htmlFor="classCode">Class Code</Label>
              <Input
                id="classCode"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                placeholder="Enter class code"
                required
              />
            </div>

            {/* Select Booking */}
            <div className="space-y-2">
              <Label htmlFor="booking">Select Booking</Label>
              <Select
                value={selectedBooking}
                onValueChange={handleBookingChange}
              >
                <SelectTrigger id="booking">
                  <SelectValue placeholder="Choose a booking" />
                </SelectTrigger>
                <SelectContent>
                  {mockBookings.map((booking) => (
                    <SelectItem key={booking.id} value={booking.id}>
                      {booking.serviceName} - {booking.studentName} (
                      {booking.hours} hours)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Booking Details */}
            {selectedBookingData && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <User2 size={24} />
                  <p className="font-semibold">
                    {selectedBookingData.studentName}
                  </p>
                </div>
                <div>
                  <Label>Service Name</Label>
                  <p className="text-gray-700">
                    {selectedBookingData.serviceName}
                  </p>
                </div>
              </div>
            )}

            {/* Editable Schedule */}
            <div className="space-y-2">
              <Label>Schedule</Label>
              <div className="space-y-2">
                {schedules.map((schedule, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Select
                      value={schedule.day}
                      onValueChange={(value) =>
                        handleUpdateSchedule(index, "day", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Day" />
                      </SelectTrigger>
                      <SelectContent>
                        {daysOfWeek.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="time"
                      value={schedule.beginTime}
                      onChange={(e) =>
                        handleUpdateSchedule(index, "beginTime", e.target.value)
                      }
                    />
                    <Input
                      type="time"
                      value={schedule.endTime}
                      onChange={(e) =>
                        handleUpdateSchedule(index, "endTime", e.target.value)
                      }
                    />
                    <Button
                      variant="destructive"
                      onClick={() => handleRemoveSchedule(index)}
                    >
                      X
                    </Button>
                  </div>
                ))}

                {/* Editable row for adding a new schedule */}
                {newSchedule.day}{newSchedule.beginTime}{newSchedule.endTime}
                <div className="flex items-center space-x-2">
                  <Select
                    value={newSchedule.day}
                    onValueChange={(value) =>
                      setNewSchedule({ ...newSchedule, day: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {daysOfWeek.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="time"
                    value={newSchedule.beginTime}
                    onChange={(e) =>
                      setNewSchedule({
                        ...newSchedule,
                        beginTime: e.currentTarget.value,
                      })
                    }
                  />
                  <Input
                    type="time"
                    value={newSchedule.endTime}
                    onChange={(e) =>
                      setNewSchedule({
                        ...newSchedule,
                        endTime: e.currentTarget.value,
                      })
                    }
                  />
                  <Button
                    onClick={(e) => {
                        e.preventDefault()
                        handleAddSchedule()
                    }}
                  >
                    ✓ Add Schedule
                  </Button>
                </div>
              </div>
            </div>

            {/* Number of Lessons */}
            <div className="space-y-2">
              <Label>No. of Lessons</Label>
              <Input type="number" value={lessons || ""} readOnly />
            </div>

            {/* Assign Teacher */}
            <div className="space-y-2">
              <Label htmlFor="teacher">Assign Teacher</Label>
              <Select
                value={selectedTeacher}
                onValueChange={setSelectedTeacher}
              >
                <SelectTrigger id="teacher">
                  <SelectValue placeholder="Choose a teacher" />
                </SelectTrigger>
                <SelectContent>
                  {mockTeachers.map((teacher) => (
                    <SelectItem key={teacher.id} value={teacher.id}>
                      {teacher.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit */}
            <Button type="submit">Create Class</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
