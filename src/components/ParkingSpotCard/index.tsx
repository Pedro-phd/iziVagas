import { IParkingSpotCardProps } from '@/types/ParkingSpotCard'
import { Disable } from '../Icons/Disable'
import { Old } from '../Icons/Old'
import { WheelChair } from '../Icons/WheelChair'
import * as S from './styles'

const ParkingSpotCard = ({
  disabled,
  label,
  onClick,
  selected,
  special,
  old
}: IParkingSpotCardProps) => {
  const specialParkingSpot = special || old
  return (
    <S.Content
      disabled={disabled}
      selected={selected}
      onClick={!disabled ? onClick : undefined}
    >
      {specialParkingSpot && (
        <S.SpecialContent>
          {old && <Old />}
          {special && <WheelChair />}
        </S.SpecialContent>
      )}

      {disabled ? <Disable /> : <S.Number>{label}</S.Number>}
    </S.Content>
  )
}

export default ParkingSpotCard
