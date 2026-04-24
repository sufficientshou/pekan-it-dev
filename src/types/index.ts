/**
 * Global TypeScript type definitions
 * Add your shared types and interfaces here
 */

export interface FormData {
  // Add your form data types here
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
