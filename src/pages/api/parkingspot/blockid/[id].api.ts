import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface reqId {
  id?: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id }: reqId = req.query

  prisma.parkingSpot
    .findMany({
      where: {
        blockID: id
      }
    })
    .then((parkingspots) => {
      res.status(200).json(parkingspots)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
