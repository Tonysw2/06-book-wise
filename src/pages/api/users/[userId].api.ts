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

  const { userId } = req.query as { userId: string }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
