import { IParkingSpotCard, IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Wrapper = styled.main``

export const Content = styled.div`
  position: relative;
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

export const SpecialConent = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  backgroud: red;
  border-radius: 50%;
  background: url(https://i.imgur.com/8YbOVuI.png);
  background-size: contain;
  font-size: 0;
  position: absolute;
  top: -15px;
  right: -15px;
`
