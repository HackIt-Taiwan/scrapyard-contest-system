import clientPromise from "@/lib/mongodb";
import { Member } from "models/member";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const client = await clientPromise;
  const body = await request.json();
  // TODO: add checks
  const newMember: Omit<Member, "_id"> = {
    _id: uuidv4(),
    name: body.name,
    email: body.email,
    voted_amount: 0,
    createdAt: new Date(),
  };
  await client
    .db(process.env.DATABASE_NAME)
    .collection("member")
    .insertOne(newMember);
  return Response.json(
    { message: "Successfully created a member" },
    { status: 200 },
  );
}
