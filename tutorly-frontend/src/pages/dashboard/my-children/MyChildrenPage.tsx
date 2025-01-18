import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'

interface Child {
  id: string
  name: string
  age: number
  subjects: string[]
}

// This would come from your database
const children: Child[] = [
  {
    id: "1",
    name: "Alice Johnson",
    age: 10,
    subjects: ["Math", "Science", "Art"],
  },
  {
    id: "2",
    name: "Ben Carter",
    age: 12,
    subjects: ["History", "Math", "Physical Education"],
  },
  {
    id: "3",
    name: "Clara Martinez",
    age: 11,
    subjects: ["English", "Music", "Science"],
  },
  {
    id: "4",
    name: "David Liu",
    age: 9,
    subjects: ["Math", "Art", "Geography"],
  },
  {
    id: "5",
    name: "Ella Nguyen",
    age: 8,
    subjects: ["Reading", "Music", "Physical Education"],
  },
];


export default function MyChildrenPage() {
  const hasChildren = children.length > 0

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Children</h1>
        {hasChildren && (
          <Button asChild>
            <Link to="/dashboard/my-children/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Child
            </Link>
          </Button>
        )}
      </div>

      {hasChildren ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children.map((child) => (
            <Card key={child.id} className='border-dotted'>
              <CardHeader>
                <CardTitle>{child.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Age: {child.age}</p>
                <div className="mt-2">
                  <p className="text-sm font-medium">Subjects:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {child.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to={`dashboard/my-children/${child.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center p-12">
          <CardContent className="space-y-6">
            <div className="rounded-full bg-primary/10 p-6 w-fit mx-auto">
              <Plus className="h-12 w-12 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Add Your First Child</h2>
              <p className="text-muted-foreground">
                Create a profile for your child to get started with tutoring
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/dashboard/my-children/new">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

