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

  const { query } = req.query

  const filteredBooksByQuery = await prisma.book.findMany({
    where: {
      OR: [{ author: { contains: String(query) } }],
    },
  })
  console.log(filteredBooksByQuery)

  if (filteredBooksByQuery.length < 1) {
    return res
      .status(404)
      .json({ message: 'No books found with this name or author.' })
  }

  res.status(200).json(filteredBooksByQuery)
}
