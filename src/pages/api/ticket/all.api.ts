import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  prisma.ticket
    .findMany()
    .then((tickets) => {
      res.status(200).json(tickets)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
