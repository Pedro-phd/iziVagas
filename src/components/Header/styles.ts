import { ILogoWrapper } from '@/types/Header'
import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  padding: 23px 0;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ToggleWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const Title = styled.h1`
  color: ${(props: IThemesProps) => props.theme.text};
  font-weight: ${(props: IThemesProps) => props.theme.bold};
  text-transform: uppercase;
  font-size: 54px;
  margin: 50px 0 0 0;
`

export const LogoWrapper = styled.div`
  cursor: ${(props: ILogoWrapper) => (props.homeLink ? `pointer` : `default`)};
`
