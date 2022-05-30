import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface reqId {
  blockID?: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { blockID }: reqId = req.query

  prisma.parkingSpot
    .findMany({
      where: {
        blockID: blockID
      }
    })
    .then((parkingspots) => {
      res.status(200).json(parkingspots)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
