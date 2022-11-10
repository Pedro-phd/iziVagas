import { Disable } from '../Icons/Disable'
import * as S from './styles'

interface IParkingSpotCardProps {
  disabled: boolean
  label: string
  onClick: () => void
  selected: boolean
  special: boolean
  old: boolean
}

const ParkingSpotCard = ({
  disabled,
  label,
  onClick,
  selected,
  special,
  old
}: IParkingSpotCardProps) => {
  console.log(special)
  return (
    <S.Content
      disabled={disabled}
      selected={selected}
      onClick={!disabled ? onClick : undefined}
    >
      {special && <S.SpecialConent>VAGA ESPECIAL</S.SpecialConent>}
      {old && <S.SpecialConent>VAGA PARA IDOSO</S.SpecialConent>}
      {disabled ? <Disable /> : <S.Number>{label}</S.Number>}
    </S.Content>
  )
}

export default ParkingSpotCard
