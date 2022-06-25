import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface reqId {
  id?: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id }: reqId = req.query
  console.log(id)
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
