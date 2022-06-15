import { Disable } from '../Icons/Disable'
import * as S from './styles'

interface IParkingSpotCardProps {
  disabled: boolean
  label: string
  onClick: () => void
  selected: boolean
}

const ParkingSpotCard = ({
  disabled,
  label,
  onClick,
  selected
}: IParkingSpotCardProps) => {
  return (
    <S.Content
      disabled={disabled}
      selected={selected}
      onClick={!disabled ? onClick : undefined}
    >
      {disabled ? <Disable /> : <S.Number>{label}</S.Number>}
    </S.Content>
  )
}

export default ParkingSpotCard
