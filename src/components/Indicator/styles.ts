import { IColorIndicator } from '@/types/CardBlock'
import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  p {
    font-size: 30px;
    margin: 0 5px;
    color: ${(props: IThemesProps) => props.theme.text};
  }
`

export const IndicatorColor = styled.div`
  background: ${(props: IColorIndicator) => props.theme[props.color]};
  width: 25px;
  height: 25px;
  margin: 0 5px;
`
