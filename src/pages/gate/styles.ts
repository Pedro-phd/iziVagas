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

export const FeedbackMessage = styled.h1``
