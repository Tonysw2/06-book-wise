import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ error: 'Mehthod not allowed' })
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(404).json({
      message: 'Você precisa estar logado para obter essa informação.',
    })
  }

  try {
    const lastRead = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },

      include: {
        ratings: {
          orderBy: {
            created_at: 'desc',
          },

          include: {
            book: true,
          },

          take: 1,
        },
      },
    })

    return res.status(200).json(lastRead)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
