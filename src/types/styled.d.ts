export interface IThemesProps {
  theme: {
    primary: string
    primaryLight: string
    primaryDark: string
    body: string
    text: string
    green: string
    yellow: string
    yellowSelected: string
    red: string
    bold: number
    shadow: string
    switchBg: string
    switchDot: string
    switchPosition: string
    cardBox: string
  }
}

export interface IColorIndicator extends IThemesProps {
  color: 'green' | 'yellow' | 'red'
}
