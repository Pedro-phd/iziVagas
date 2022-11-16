import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

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
  max-width: 350px;
  height: 350px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  box-shadow: ${(props: IThemesProps) => props.theme.shadow};
  span {
    color: red;
    font-weight: bold;
  }
`
