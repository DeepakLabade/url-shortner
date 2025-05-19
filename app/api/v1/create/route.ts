import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import pgClient from "@/app/lib/db";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const longURL = data.longURL;
    const shortURL = nanoid(7)
    console.log(shortURL)
    await pgClient.query("INSERT INTO url (longurl, shorturl) VALUES ($1, $2);", [longURL, shortURL])

    return NextResponse.json({
        shortURL: "http://localhost:3000/" + shortURL
    })
}