import prisma from '@/../prisma/client'
import { ParkingSpot } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data: ParkingSpot = req.body
  prisma.parkingSpot
    .update({
      where: {
        id: data.id
      },
      data: {
        ...data
      }
    })
    .then((parkingSpot) => {
      res.status(200).json(parkingSpot)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
