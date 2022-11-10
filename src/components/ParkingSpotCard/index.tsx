import { Disable } from '../Icons/Disable'
import { Special } from '../Icons/Special'
import * as S from './styles'

interface IParkingSpotCardProps {
  disabled: boolean
  label: string
  onClick: () => void
  selected: boolean
  special: boolean
}

const ParkingSpotCard = ({
  disabled,
  label,
  onClick,
  selected,
  special
}: IParkingSpotCardProps) => {
  console.log(special)
  return (
    <S.Content
      disabled={disabled}
      selected={selected}
      onClick={!disabled ? onClick : undefined}
    >
      {special && (
        <S.SpecialContent>
          <Special />
        </S.SpecialContent>
      )}
      {disabled ? <Disable /> : <S.Number>{label}</S.Number>}
    </S.Content>
  )
}

export default ParkingSpotCard
