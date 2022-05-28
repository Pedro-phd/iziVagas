import { useTranslation } from 'react-i18next'
import * as S from './styles'
import { IClassName } from '@/types/types'

const Indicator = ({ ClassName }: IClassName) => {
  const { t } = useTranslation()
  return (
    <S.Wrapper className={ClassName}>
      <S.IndicatorColor color={'green'} />
      <p>{t('indicator.many')}</p>
      <S.IndicatorColor color={'yellow'} />
      <p>{t('indicator.regular')}</p>
      <S.IndicatorColor color={'red'} />
      <p>{t('indicator.few')}</p>
    </S.Wrapper>
  )
}

export default Indicator
