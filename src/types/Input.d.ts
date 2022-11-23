import { IThemesProps } from './styled'
import { Event } from './types'

export interface IInputItemProps {
  placeholder?: string
  onChange: (e: Event) => void
  type?: string
  width?: string
  options?: IInputSelectOptionsProps[]
  checked?: boolean
  value?: number
  disabled?: boolean
}

export interface IInputSelectOptionsProps {
  value: string
  name: string
}

export interface IInputButtonProps {
  onClick: () => void
  label: string
  width?: string
  disabled?: boolean
}

export interface IInputProps {
  inputArray: IInputItemProps[]
  hasButton?: boolean
  buttonContent?: IInputButtonProps[]
}

export interface ICustomInputProps extends IInputItemProps, IThemesProps {}

export interface IButtonProps extends IThemesProps {
  width: string
}

export interface ICustomCheckboxContainerProps {
  width?: string
}
