import { redirect } from "next/navigation";
import pgClient from "../lib/db";

export default async function shortURL({params}: {params: params}) {
    const code = (await params).shortURL;
    const shortURL = code;
    let longURL = ""
    let clicks = null;
    let id = null;
    try {
        const data = await pgClient.query("select longurl, clicks, id from url where shorturl = $1;", [shortURL])
        longURL = data.rows[0].longurl
        clicks = data.rows[0].clicks
        id = data.rows[0].id
        clicks++;
        await pgClient.query("update url set clicks = $1 where id = $2;", [clicks, id])
    } catch (error) {
        console.log("database error: " + error)
    }

        redirect(longURL)

    return <div className="flex h-screen text-3xl font-mono items-center justify-center">
        redirecting....
        <br />
    </div>
}


interface params {
    shortURL: string
}