import { Blocks } from '@prisma/client'

export interface IBlocksOccupied extends Blocks {
  occupied: number
}

export interface StateBlocks {
  blocks: IBlocksOccupied[]
  error: boolean
  loading: boolean
  errorMessage: string
}
