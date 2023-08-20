import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";





export const authOptions: AuthOptions = {
    // prismaadapter needs to accept client
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        // credentials provider
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }
                // find user who uses credentials, email
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                // check if user exists
                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials');
                }

                // check and compare if pw is correct
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                // check if pw is not correct
                if (!isCorrectPassword) {
                    throw new Error ('Invalid credentials');
                }

                return user;
            }
        })
    ],
    // if error happens or wrong type of callback -> redirect to '/'-page, d.h. main(auth)page
    pages: {
        signIn: '/',
    },
    // only allow debug when in development
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);