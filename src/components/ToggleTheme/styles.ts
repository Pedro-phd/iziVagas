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
    ${(props) => (props.option == 'dark' ? LeftToRight : RightToLeft)} ease;
  animation-fill-mode: forwards;
  svg {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .moon {
    opacity: ${(props) => (props.option == 'dark' ? '0%' : '100%')};
  }
  .sun {
    opacity: ${(props) => (props.option == 'dark' ? '100%' : '0%')};
    bottom: 3px;
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