import * as S from '@/styles/home'
import { Logo, HandEmoji } from '@/components/Icons'

export default function Home() {
  return (
    <S.Container onClick={() => alert('Teste')}>
      <S.Column>
        <Logo option="startScreen" />
      </S.Column>
      <S.Column>
        <S.CircleContainer>
          <S.Circle size="275px" opacity={0.2} duration="1s" />
          <S.Circle size="165px" opacity={0.5} duration="1.6s" />
          <S.Circle size="103px" opacity={1} duration="1.3s" />
          <HandEmoji />
        </S.CircleContainer>
        <S.Title>Toque para iniciar</S.Title>
      </S.Column>
    </S.Container>
  )
}
