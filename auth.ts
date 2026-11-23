import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import dns from "node:dns";

// Prevent ETIMEDOUT on systems where IPv6 (NAT64) is returned but not routable
dns.setDefaultResultOrder("ipv4first");

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,

  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
});