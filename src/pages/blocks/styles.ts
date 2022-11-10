import { IThemesProps } from '@/types/styled'
import styled, { keyframes } from 'styled-components'

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

export const BlocksContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 270px 270px 270px;
  grid-gap: 30px;
  max-width: 1170px;
  margin: 0 auto;
`
const scale = keyframes`
  from {
    width: 0px;
  }

  to {
    width: 300px;
  }
`
