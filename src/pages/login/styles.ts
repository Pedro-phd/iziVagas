import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'
import { Card, Title } from '../dashboard/styles'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props: IThemesProps) => props.theme.body};
  justify-content: center;
  height: 100vh;
  align-items: center;
`

export const LoginCard = styled(Card)`
  span {
    color: red;
    font-weight: bold;
  }
`

export const LoginTitle = styled(Title)`
  font-weight: 400;
`
