import { IThemesProps } from '@/types/styled'

export const darkTheme: IThemesProps = {
  theme: {
    primary: '#005C53',
    primaryLight: '#9FC131',
    primaryDark: '#237559',
    body: '#042940',
    text: '#fff',
    green: '#5BDD5B',
    yellow: '#F4F44D',
    yellowSelected: '#FFCC3E',
    red: '#EB6565',
    bold: 700,
    shadow: '0px 12px 41px 0px rgba(255, 255, 255, 0.2)',
    switchBg: '#F2F2F2',
    switchDot: '#005C53',
    switchPosition: 'b',
    cardBox: '#237559',
    circleColor: '#237559',
    initialTitle: '#FFFFFF',
    skeletonGradient: 'linear-gradient(90deg, #005C53, #9FC131, #005C53)',
    skeletonBg: '#005C53',
    buttonColor: '#FFCC3E',
    buttonTextColor: '#005C53'
  }
}
export const lightTheme: IThemesProps = {
  theme: {
    primary: '#005C53',
    primaryLight: '#9FC131',
    primaryDark: '#237559',
    body: '#F2F2F2',
    text: '#262626',
    green: '#5BDD5B',
    yellow: '#F4F44D',
    yellowSelected: '#FFCC3E',
    red: '#EB6565',
    bold: 700,
    shadow: '0px 12px 41px 0px rgba(0, 0, 0, 0.1)',
    switchBg: '#005C53',
    switchDot: '#F2F2F2',
    switchPosition: 'a',
    cardBox: '#F2F2F2',
    circleColor: '#D4D4D4',
    initialTitle: '#8A8A8A',
    skeletonGradient: 'linear-gradient(90deg, #dedede, #f5f5f5, #dedede)',
    skeletonBg: '#dedede',
    buttonColor: '#005C53',
    buttonTextColor: '#FFCC3E'
  }
}
