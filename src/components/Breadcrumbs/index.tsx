import { useRouter } from 'next/router'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { ArrowRight } from '../Icons/ArrowRight'
import * as S from './styles'

export interface IBreadcrumbsProps {
  editLink?: string
}

function Breadcrumbs({ editLink }: IBreadcrumbsProps) {
  const router = useRouter()
  return (
    <S.BreadcrumbsContainer editLink={editLink}>
      <S.CustomBreadcrumbs onClick={() => router.back()}>
        <ArrowLeft />
        Voltar
      </S.CustomBreadcrumbs>
      <S.CustomBreadcrumbs onClick={() => router.push('/dashboard')}>
        Dashboard
      </S.CustomBreadcrumbs>
      {editLink && (
        <S.CustomBreadcrumbs onClick={() => router.push(editLink as string)}>
          Editar
          <ArrowRight />
        </S.CustomBreadcrumbs>
      )}
    </S.BreadcrumbsContainer>
  )
}

export default Breadcrumbs
