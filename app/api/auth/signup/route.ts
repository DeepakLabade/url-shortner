import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import pgClient from "@/app/lib/db";

export async function POST(request: NextRequest) {
    const {username, email, password} =  await request.json()
    const hashedPassword = await bcrypt.hash(password, 13)

    await pgClient.query('INSERT INTO "user" (username, password, email) VALUES ($1, $2, $3);', [username, hashedPassword, email]);

    return NextResponse.json({
        msg: "done"
    })
}