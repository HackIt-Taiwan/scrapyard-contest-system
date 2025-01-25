import { Document } from 'mongodb';

export interface Judge extends Document {
  _id: string;
  name: string;
  email: string;
  password_hash?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// TODO: encrypt sensitive data, not because for demonstration purpose, because i want to.
