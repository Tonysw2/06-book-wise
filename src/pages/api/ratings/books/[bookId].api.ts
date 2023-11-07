// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'
import { ZodError, z } from 'zod'
import { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Mehthod not allowed' })
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  try {
    const { bookId } = req.query as { bookId: string }

    const alreadyRated = await prisma.rating.findFirst({
      where: {
        user_id: String(session.user.id),
        book_id: bookId,
      },
    })

    if (alreadyRated) {
      return res.status(400).json({ message: 'Você já avaliou esse livro.' })
    }

    const bodySchema = z.object({
      rate: z
        .number()
        .min(1, { message: 'Avaliação mínima permitida é 1.' })
        .max(5, { message: 'Avaliação mínima permitida é 5.' }),
      description: z
        .string()
        .min(1, {
          message: 'Você precisa escrever algo para poder avaliar este livro.',
        })
        .max(450, {
          message: 'O número de caracteres ultrapassou o esperado.',
        }),
    })

    const { rate, description } = bodySchema.parse(req.body)

    await prisma.rating.create({
      data: {
        rate,
        description,
        book_id: bookId,
        user_id: String(session.user.id),
      },
    })

    res.status(201).end()
  } catch (error) {
    console.log(error)

    const isZodError = error instanceof ZodError

    if (isZodError) {
      return res.status(400).json({ message: error.errors[0].message })
    }

    return res.status(400).end()
  }
}
