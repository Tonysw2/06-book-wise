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
    const categories = await prisma.category.findMany()

    return res.status(200).json(categories)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
