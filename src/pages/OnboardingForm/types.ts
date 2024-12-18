export interface FormData {
  fullName: string;
  companyName: string;
  service: string;
  requirements: string;
}

export interface FormStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}