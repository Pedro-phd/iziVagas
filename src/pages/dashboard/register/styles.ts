import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Text = styled.h3`
  color: ${(props: IThemesProps) => props.theme.text};
`

export const SubTitle = styled.h2`
  color: ${(props: IThemesProps) => props.theme.text};
`

export const Title = styled.h1`
  color: ${(props: IThemesProps) => props.theme.text};
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props: IThemesProps) => props.theme.body};
  justify-content: center;
  height: 100vh;
  align-items: center;
`

export const Card = styled.div`
  width: 50%;
  max-width: 450px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  box-shadow: ${(props: IThemesProps) => props.theme.shadow};
  button {
    background-color: ${(props: IThemesProps) => props.theme.primary};
    font-weight: bold;
  }
  padding: 20px;
`

export const Breadcrumbs = styled.a`
  display: flex;
  width: 50px;
  align-items: center;
  font-weight: ${(props: IThemesProps) => props.theme.bold}
  color: ${(props: IThemesProps) => props.theme.text}
`

export const BreadcrumbsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
