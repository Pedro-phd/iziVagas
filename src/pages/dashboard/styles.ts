import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CustomCard = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 20, 0.12);
  border-radius: 1rem;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  isolation: isolate;
  position: relative;
  width: 20rem;
  height: 10rem;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    box-shadow: ${(props: IThemesProps) => props.theme.shadow};
  }
  &:active {
    background: ${(props: IThemesProps) => props.theme.primary};
    & span {
      background: ${(props: IThemesProps) => props.theme.primaryDark};
    }
  }
`

export const Label = styled.h2`
  color: ${(props: IThemesProps) => props.theme.text};
`

export const LoginLabel = styled.h1`
  color: ${(props: IThemesProps) => props.theme.text};
`

export const Box = styled.span`
  position: absolute;
  width: 5rem;
  height: 2.75rem;
  left: 13rem;
  right: 0;
  bottom: 0;
  background: #dcb1f1;
  border-radius: 0.5rem 0.5rem 0 0;
  z-index: 0;
`

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props: IThemesProps) => props.theme.body};
  justify-content: center;
  height: 100vh;
  align-items: center;
`

export const LoginCard = styled.div`
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
  button {
    background-color: ${(props: IThemesProps) => props.theme.primary};
    font-weight: bold;
  }
`
