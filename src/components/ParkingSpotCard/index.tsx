import { useState } from 'react'
import { Disable } from '../Icons/Disable'
import * as S from './styles'

interface IParkingSpotCardProps {
  disabled: boolean
  label: string
}

const ParkingSpotCard = ({ disabled, label }: IParkingSpotCardProps) => {
  const [selected, setSelected] = useState<boolean>(false)
  const handleClick = () => !disabled && setSelected(!selected)
  return (
    <S.Content disabled={disabled} selected={selected} onClick={handleClick}>
      {disabled ? <Disable /> : <S.Number>{label}</S.Number>}
    </S.Content>
  )
}

export default ParkingSpotCard
