import clientPromise from "@/lib/mongodb";
import { Judge } from "models/judge";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const client = await clientPromise;
  const body = await request.json();
  const newJudge: Omit<Judge, "_id"> = {
    _id: uuidv4(),
    name: body.name,
    email: body.email,
    createdAt: new Date(),
  };
  await client
    .db(process.env.DATABASE_NAME)
    .collection("judge")
    .insertOne(newJudge);
  return Response.json(
    { message: "Successfully created a judge" },
    { status: 200 },
  );
}
