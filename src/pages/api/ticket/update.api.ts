import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  type Ticket = {
    id?: string
    parkingSpotId: string
    paid: boolean
    entryDate: Date
    exitDate: Date
  }

  const { id }: Ticket = req.body
  const data: Ticket = req.body
  delete data.id

  prisma.ticket
    .update({
      where: {
        id: id
      },
      data: {
        ...data
      }
    })
    .then((ticket) => {
      res.status(200).json(ticket)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
