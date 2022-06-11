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
    circleColor: string
    initialTitle: string
    skeletonGradient: string
    skeletonBg: string
  }
}

export interface IColorIndicator extends IThemesProps {
  color: 'green' | 'yellow' | 'red'
}

export interface ICircleProps extends IThemesProps {
  opacity: number
  size: string
  duration: string
}

export interface IParkingSpotCard extends IThemesProps {
  selected: boolean
  disabled: boolean
}

export interface ISkeleton extends IThemesProps {
  width: string
  height: string
}
