import { z } from 'zod';

// API configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  ENDPOINTS: {
    ONBOARD: '/api/onboard',
    CONTACT: '/api/contact'
  }
} as const;

// API response types
export interface ApiResponse {
  success: boolean;
  error?: string;
}

// API error handling
export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Form validation schemas
export const onboardingSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  service: z.string().min(1, 'Service selection is required'),
  requirements: z.string().min(1, 'Requirements are required')
});