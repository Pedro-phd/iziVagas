import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  prisma.parkingSpot
    .findMany()
    .then((parkingspots) => {
      res.status(200).json(parkingspots)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
