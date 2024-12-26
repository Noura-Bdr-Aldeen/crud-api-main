import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: "openid email profile",
                    access_type: "offline",
                    prompt: "consent",
                },
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
                email: { label: "Email", type: "email" }
            },
            async authorize(credentials, req) {
                // Implement your authorization logic here
                if (!credentials) return null;

                // Check if the credentials are valid
                // This is where you would typically check against your database
                const user = { id: "1", name: credentials.username, email: credentials.email };

                return user;
            }
        })
    ],
    
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin'
    }
    
};

