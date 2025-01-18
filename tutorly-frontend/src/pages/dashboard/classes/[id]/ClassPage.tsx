import { ArrowLeft, Calendar, Clock, GraduationCap, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { classes } from "../data"
import { Link, useParams } from 'react-router-dom'

export default function ClassPage() {
  const { id } = useParams<{ id: string }>(); // Access the route parameter
  const classItem = classes.find((c) => c.id === id)

  if (!classItem) {
    return <div>Class not found</div>
  }

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/dashboard/my-classes">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Classes
        </Link>
      </Button>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <Badge className="mb-2">{classItem.subject}</Badge>
                <CardTitle className="text-2xl">{classItem.name}</CardTitle>
              </div>
              <Badge variant={new Date(classItem.endDate) > new Date() ? "default" : "secondary"}>
                {new Date(classItem.endDate) > new Date() ? "Active" : "Completed"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule: {classItem.schedule}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  Duration: {new Date(classItem.startDate).toLocaleDateString()} - {new Date(classItem.endDate).toLocaleDateString()}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Class Code: {classItem.classCode}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  Students: {classItem.students.length}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{classItem.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Students</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classItem.students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost">View Progress</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lessons</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Topic</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classItem.lessons.map((lesson) => (
                  <TableRow key={lesson.id}>
                    <TableCell>{new Date(lesson.date).toLocaleDateString()}</TableCell>
                    <TableCell>{lesson.startTime} - {lesson.endTime}</TableCell>
                    <TableCell className="font-medium">{lesson.title}</TableCell>
                    <TableCell>{lesson.topic}</TableCell>
                    <TableCell>
                      <Badge variant={
                        lesson.status === 'completed' ? "secondary" :
                        lesson.status === 'upcoming' ? "default" : "destructive"
                      }>
                        {lesson.status.charAt(0).toUpperCase() + lesson.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost">
                        {lesson.status === 'upcoming' ? 'Edit' : 'View Details'}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

