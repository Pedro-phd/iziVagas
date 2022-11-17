import { ArrowLeft } from '../Icons/ArrowLeft'
import { ArrowRight } from '../Icons/ArrowRight'
import * as S from './styles'

export interface IBreadcrumbsProps {
  links: IBreadcrumbsLinksProps
  hasEdit?: boolean
}

interface IBreadcrumbsLinksProps {
  backLink: string
  editLink?: string
}

function Breadcrumbs({ links, hasEdit }: IBreadcrumbsProps) {
  return (
    <S.BreadcrumbsContainer hasEdit={hasEdit}>
      <S.CustomBreadcrumbs href={links.backLink}>
        <ArrowLeft />
        Voltar
      </S.CustomBreadcrumbs>
      <S.CustomBreadcrumbs href="/dashboard">Dashboard</S.CustomBreadcrumbs>
      {hasEdit && (
        <S.CustomBreadcrumbs href={links.editLink}>
          Editar
          <ArrowRight />
        </S.CustomBreadcrumbs>
      )}
    </S.BreadcrumbsContainer>
  )
}

export default Breadcrumbs
