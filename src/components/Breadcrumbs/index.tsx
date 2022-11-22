import { IBreadcrumbsProps } from '@/types/Breadcrumbs'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { ArrowRight } from '../Icons/ArrowRight'
import * as S from './styles'
function Breadcrumbs({ editLink }: IBreadcrumbsProps) {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <S.BreadcrumbsContainer>
      <S.CustomBreadcrumbs onClick={() => router.back()}>
        <ArrowLeft />
        {t('goBack')}
      </S.CustomBreadcrumbs>
      {editLink && (
        <S.CustomBreadcrumbs onClick={() => router.push(editLink as string)}>
          {t('edit')}
          <ArrowRight />
        </S.CustomBreadcrumbs>
      )}
    </S.BreadcrumbsContainer>
  )
}

export default Breadcrumbs
