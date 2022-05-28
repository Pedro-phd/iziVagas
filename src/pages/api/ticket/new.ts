import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  prisma.ticket
    .create({
      data: {
        parkingSpotId: '',
        paid: false,
        exitDate: new Date()
      }
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
