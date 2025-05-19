import { redirect } from "next/navigation";
import pgClient from "../lib/db";

export default async function shortURL({params}: {params: params}) {
    const code = params.shortURL;
    const shortURL = code;
    let longURL = ""
    try {
        const data = await pgClient.query("select longurl from url where shorturl = $1;", [shortURL])
        longURL = data.rows[0].longurl
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