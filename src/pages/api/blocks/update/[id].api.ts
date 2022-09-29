import { Ticket } from '.prisma/client'
import prisma from '@/../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data: Ticket = req.body
  prisma.blocks
    .update({
      where: {
        id: data.id
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
