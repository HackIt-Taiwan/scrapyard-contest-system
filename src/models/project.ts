import { Document } from 'mongodb';

export interface Project extends Document {
  _id: string;
  name: string;
  description: string;
  creativity_score: number;   // 50% of total score
  completeness_score: number; // 30% of total score
  presentation_score: number; // 20% of total score
  votes_amount: number;       // separated from judge's score, different prizes as well!
  createdAt?: Date;
  updatedAt?: Date;
}
