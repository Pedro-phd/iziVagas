import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  prisma.blocks
    .findMany()
    .then(async (blocks) => {
      const newBlocks = await Promise.all(
        blocks.map(async (block) => {
          const occupied = await prisma.parkingSpot.findMany({
            where: {
              blockID: block.id,
              occupied: true
            }
          })
          return { ...block, occupied: occupied.length }
        })
      )
      res.status(200).json(newBlocks)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
