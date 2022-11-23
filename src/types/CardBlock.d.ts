import { IThemesProps } from './styled'

export interface ICardBlock {
  letter: string
  number: number | string
  color: TCardBlockColor
}

export type TCardBlockColor = 'green' | 'yellow' | 'red'

export interface IColorIndicator extends IThemesProps {
  color: TCardBlockColor
}
