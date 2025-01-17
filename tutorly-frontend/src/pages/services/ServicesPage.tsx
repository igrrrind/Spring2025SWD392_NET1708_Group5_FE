import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { services } from './data'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Services</h1>
        <Button asChild>
          <Link to="new">
            <Plus className="mr-2 h-4 w-4" />
            Create Service
          </Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Price per Hour</TableHead>
            <TableHead>Age Range</TableHead>
            <TableHead>Success Rate</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">
                {service.subject}
                <Badge variant="outline" className="ml-2">
                  {service.level}
                </Badge>
              </TableCell>
              <TableCell>{service.level}</TableCell>
              <TableCell>{service.provider}</TableCell>
              <TableCell>${service.pricePerHour}/hour</TableCell>
              <TableCell>{service.ageRange}</TableCell>
              <TableCell>{service.successRate}%</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" asChild>
                  <Link to={`${service.id}`}>View Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

