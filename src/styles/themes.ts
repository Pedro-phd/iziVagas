import { IThemesProps } from '@/types/styled'

export const darkTheme: IThemesProps = {
  theme: {
    primary: '#7A00B5',
    primaryLight: '#9A00E5',
    primaryDark: '#550080',
    body: '#240036',
    text: '#fff',
    green: '#5BDD5B',
    yellow: '#F4F44D',
    yellowSelected: '#FFCC3E',
    red: '#EB6565',
    bold: 700,
    shadow: 'box-shadow: 0px 12px 41px 0px rgba(255, 255, 255, 0.2)',
    switchBg: '#F2F2F2',
    switchDot: '#7A00B5',
    switchPosition: 'b'
  }
}
export const lightTheme: IThemesProps = {
  theme: {
    primary: '#7A00B5',
    primaryLight: '#9A00E5',
    primaryDark: '#550080',
    body: '#F2F2F2',
    text: '#262626',
    green: '#5BDD5B',
    yellow: '#F4F44D',
    yellowSelected: '#FFCC3E',
    red: '#EB6565',
    bold: 700,
    shadow: 'box-shadow: 0px 12px 41px 0px rgba(0, 0, 0, 0.1)',
    switchBg: '#7A00B5',
    switchDot: '#F2F2F2',
    switchPosition: 'a'
  }
}
