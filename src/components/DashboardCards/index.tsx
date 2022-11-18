import * as S from './styles'

interface IIDashboardCardsButtonsProps {
  onClick: () => void
  label: string
}

interface IDashboardCardsProps {
  icon: JSX.Element
  title: string
  text: string
  buttons: IIDashboardCardsButtonsProps[]
}

function DashboardCards({ icon, title, text, buttons }: IDashboardCardsProps) {
  return (
    <S.CardContainer>
      <S.Card>
        <S.IconContainer>{icon}</S.IconContainer>
        <S.TextContainer>
          <h2>{title}</h2>
          <p>{text}</p>
        </S.TextContainer>
      </S.Card>
      <S.ButtonContainer>
        {buttons.map((button, index) => (
          <>
            <S.Button
              buttons={buttons.length}
              key={index}
              onClick={button.onClick}
            >
              {button.label}
            </S.Button>
          </>
        ))}
      </S.ButtonContainer>
    </S.CardContainer>
  )
}

export default DashboardCards
