import { Document } from 'mongodb';

export interface Member extends Document {
  _id: string;
  name: string;
  email: string;
  password_hash?: string;
  team_id?: string;      // points to team's id
  voted_amount: number; // to restrict amounts of vote a member can use
  createdAt?: Date;
  updatedAt?: Date;
}

// TODO: encrypt sensitive data, not because for demonstration purpose, because i want to.
