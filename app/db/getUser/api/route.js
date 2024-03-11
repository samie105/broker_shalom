import { NextResponse } from "next/server";
import UserModel from "../../../../mongodbConnect";

export const revalidate = true;

export async function GET() {
  const users = await UserModel.find({});
  if (users.length > 1) {
    return NextResponse.json({ users });
  } else {
    return NextResponse.json({ error: "no user found" });
  }
}
