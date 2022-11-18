import { IThemesProps } from './styled'

export interface IDashboardCardsButtonsProps {
  onClick: () => void
  label: string
}

export interface IDashboardCardsProps {
  icon: JSX.Element
  title: string
  text: string
  buttons: IDashboardCardsButtonsProps[]
}

interface IDashboardCardsButtonProps extends IThemesProps {
  buttons: number
}
