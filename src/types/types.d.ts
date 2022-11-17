import { ChangeEvent } from 'react'

export type IClassName = {
  ClassName?: string
}
export type ParkingSpot = {
  id: string
  name: string
  block: string
  blockID: string
  occupied: boolean
  special: boolean
  old: boolean
}

export type Event =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>
