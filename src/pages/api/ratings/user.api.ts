// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
    return res
      .status(404)
      .json({ message: 'Você precisa estar logado primeiro.' })
  }

  try {
    const userRatings = await prisma.rating.findMany({
      where: {
        user: {
          email: session.user.email,
        },
      },

      include: {
        book: {
          include: {
            categories: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    })

    const reviewedBooks = userRatings.length
    const readAuthors = new Set(userRatings.map((rating) => rating.book.author))
      .size
    const pagesRead =
      userRatings.length > 0
        ? userRatings.reduce((acc, rating) => acc + rating.book.total_pages, 0)
        : 0

    const countCategories: any = {}

    userRatings.forEach((rating) => {
      rating.book.categories.forEach((category) => {
        countCategories[category.category.name] = countCategories[
          category.category.name
        ]
          ? countCategories[category.category.name] + 1
          : (countCategories[category.category.name] = 1)
      })
    })

    const countCategoriesKeys = Object.keys(countCategories)

    const mostReadCategory =
      countCategoriesKeys.length > 0
        ? countCategoriesKeys.reduce((a, b) =>
            countCategories[a] > countCategories[b] ? a : b,
          )
        : 'Nenhuma'

    return res.status(200).json({
      userRatings,
      reviewedBooks,
      readAuthors,
      pagesRead,
      mostReadCategory,
    })
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
