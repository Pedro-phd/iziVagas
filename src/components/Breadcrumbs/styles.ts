import styled from 'styled-components'

interface IBreadcrumbsContainerProps {
  hasEdit?: boolean
}

export const CustomBreadcrumbs = styled.a`
  display: flex;
  width: 50px;
  align-items: center;
  font-weight: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.text};
`

export const BreadcrumbsContainer = styled.div<IBreadcrumbsContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.hasEdit ? `space-between` : `space-around`};
`
