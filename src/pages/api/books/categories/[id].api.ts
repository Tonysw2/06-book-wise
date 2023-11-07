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
    const { id } = req.query as { id: string }

    let allBooks

    if (id === '1') {
      allBooks = await prisma.book.findMany({
        include: {
          categories: {
            include: {
              category: true,
            },
          },
          ratings: {
            include: {
              user: true,
            },
          },
        },
      })
    } else {
      allBooks = await prisma.book.findMany({
        where: {
          categories: {
            some: {
              categoryId: id,
            },
          },
        },

        include: {
          categories: {
            include: {
              category: true,
            },
          },
          ratings: {
            include: {
              user: true,
            },
          },
        },
      })
    }

    const booksAvgRatings = await prisma.rating.groupBy({
      by: ['book_id'],
      _avg: {
        rate: true,
      },
    })

    const books = allBooks.map((book) => {
      const avgRatingData = booksAvgRatings.find(
        (rating) => rating.book_id === book.id,
      )

      return {
        ...book,
        avgRating: avgRatingData ? avgRatingData._avg.rate : null,
      }
    })

    return res.status(200).json(books)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
