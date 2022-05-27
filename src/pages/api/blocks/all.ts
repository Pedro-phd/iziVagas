import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  prisma.blocks
    .findMany()
    .then((blocks) => {
      res.status(200).json(blocks)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
