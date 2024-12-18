import { apiRequest } from './api';
import { API_CONFIG } from '../config/api';

export interface OnboardingData {
  fullName: string;
  companyName: string;
  service: string;
  requirements: string;
}

export async function submitOnboardingForm(data: OnboardingData) {
  return apiRequest(API_CONFIG.ENDPOINTS.ONBOARD, {
    method: 'POST',
    body: data
  });
}