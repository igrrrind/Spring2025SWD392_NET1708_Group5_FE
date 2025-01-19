import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';

interface CertificationFormData {
    noCertificate: boolean;
    subject: string;
    certification: string;
    notOnList: boolean;
    yearStart: string;
    yearEnd: string;
    file: File | undefined;
}

export const CertificationForm = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => {
    const [formData, setFormData] = useState<CertificationFormData>({
        noCertificate: false,
        subject: '',
        certification: '',
        notOnList: false,
        yearStart: '',
        yearEnd: '',
        file: undefined
    });

    const handleSubmit = () => {
        console.log('Certification Form:', formData);
        onNext();
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-2">
                <Checkbox
                    id="noCertificate"
                    checked={formData.noCertificate}
                    onCheckedChange={() => setFormData({ ...formData, noCertificate: !formData.noCertificate })}
                />
                <Label htmlFor="noCertificate">Our institution does not hold an accreditation</Label>
            </div>

            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <div className="flex-1">
                        <Label>Subject of Focus</Label>
                        <Select
                            value={formData.subject}
                            onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="math">Mathematics</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button variant="ghost" size="icon" className="mt-6">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>

                <div>
                    <Label>Institutional Certifications</Label>
                    <Select
                        value={formData.certification}
                        onValueChange={(value) => setFormData({ ...formData, certification: value })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select accreditation" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="iso9001">ISO 9001</SelectItem>
                            <SelectItem value="iacbe">IACBE Accreditation</SelectItem>
                            <SelectItem value="abet">ABET Accreditation</SelectItem>
                            <SelectItem value="abet">Other...</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-500 mt-1">Select the accreditation your institution holds.</p>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="notOnList"
                        checked={formData.notOnList}
                        onCheckedChange={() => setFormData({ ...formData, notOnList: !formData.notOnList })}
                    />
                    <Label htmlFor="notOnList">Our accreditation is not on the list</Label>
                </div>

                <div>
                    <Label>Years of Accreditation</Label>
                    <div className="flex items-center space-x-2">
                        <Select
                            value={formData.yearStart}
                            onValueChange={(value) => setFormData({ ...formData, yearStart: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Start year" />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 30 }, (_, i) => 2024 - i).map(year => (
                                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <span>-</span>
                        <Select
                            value={formData.yearEnd}
                            onValueChange={(value) => setFormData({ ...formData, yearEnd: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="End year" />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 30 }, (_, i) => 2024 - i).map(year => (
                                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                    <div>
                        <h3 className="font-medium">Upload Accreditation Certificate</h3>
                        <p className="text-sm text-gray-500">Our team will review your submission.</p>
                    </div>

                    <Button variant="outline" className="w-full" onClick={() => {
                        const element = document.getElementById('file-upload');
                        if (element) element.click();
                    }}>
                        Upload
                    </Button>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept=".jpg,.png"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const files = e.target.files;
                            if (files && files.length > 0) {
                                setFormData({ ...formData, file: files[0] });
                            }
                        }}
                    />

                    <Alert className="bg-blue-50 border-blue-100">
                        <AlertDescription className="text-sm text-blue-800">
                            Only valid accreditation documents will be accepted. Providing false information may result in disapproval or suspension.
                        </AlertDescription>
                    </Alert>

                    <p className="text-sm text-gray-500">JPG or PNG format; maximum size of 20MB.</p>
                </div>

                <Button
                    variant="link"
                    className="text-black hover:text-gray-700 p-0 h-auto font-normal"
                    onClick={() => { /* Add accreditation logic */ }}
                >
                    Add another accreditation
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
