import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'
import { IInputItemProps } from '.'

interface IInputProps extends IInputItemProps, IThemesProps {}
interface IButtonProps extends IThemesProps {
  width: string
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .custom-input {
    height: 35px;
    border: 1px solid #c3c3c3;
    border-radius: 5px;
    padding: 0 0 0 5px;
    margin: 0 0 10px 0;
    color: ${(props) => props.theme.text};
    background: transparent !important;
    ::placeholder {
      color: #c3c3c3;
    }
    &:focus {
      outline: 1px solid ${(props) => props.theme.switchBg};
    }
  }
`

export const CustomInput = styled.input<IInputProps>`
  width: ${(props) => props.width};
`
export const CustomSelect = styled.select<IInputProps>`
  width: ${(props) => props.width};
`

export const Button = styled.button<IButtonProps>`
  background: ${(props) => props.theme.switchBg};
  color: ${(props) => props.theme.switchDot};
  width: ${(props) => props.width};
  height: 35px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
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
