import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


export const InstitutionForm = ({ onNext, onBack }:{onNext : () => void, onBack : () => void}) => {
    const [formData, setFormData] = useState({
      name: '',
      type: '',
      country: '',
      address: '',
      website: '',
      description: ''
    });
  
    const handleSubmit = () => {
      console.log('Institution Form:', formData);
      onNext();
    };
  
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Institution Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <Label>Institution Type</Label>
          <Select
            value={formData.type}
            onValueChange={(value) => setFormData({...formData, type: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select institution type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="university">University</SelectItem>
              <SelectItem value="college">College</SelectItem>
              <SelectItem value="school">School</SelectItem>
              <SelectItem value="training">Training Center</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Country</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({...formData, country: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({...formData, website: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="description">Institution Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>
        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button className="bg-primary hover:bg-primary-dark" onClick={handleSubmit}>
            Save and continue
          </Button>
        </div>
      </div>
    );
  };