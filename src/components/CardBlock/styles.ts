import { IColorIndicator, IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 270px;
  height: 250px;
  display: block;
  border-radius: 10px;
  box-shadow: ${(props: IThemesProps) => props.theme.shadow};
`

export const Content = styled.div`
  width: 240px;
  height: 250px;
  border-radius: 10px;
  position: relative;
  background: ${(props: IThemesProps) => props.theme.cardBox};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &::after {
    content: '';
    border-radius: 10px;
    width: 270px;
    height: 250px;
    background: ${(props: IColorIndicator) => props.theme[props.color]};
    position: absolute;
    z-index: -1;
    right: -30px;
    top: 0;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: normal;
  color: ${(props: IThemesProps) => props.theme.text};
`

export const Number = styled.p`
  font-size: 135px;
  color: ${(props: IThemesProps) => props.theme.text};
`
