import { Document } from 'mongodb';

export interface Team extends Document {
  _id: string;
  name: string;
  members: Array<string>; // points to members' id
  project_id?: string;    // points to a team's project id
  createdAt?: Date;
  updatedAt?: Date;
}
