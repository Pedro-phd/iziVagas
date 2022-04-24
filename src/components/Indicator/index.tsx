import * as S from './styles'

const Indicator = () => (
  <S.Wrapper>
    <S.IndicatorColor color={'green'} />
    <p>Muitas</p>
    <S.IndicatorColor color={'yellow'} />
    <p>Regular</p>
    <S.IndicatorColor color={'red'} />
    <p>Poucas</p>
  </S.Wrapper>
)

export default Indicator
