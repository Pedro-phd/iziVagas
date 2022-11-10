import { Ticket } from '.prisma/client'
import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data: Ticket = req.body
  prisma.parkingSpot
    .delete({
      where: {
        id: data.id
      }
    })
    .then((parkingSpot) => {
      res.status(200).json(parkingSpot)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
