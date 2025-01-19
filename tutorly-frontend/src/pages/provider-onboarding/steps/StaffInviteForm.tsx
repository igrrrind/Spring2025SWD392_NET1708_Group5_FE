import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export const StaffInviteForm = ({ onNext, onBack }:{onNext : () => void, onBack : () => void}) => {
    const [emails, setEmails] = useState<string[]>(['']);
  
    const handleSubmit = () => {
      console.log('Staff Invite Form:', emails);
      onNext();
    };
  
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          {emails.map((email: string, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter staff email"
                value={email}
                onChange={(e) => {
                  const newEmails = [...emails];
                  newEmails[index] = e.target.value;
                  setEmails(newEmails);
                }}
              />
              {emails.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEmails(emails.filter((_, i) => i !== index))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          
          <Button
            variant="outline"
            onClick={() => setEmails([...emails, ''])}
          >
            Add another email
          </Button>
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