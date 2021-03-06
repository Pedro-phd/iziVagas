import { IParkingSpotCard, IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Wrapper = styled.main``

export const Content = styled.div`
  width: 150px;
  height: 150px;
  background: ${(props: IParkingSpotCard) =>
    props.selected
      ? props.theme.yellowSelected
      : props.disabled
      ? props.theme.cardBox
      : props.theme.green};
  color: ${(props: IParkingSpotCard) =>
    props.selected ? props.theme.primary : '#fff'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${(props: IThemesProps) => props.theme.shadow};
  cursor: ${(props: IParkingSpotCard) =>
    props.disabled ? 'default' : 'pointer'};
`

export const Number = styled.p`
  font-size: 75px;
`
