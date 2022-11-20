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
