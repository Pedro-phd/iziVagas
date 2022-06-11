import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  padding: 23px 0;
  svg {
    margin: 0 0 50px 0;
  }
`

export const row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const toggles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.h1`
  color: ${(props: IThemesProps) => props.theme.text};
  font-weight: ${(props: IThemesProps) => props.theme.bold};
  text-transform: uppercase;
  font-size: 54px;
`
