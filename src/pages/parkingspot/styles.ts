import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1170px;
  margin: 0 auto;
  & > .indicator {
    margin-left: auto;
    margin-bottom: 15px;
  }
`

export const SlotsContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px 150px;
  grid-gap: 55px;
  max-width: 1170px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-weight: ${(props: IThemesProps) => props.theme.bold};
  font-size: 55px;
  color: ${(props: IThemesProps) => props.theme.text};
`

export const TextContainer = styled.div`
  padding: 35px 0 0 0;
`

export const Text = styled.p`
  font-size: 20px;
  color: #878787;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 0 0 0;
  align-items: center;
`

export const Input = styled.input`
  height: 25px;
  width: 50%;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  padding: 0 0 0 5px;
  margin: 0 0 10px 0;
  background: ${(props: IThemesProps) => props.theme.body};
  color: ${(props: IThemesProps) => props.theme.text};
  ::placeholder {
    color: #c3c3c3;
  }
  &:focus {
    outline: 1px solid ${(props: IThemesProps) => props.theme.switchBg};
  }
`
export const Button = styled.button`
  background: ${(props: IThemesProps) => props.theme.switchBg};
  color: ${(props: IThemesProps) => props.theme.switchDot};
  width: 100px;
  height: 25px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${(props: IThemesProps) => props.theme.primaryLight};
    color: #fff;
  }
  &:active {
    background: ${(props: IThemesProps) => props.theme.primaryDark};
    color: #fff;
  }
`
