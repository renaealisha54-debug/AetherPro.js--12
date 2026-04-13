export interface Project {
  id: string;
  name: string;
  tier: 'sketch' | 'script' | 'pro'; // Matches your mode state
  code: string;
  lastUpdated: string;
  status: string;
}
