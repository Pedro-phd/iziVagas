import { Text } from '@/pages/dashboard/styles'
import { IInputProps } from '@/types/Input'
import * as S from './styles'

function Input({ inputArray, hasButton, buttonContent }: IInputProps) {
  return (
    <S.Form>
      {inputArray.map((inputItem, index) => {
        return inputItem.type !== 'select' && inputItem.type !== 'checkbox' ? (
          <S.CustomInput
            className="custom-input"
            key={index}
            placeholder={inputItem.placeholder}
            onChange={inputItem.onChange}
            type={inputItem.type ? inputItem.type : 'text'}
            width={inputItem.width ? inputItem.width : 'auto'}
            value={(inputItem.value !== 0 && inputItem.value) as number}
            disabled={inputItem.disabled}
          />
        ) : inputItem.type === 'select' ? (
          <S.CustomSelect
            className="custom-input"
            key={index}
            onChange={inputItem.onChange}
            width={inputItem.width ? inputItem.width : 'auto'}
            disabled={inputItem.disabled}
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
          <S.CustomCheckboxContainer
            width={inputItem.width ? inputItem.width : 'auto'}
            key={index}
          >
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
            disabled={buttonItem.disabled}
          >
            <p>{buttonItem.label}</p>
          </S.Button>
        ))}
    </S.Form>
  )
}

export default Input
