import { PrismaAdapter } from '@/lib/auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import GithubProvider, { GithubProfile } from 'next-auth/providers/github'
import { NextApiRequest, NextApiResponse } from 'next'
import { env } from '@/env'

export function buildNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(),

    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            avatar_url: profile.picture,
          }
        },
      }),

      GithubProvider({
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
        profile(profile: GithubProfile) {
          return {
            id: profile.id,
            name: profile.name!,
            email: profile.email!,
            avatar_url: profile.avatar_url,
          }
        },
      }),
    ],

    callbacks: {
      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      },

      redirect({ url, baseUrl }) {
        if (url.length > baseUrl.length) {
          return baseUrl
        }

        return `${baseUrl}/introduction`
      },
    },
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}
