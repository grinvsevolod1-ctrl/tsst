// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLECLIENTID!,
      clientSecret: process.env.GOOGLECLIENTSECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUBCLIENTID!,
      clientSecret: process.env.GITHUBCLIENTSECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };