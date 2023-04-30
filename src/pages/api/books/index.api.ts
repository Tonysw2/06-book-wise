// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ error: 'Mehthod not allowed' })
  }

  const { categoryId } = req.query

  if (categoryId === '1') {
    const filteredByCategoryBooks = await prisma.book.findMany()

    return res.status(200).json(filteredByCategoryBooks)
  }

  const categoriesOnBooks = await prisma.categoriesOnBooks.findMany({
    where: {
      categoryId: String(categoryId),
    },
  })

  const filteredByCategoryBooks = await prisma.book.findMany({
    where: {
      id: {
        in: categoriesOnBooks.map((category) => category.book_id),
      },
    },
  })

  res.status(200).json(filteredByCategoryBooks)
}
