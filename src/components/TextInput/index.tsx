import { Text } from '@/pages/dashboard/styles'
import { Event } from '@/types/types'
import * as S from './styles'

export interface IInputItemProps {
  placeholder?: string
  onChange: (e: Event) => void
  type?: string
  width?: string
  options?: Array<IInputSelectOptionsProps>
  checked?: boolean
}

export interface IInputSelectOptionsProps {
  value: string
  name: string
}

export interface IInputButtonProps {
  onClick: () => void
  label: string
  width?: string
}

export interface IInputProps {
  inputArray: Array<IInputItemProps>
  hasButton?: boolean
  buttonContent?: Array<IInputButtonProps>
}

function Input({ inputArray, hasButton, buttonContent }: IInputProps) {
  return (
    <S.Form>
      {inputArray.map((inputItem: IInputItemProps, index: number) => {
        return inputItem.type !== 'select' && inputItem.type !== 'checkbox' ? (
          <S.CustomInput
            className="custom-input"
            key={index}
            placeholder={inputItem.placeholder}
            onChange={inputItem.onChange}
            type={inputItem.type ? inputItem.type : 'text'}
            width={inputItem.width ? inputItem.width : 'auto'}
          />
        ) : inputItem.type === 'select' ? (
          <S.CustomSelect
            className="custom-input"
            key={index}
            onChange={inputItem.onChange}
            width={inputItem.width ? inputItem.width : 'auto'}
          >
            <option selected disabled>
              {inputItem.placeholder}
            </option>
            {inputItem.options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            ))}
          </S.CustomSelect>
        ) : (
          <S.CustomCheckboxContainer key={index}>
            <S.CustomCheckbox
              type="checkbox"
              checked={inputItem.checked}
              onChange={inputItem.onChange}
            />
            <Text>{inputItem.placeholder}</Text>
          </S.CustomCheckboxContainer>
        )
      })}
      {hasButton &&
        buttonContent?.map((buttonItem, index) => (
          <S.Button
            key={index}
            onClick={buttonItem.onClick}
            width={buttonItem.width ? buttonItem.width : '100px'}
          >
            <p>{buttonItem.label}</p>
          </S.Button>
        ))}
    </S.Form>
  )
}

export default Input
