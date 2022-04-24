import { useTranslation } from 'react-i18next'
import * as S from './styles'

interface ICardBlock {
  letter: string
  number: number | string
  color: 'green' | 'yellow' | 'red'
}

const CardBlock = ({ letter, number, color }: ICardBlock) => {
  const { t } = useTranslation()
  return (
    <S.Wrapper>
      <S.Content color={color}>
        <S.Title>
          {t('block')} {letter}
        </S.Title>
        <S.Number>{number}</S.Number>
      </S.Content>
    </S.Wrapper>
  )
}

export default CardBlock
