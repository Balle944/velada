export interface Fighter {
  id: string;
  name: string;
  alias?: string;
  country: string;
  age: number;
  height: number; // in cm
  weight: number; // in kg
  record?: string;
  style?: string;
  bio: string;
  quote?: string;
  imageUrl: string;
}

export interface Fight {
  id: string;
  fighter1Id: string;
  fighter2Id: string;
  isMainEvent: boolean;
  description: string;
  order: number;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  pastParticipant: boolean;
  year?: number;
}