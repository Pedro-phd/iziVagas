import { ChangeEvent } from 'react'

export type Event =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>

export interface IValidateParkingSpot {
  id: string
  occupied?: boolean
}

export interface ISelecParkingSpot {
  parkingSpotId: string
  id: string
}

export interface IValidateTicket {
  id: string
  parkingSpotId?: string
  paid?: boolean
  entryDate?: string
  exitDate?: string
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

export interface IStateBlocks {
  ParkingSpot: IParkingSpot[]
  error: boolean
  loading: boolean
  validateLoading: boolean
  errorMessage: string
  idSelected: string
  ticketId: string
}
