import { Calendar, Users } from 'lucide-react'
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
        <Button asChild>
          <Link to="/dashboard/my-classes/new">Create New Class</Link>
        </Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class Code</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Schedule</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Next Lesson</TableHead>
            <TableHead>Total Hours</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((classItem) => {
            const nextLesson = classItem.lessons.find(lesson => lesson.status === 'upcoming');
            const totalHours = classItem.lessons.reduce((sum, lesson) => sum + (lesson.status === 'completed' ? 1.5 : 0), 0);
            return (
              <TableRow key={classItem.id}>
                <TableCell className="font-medium">{classItem.classCode}</TableCell>
                <TableCell>
                  <div>{classItem.name}</div>
                  <Badge variant="outline" className="mt-1">{classItem.subject}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {classItem.schedule}
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
                <TableCell>{totalHours} hours</TableCell>
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

