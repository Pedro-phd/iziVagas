import { IThemesProps } from '@/types/styled'
import styled, { keyframes } from 'styled-components'

interface IDot {
  option: string
}

export const Wrapper = styled.div`
  width: 70px;
  height: 36px;
  background-color: ${(props: IThemesProps) => props.theme.switchBg};
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 0 3px;
`
export const Dot = styled.div<IDot>`
  cursor: pointer;
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: ${(props: IThemesProps) => props.theme.switchDot};
  border-radius: 100px;
  animation: 0.5s
    ${(props) => (props.option == 'pt-BR' ? LeftToRight : RightToLeft)} ease;
  animation-fill-mode: forwards;
  span {
    position: absolute;
    left: 6px;
    right: 0px;
    bottom: 0;
    top: 8px;
    margin-left: auto;
    margin-right: auto;
    color: ${(props: IThemesProps) => props.theme.text};
    font-weight: 700;
  }
  .en {
    opacity: ${(props) => (props.option == 'en-US' ? '100%' : '10%')};
  }
  .pt {
    opacity: ${(props) => (props.option == 'en-US' ? '0%' : '100%')};
  }
`
const LeftToRight = keyframes`
  0% {
    transform: translateX(32px)
  }
  100% {
    transform: translateX(0%)
  }
`
const RightToLeft = keyframes`
  0% {
    transform: translateX(0%)
  }
  50%{
  }
  100% {
    transform: translateX(32px)
  }
`
