import { useState } from 'react'
import { Disable } from '../Icons/Disable'
import * as S from './styles'

interface IParkingSpotCardProps {
  disabled: boolean
}

const ParkingSpotCard = ({ disabled }: IParkingSpotCardProps) => {
  const [selected, setSelected] = useState<boolean>(false)
  const handleClick = () => !disabled && setSelected(!selected)
  return (
    <S.Content disabled={disabled} selected={selected} onClick={handleClick}>
      {disabled ? <Disable /> : <S.Number>A4</S.Number>}
    </S.Content>
  )
}

export default ParkingSpotCard
