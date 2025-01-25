import clientPromise from "@/lib/mongodb";
import { Project } from "models/project";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const client = await clientPromise;
  const body = await request.json();
  // TODO: add checks
  const newProject: Omit<Project, "_id"> = {
    _id: uuidv4(),
    name: body.name,
    description: body.description,
    creativity_score: 0,
    completeness_score: 0,
    presentation_score: 0,
    votes_amount: 0,
    createdAt: new Date(),
  };
  await client
    .db(process.env.DATABASE_NAME)
    .collection("project")
    .insertOne(newProject);
  return Response.json(
    { message: "Successfully created a project" },
    { status: 200 },
  );
}
