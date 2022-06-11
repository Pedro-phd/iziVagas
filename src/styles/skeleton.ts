import { ISkeleton, IThemesProps } from '@/types/styled'
import styled, { keyframes } from 'styled-components'

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`
export const BoxSkeleton = styled.div<ISkeleton>`
  width: ${(props: ISkeleton) => props.width};
  height: ${(props: ISkeleton) => props.height};
  max-height: ${(props: ISkeleton) => props.height}
  max-width: ${(props: ISkeleton) => props.width};
  border-radius: 10px;
  display: block;
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: ${(props: IThemesProps) => props.theme.skeletonBg};
  background-image: ${(props: IThemesProps) => props.theme.skeletonGradient};
  background-size: 200px 100%;
  background-repeat: no-repeat;
  box-shadow: ${(props: IThemesProps) => props.theme.shadow};
`
