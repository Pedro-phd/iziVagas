import Theme from '@/context/Theme'
import { useContext } from 'react'

export const Disable = () => {
  const { theme } = useContext(Theme)

  const borderColor = theme === 'light' ? '#F2F2F2' : '#550080'
  const fillColor = theme === 'light' ? '#B7B7B7' : '#FFFFFF'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={borderColor}
      width="88"
      height="88"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
