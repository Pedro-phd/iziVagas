import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface reqId {
  ticketID?: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { ticketID }: reqId = req.query
  console.log(ticketID)
  prisma.ticket
    .findFirst({
      where: {
        id: ticketID
      }
    })
    .then((ticket) => {
      res.status(200).json(ticket)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
