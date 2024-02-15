// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ error: 'Mehthod not allowed' })
  }

  try {
    const { bookId } = req.query as { bookId: string }

    const reviews = await prisma.rating.findMany({
      where: {
        book_id: bookId,
      },

      include: {
        user: true,
      },

      orderBy: {
        created_at: 'desc',
      },
    })

    return res.status(200).json(reviews)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
