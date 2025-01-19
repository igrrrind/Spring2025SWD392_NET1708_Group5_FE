import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";


export const AboutForm = ({onNext}:{onNext: () => void}) => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      phoneNumber: '',
      isAuthorized: false
    });
  
    const handleSubmit = () => {
      console.log('About Form:', formData);
      onNext();
    };
  
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="email">Work Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <Label>Role at Institution</Label>
          <Select
            value={formData.role}
            onValueChange={(value) => setFormData({...formData, role: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your role..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Administrator</SelectItem>
              <SelectItem value="director">Director</SelectItem>
              <SelectItem value="principal">Principal</SelectItem>
              <SelectItem value="coordinator">Program Coordinator</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="authorized"
            checked={formData.isAuthorized}
            onCheckedChange={() => setFormData({...formData, isAuthorized: !formData.isAuthorized })}
          />
          <Label htmlFor="authorized">I am authorized to register on behalf of my institution</Label>
        </div>
        <Button className="bg-primary hover:bg-primary-dark" onClick={handleSubmit}>
            Save and continue
        </Button>
      </div>
    );
  };