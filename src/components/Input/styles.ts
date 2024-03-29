import {
  IButtonProps,
  ICustomCheckboxContainerProps,
  ICustomInputProps
} from '@/types/Input'
import styled from 'styled-components'

export const Form = styled.div`
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
    option {
      background: ${(props) => props.theme.body};
    }
  }
`

export const CustomInput = styled.input<ICustomInputProps>`
  width: ${(props) => props.width};
`
export const CustomSelect = styled.select<ICustomInputProps>`
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
  p {
    font-weight: ${(props) => props.theme.bold};
  }
  :not(:disabled) {
    &:hover {
      background: ${(props) => props.theme.primaryLight};
      color: #fff;
    }
    &:active {
      background: ${(props) => props.theme.primaryDark};
      color: #fff;
    }
  }
  :disabled {
    opacity: 0.1;
    cursor: default;
  }
`

export const CustomCheckbox = styled.input``

export const CustomCheckboxContainer = styled.div<ICustomCheckboxContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin: 5px 0 0 0;
  width: ${(props) => props.width};
`
