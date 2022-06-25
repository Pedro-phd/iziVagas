import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface reqId {
  id?: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id }: reqId = await req.query
  console.log('aa', id)
  prisma.ticket
    .findFirst({
      where: {
        id: id
      }
    })
    .then((ticket) => {
      res.status(200).json(ticket)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
