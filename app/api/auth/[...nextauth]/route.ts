import pgClient from "@/app/lib/db";
import bcrypt from "bcrypt"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; 

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password", placeholder: "********"},
          },
          async authorize(credentials, req) {
            const data = await pgClient.query('select username, password, email from "user" where username = $1', [credentials?.username]);
            const user = {
                name: data.rows[0].username,
                email: data.rows[0].email,
            }
            console.log(user)

            if (user) {
                const isPasswordCorrect = bcrypt.compare(credentials?.password, data.rows[0].password)
                if(isPasswordCorrect){
                    return null
                }
              return user
            } else {
              return null
            }
          }
        })
      ],
    secret: process.env.AUTH_SECRET,      
    pages: {
        signIn: "/auth/sigin"
    }
})

export {handler as GET, handler as POST}