import prisma from '@/../prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  type ParkingSpot = {
    id?: string
    name: string
    block: string
    blockID: string
    occupied: boolean
    special: boolean
    old: boolean
  }

  const { id }: ParkingSpot = req.body
  const data: ParkingSpot = req.body
  delete data.id
  prisma.parkingSpot
    .update({
      where: {
        id: id
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
