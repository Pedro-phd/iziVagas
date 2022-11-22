import { IConfirmButtonProps } from '@/types/ConfirmButton'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ConfirmButton = ({ id }: IConfirmButtonProps) => {
  const { t } = useTranslation()
  return (
    <S.Button onClick={() => console.log(id)}>{t('confirmButton')}</S.Button>
  )
}
export default ConfirmButton
