import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const DescriptionForm = ({ onNext, onBack }:{onNext : () => void, onBack : () => void}) => {
    const [description, setDescription] = useState('');
  
    const handleSubmit = () => {
      console.log('Description Form:', description);
      onNext();
    };
  
    return (
      <div className="space-y-6">
        <div>
          <Label htmlFor="description">Public Description</Label>
          <Textarea
            id="description"
            placeholder="Describe your education organization to parents..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-40"
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
  