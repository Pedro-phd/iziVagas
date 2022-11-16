import { Event } from '@/types/types'
import * as S from './styles'

export interface IInputTextItemProps {
  placeholder: string
  onChange: (e: Event) => void
  type?: string
  width?: string
}

export interface IInputButtonProps {
  onClick: () => void
  label: string
  width?: string
}

export interface IInputTextProps {
  inputArray: Array<IInputTextItemProps>
  hasButton?: boolean
  buttonContent?: IInputButtonProps
}

function InputText({ inputArray, hasButton, buttonContent }: IInputTextProps) {
  return (
    <>
      {inputArray.map((inputItem: IInputTextItemProps, index: number) => (
        <S.Input
          key={index}
          placeholder={inputItem.placeholder}
          onChange={inputItem.onChange}
          type={inputItem.type ? inputItem.type : 'text'}
          width={inputItem.width ? inputItem.width : 'auto'}
        />
      ))}
      {hasButton && (
        <S.Button
          onClick={buttonContent?.onClick}
          width={buttonContent?.width ? buttonContent.width : '100'}
        >
          <p>{buttonContent?.label}</p>
        </S.Button>
      )}
    </>
  )
}

export default InputText
