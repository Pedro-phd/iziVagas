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
