import { ParkingSpot } from '.prisma/client'
import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data: ParkingSpot = req.body

  prisma.parkingSpot
    .create({
      data: {
        block: data.block,
        blockID: data.blockID,
        name: data.name,
        occupied: false,
        special: data.special,
        old: data.old as boolean
      }
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
