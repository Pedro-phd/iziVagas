export interface IStateBlocksEdit {
  id: string
  name: string
  slots: number
}

export interface IStateBlocksRegister {
  name: string
  slots: number
}

export interface IStateParkingspotEdit {
  id: string
  name: string
  block: string
  blockID: string
  occupied: boolean
  special: boolean
  old: boolean
}

export interface IStateParkingspotRegister {
  blocks: Blocks[]
  error: boolean
  loading: boolean
  errorMessage: string
  name: string
  block: string
  blockId: string
  occupied: boolean
  special: boolean
  old: boolean
}

export interface IStatePayment {
  id: string
}

export interface IParkingSpot {
  id: string
  name: string
  block: string
  blockID: string
  occupied: boolean
  special: boolean
  old: boolean
}
