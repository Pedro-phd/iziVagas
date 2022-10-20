import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

interface WrapperProps extends IThemesProps {
  validated: boolean | undefined
}

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props: WrapperProps) =>
    props.validated === true
      ? props.theme.green
      : props.validated === false
      ? props.theme.red
      : props.theme.body};
`

export const Card = styled.div`
  width: 50%;
  max-width: 450px;
  height: 450px;
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
`

export const FeedbackMessage = styled.h1``
