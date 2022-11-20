import { ICircleProps, IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
`

export const Title = styled.h1`
  color: ${(props: IThemesProps) => props.theme.initialTitle};
  font-weight: 400;
  margin-left: 130px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const Content = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`

export const Column = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 390px;
  width: 290px;
  margin-bottom: 85px;
  svg {
    width: 248px;
    height: 325px;
    z-index: 1;
    position: absolute;
    bottom: -80px;
    right: -20px;
  }
`

export const Circle = styled.div`
  background-color: ${(props: ICircleProps) => props.theme.circleColor};
  opacity: ${(props: ICircleProps) => props.opacity};
  width: ${(props: ICircleProps) => props.size};
  min-height: ${(props: ICircleProps) => props.size};
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  animation: scaleOut 1s alternate infinite ease-in;
  animation-duration: ${(props: ICircleProps) => props.duration};

  @keyframes scaleOut {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.1);
    }
  }
`
