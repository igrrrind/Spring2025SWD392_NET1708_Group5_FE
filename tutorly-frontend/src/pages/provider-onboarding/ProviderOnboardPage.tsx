import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AboutForm } from './steps/AboutForm';
import { InstitutionForm } from './steps/InstitutionForm';
import { CertificationForm } from './steps/CertificationForm';
import { StaffInviteForm } from './steps/StaffInviteForm';
import { DescriptionForm } from './steps/DescriptionForm';

const steps = [
    { id: 1, name: 'About', completed: false },
    { id: 2, name: 'Institution', completed: false },
    { id: 3, name: 'Certification', completed: false },
    { id: 4, name: 'Staff', completed: false },
    { id: 5, name: 'Description', completed: false },
    { id: 6, name: 'Video', completed: false },
    { id: 7, name: 'Availability', completed: false },
    { id: 8, name: 'Pricing', completed: false },
];





export const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <AboutForm onNext={handleNext} />;
      case 2:
        return <InstitutionForm onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <CertificationForm onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <StaffInviteForm onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <DescriptionForm onNext={handleNext} onBack={handleBack} />;
      default:
        return <div>Step {currentStep} form coming soon...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Navigation */}
        <nav className="flex items-center space-x-2 mb-8 overflow-x-auto pb-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center whitespace-nowrap">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full 
                ${step.id <= currentStep ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                {step.id}
              </div>
              <span className={`ml-2 ${step.id === currentStep ? 'text-black' : 'text-gray-500'}`}>
                {step.name}
              </span>
              {step.id !== steps.length && (
                <div className="mx-2 text-gray-300">{'>'}</div>
              )}
            </div>
          ))}
        </nav>

        {/* Form Card */}
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              {steps.find(step => step.id === currentStep)?.name}
            </CardTitle>
            <p className="text-gray-500 mt-2 text-center">
              Complete your education provider profile. Your progress will be
              automatically saved as you proceed.
            </p>
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingPage;