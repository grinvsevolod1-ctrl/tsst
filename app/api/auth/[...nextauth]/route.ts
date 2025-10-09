import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };