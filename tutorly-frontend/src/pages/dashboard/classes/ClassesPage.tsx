import { Calendar, Clock, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { classes } from "./data"
import { Link } from 'react-router-dom'

export default function MyClassesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Classes</h1>
        <Button>Create New Class</Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class Name</TableHead>
            <TableHead>Schedule</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Next Lesson</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((classItem) => {
            const nextLesson = classItem.lessons.find(lesson => lesson.status === 'upcoming');
            return (
              <TableRow key={classItem.id}>
                <TableCell className="font-medium">
                  <div>{classItem.name}</div>
                  <Badge variant="outline" className="mt-1">{classItem.subject}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {classItem.schedule}
                  </div>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Clock className="mr-2 h-4 w-4" />
                    {new Date(classItem.startDate).toLocaleDateString()} - {new Date(classItem.endDate).toLocaleDateString()}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    {classItem.students.length}
                  </div>
                </TableCell>
                <TableCell>
                  {nextLesson ? (
                    <div>
                      <div>{nextLesson.title}</div>
                      <div className="text-muted-foreground">{new Date(nextLesson.date).toLocaleDateString()}</div>
                    </div>
                  ) : (
                    <span className="text-muted-foreground">No upcoming lessons</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant={new Date(classItem.endDate) > new Date() ? "default" : "secondary"}>
                    {new Date(classItem.endDate) > new Date() ? "Active" : "Completed"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" asChild>
                    <Link to={`/dashboard/my-classes/${classItem.id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  )
}

