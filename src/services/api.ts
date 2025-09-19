import axios from 'axios';

const API_BASE_URL = 'https://pminternshipbackendv2-latest.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface UserProfile {
  name: string;
  age: number;
  education: string;
  skills: string[];
  interests: string[];
  preferred_sectors: string[];
  preferred_locations: string[];
}

export interface InternshipRecommendation {
  title: string;
  sector: string;
  location: string;
  description: string;
  match_score?: number;
}

export interface HealthResponse {
  status: string;
  data_loaded: boolean;
  total_internships: number;
}

export const apiService = {
  // Get health status
  getHealth: async (): Promise<HealthResponse> => {
    const response = await api.get('/health');
    return response.data;
  },

  // Get recommendations
  getRecommendations: async (userProfile: UserProfile): Promise<InternshipRecommendation[]> => {
    const response = await api.post('/recommend', userProfile);
    return response.data;
  },

  // Get available sectors
  getSectors: async (): Promise<string[]> => {
    const response = await api.get('/sectors');
    return response.data.sectors;   // ✅
  },

  // Get available locations
  getLocations: async (): Promise<string[]> => {
    const response = await api.get('/locations');
    return response.data.locations; // ✅
  },

  // Get API info
  getApiInfo: async () => {
    const response = await api.get('/');
    return response.data;
  },
};

export default apiService;
