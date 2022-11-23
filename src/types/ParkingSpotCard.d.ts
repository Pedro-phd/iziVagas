import { IThemesProps } from './styled'

export interface IParkingSpotCardProps {
  disabled: boolean
  label: string
  onClick: () => void
  selected: boolean
  special: boolean
  old: boolean
}

export interface IParkingSpotCard extends IThemesProps {
  selected: boolean
  disabled: boolean
}
