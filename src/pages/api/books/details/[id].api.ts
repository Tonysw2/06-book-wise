import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ error: 'Mehthod not allowed' })
  }

  try {
    const { id } = req.query as { id: string }

    const book = await prisma.book.findUnique({
      where: { id },

      include: {
        categories: {
          include: {
            category: true,
          },
        },
        ratings: true,
      },
    })

    return res.status(200).json(book)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
