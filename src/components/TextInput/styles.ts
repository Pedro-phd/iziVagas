import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'
import { IInputTextItemProps } from '.'

interface IInputProps extends IInputTextItemProps, IThemesProps {}
interface IButtonProps extends IThemesProps {
  width: string
}

export const Input = styled.input<IInputProps>`
  height: 35px;
  width: ${(props) => props.width}%;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  padding: 0 0 0 5px;
  margin: 0 0 10px 0;
  background: transparent !important;
  color: ${(props) => props.theme.text};
  ::placeholder {
    color: #c3c3c3;
  }
  &:focus {
    outline: 1px solid ${(props) => props.theme.switchBg};
  }
`

export const Button = styled.button<IButtonProps>`
  background: ${(props) => props.theme.switchBg};
  color: ${(props) => props.theme.switchDot};
  width: ${(props) => props.width}px;
  height: 35px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.primaryLight};
    color: #fff;
  }
  &:active {
    background: ${(props) => props.theme.primaryDark};
    color: #fff;
  }
  p {
    font-weight: ${(props) => props.theme.bold};
  }
`
