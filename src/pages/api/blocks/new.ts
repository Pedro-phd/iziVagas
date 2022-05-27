import { Blocks } from '.prisma/client'
import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data: Blocks = req.body

  prisma.blocks
    .create({
      data: {
        name: data.name,
        slots: data.slots
      }
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((Error: Error) => {
      res.status(500).send(Error.message)
    })
}
