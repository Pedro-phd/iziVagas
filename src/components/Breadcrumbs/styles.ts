import styled from 'styled-components'

interface IBreadcrumbsContainerProps {
  editLink?: string
}

export const CustomBreadcrumbs = styled.div`
  display: flex;
  width: 50px;
  align-items: center;
  font-weight: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.text};
  cursor: pointer;
`

export const BreadcrumbsContainer = styled.div<IBreadcrumbsContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.editLink ? `space-between` : `space-around`};
`
