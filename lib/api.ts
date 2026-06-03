// API fetch functions for Google Sheets integration
// These are templates to be connected to actual API endpoints

import type { ApiResponse, CommunitySummary, PartnerSummary, SpaceQuizSummary, CBEDSummary, CBMDSummary, CBLSummary, SpaceDiagnosisSummary } from './types';

const API_BASE_URL = '/api/dashboard';

// Generic fetch wrapper with error handling
async function fetchWithErrorHandling<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Community data
export async function fetchCommunityData(): Promise<ApiResponse<CommunitySummary>> {
  return fetchWithErrorHandling<CommunitySummary>('/community');
}

// Partner data
export async function fetchPartnerData(): Promise<ApiResponse<PartnerSummary>> {
  return fetchWithErrorHandling<PartnerSummary>('/partners');
}

// Space Quiz data
export async function fetchSpaceQuizData(): Promise<ApiResponse<SpaceQuizSummary>> {
  return fetchWithErrorHandling<SpaceQuizSummary>('/space-quiz');
}

// CBED data
export async function fetchCBEDData(): Promise<ApiResponse<CBEDSummary>> {
  return fetchWithErrorHandling<CBEDSummary>('/cbed');
}

// CBMD data
export async function fetchCBMDData(): Promise<ApiResponse<CBMDSummary>> {
  return fetchWithErrorHandling<CBMDSummary>('/cbmd');
}

// CBL data
export async function fetchCBLData(): Promise<ApiResponse<CBLSummary>> {
  return fetchWithErrorHandling<CBLSummary>('/cbl');
}

// Space Diagnosis data
export async function fetchSpaceDiagnosisData(): Promise<ApiResponse<SpaceDiagnosisSummary>> {
  return fetchWithErrorHandling<SpaceDiagnosisSummary>('/space-diagnosis');
}

// Refresh all data
export async function refreshAllData(): Promise<{ success: boolean; updatedAt: string }> {
  const response = await fetch(`${API_BASE_URL}/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Refresh Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
