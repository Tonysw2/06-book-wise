// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ error: 'Method not allowed' })
  }

  const latestRatings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },

    include: {
      user: true,
      book: true,
    },
  })

  res.status(200).json(latestRatings)
}
