// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
    const books = await prisma.book.findMany({
      orderBy: {
        ratings: {
          _count: 'desc',
        },
      },

      include: {
        ratings: true,
      },

      take: 4,
    })

    const booksAvgRating = await prisma.rating.groupBy({
      by: ['book_id'],

      where: {
        book_id: {
          in: books.map((book) => book.id),
        },
      },

      _avg: {
        rate: true,
      },
    })

    const popularBooks = books.map((book) => {
      const bookAvgRating = booksAvgRating.find(
        (bookAvg) => bookAvg.book_id === book.id,
      )

      return {
        ...book,
        avgRating: bookAvgRating?._avg.rate,
      }
    })

    return res.status(200).json(popularBooks)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
