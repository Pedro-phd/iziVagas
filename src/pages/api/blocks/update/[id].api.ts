import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  interface Blocks {
    id?: string
    name: string
    slots: number
    occupied?: number
  }

  const { id }: Blocks = req.body
  const data: Blocks = req.body
  delete data.id
  delete data.occupied
  prisma.blocks
    .update({
      where: {
        id: id
      },
      data: {
        ...data
      }
    })
    .then((blocks) => {
      res.status(200).json(blocks)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
