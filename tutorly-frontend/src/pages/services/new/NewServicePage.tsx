

import { useState } from "react"
import { Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

export default function NewServicePage() {
  const navigate = useNavigate()
  const [benefits, setBenefits] = useState<string[]>([])
  const [prerequisites, setPrerequisites] = useState<string[]>([])
  const [curriculum, setCurriculum] = useState<string[]>([])

  const addItem = (list: string[], setList: (items: string[]) => void) => {
    setList([...list, ""])
  }

  const removeItem = (index: number, list: string[], setList: (items: string[]) => void) => {
    setList(list.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, value: string, list: string[], setList: (items: string[]) => void) => {
    const newList = [...list]
    newList[index] = value
    setList(newList)
  }

  return (
    <div className="container max-w-3xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Create New Service</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ielts-academic">IELTS Academic</SelectItem>
                    <SelectItem value="ielts-general">IELTS General Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="about">About</Label>
                <Textarea
                  id="about"
                  placeholder="Describe the service..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="videoUrl">Video URL</Label>
                <Input id="videoUrl" type="url" placeholder="https://..." />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="priceMin">Minimum Price ($)</Label>
                  <Input id="priceMin" type="number" min="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="provider">Provider</Label>
                  <Input id="provider" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="successRate">Success Rate (%)</Label>
                  <Input id="successRate" type="number" min="0" max="100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetScore">Target IELTS Score</Label>
                  <Input id="targetScore" type="number" min="0" max="9" step="0.5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" placeholder="e.g., 12 weeks" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Key Benefits</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addItem(benefits, setBenefits)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Benefit
                  </Button>
                </div>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={benefit}
                        onChange={(e) => updateItem(index, e.target.value, benefits, setBenefits)}
                        placeholder="Enter a key benefit..."
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeItem(index, benefits, setBenefits)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Prerequisites</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addItem(prerequisites, setPrerequisites)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Prerequisite
                  </Button>
                </div>
                <div className="space-y-2">
                  {prerequisites.map((prerequisite, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={prerequisite}
                        onChange={(e) => updateItem(index, e.target.value, prerequisites, setPrerequisites)}
                        placeholder="Enter a prerequisite..."
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeItem(index, prerequisites, setPrerequisites)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Curriculum</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addItem(curriculum, setCurriculum)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Topic
                  </Button>
                </div>
                <div className="space-y-2">
                  {curriculum.map((topic, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={topic}
                        onChange={(e) => updateItem(index, e.target.value, curriculum, setCurriculum)}
                        placeholder="Enter a curriculum topic..."
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeItem(index, curriculum, setCurriculum)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => navigate('/dashboard/services')}>
                Cancel
              </Button>
              <Button type="submit">Create Service</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

