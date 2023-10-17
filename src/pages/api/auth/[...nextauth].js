import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET || "aad37b9ff9d358f787c49a5159fbffaf",
  providers: [
    CredentialsProvider({
      name: "Login in with User/Pass",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials == null) return null;
        const { username, password } = credentials;
        try {
          const data = await axios.post(
            `${process.env.BACKEND_URL}/auth/login`,
            {
              username,
              password,
            }
          );
          return { ...data.data.user, jwt: data.data.accessToken };
        } catch (error) {
          // Sign In Fail
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user = token?.user ?? undefined;
      return Promise.resolve(session);
    },
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user?.id;
        token.jwt = user?.jwt;
        token.user = user;
      }

      return Promise.resolve(token);
    },
  },
});
