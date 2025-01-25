import clientPromise from "@/lib/mongodb";
import { Team } from "models/team";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const client = await clientPromise;
  const body = await request.json();
  // TODO: add checks
  const newTeam: Omit<Team, "_id"> = {
    _id: uuidv4(),
    name: body.name,
    members: [body.uuid1, body.uuid2, body.uuid3],
    createdAt: new Date(),
  };
  await client
    .db(process.env.DATABASE_NAME)
    .collection("team")
    .insertOne(newTeam);
  return NextResponse.json(
    { message: "Successfully created a team" },
    { status: 200 },
  );
}
