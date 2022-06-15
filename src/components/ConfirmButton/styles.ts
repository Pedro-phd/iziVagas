import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Button = styled.button`
  width: 450px;
  height: 60px;
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: ${(props: IThemesProps) => props.theme.buttonTextColor};
  background: ${(props: IThemesProps) => props.theme.buttonColor};
  font-weight: ${(props: IThemesProps) => props.theme.bold};
  font-size: 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`
