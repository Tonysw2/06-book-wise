// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ error: 'Method not allowed' })
  }

  try {
    const categories = await prisma.category.findMany()

    return res.status(200).json(categories)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
