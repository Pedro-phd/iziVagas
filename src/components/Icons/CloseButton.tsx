import Theme from '@/context/Theme'
import { useContext } from 'react'

export const CloseButton = () => {
  const { theme } = useContext(Theme)
  const fillColor = theme === 'dark' ? '#fff' : '#1c1c1c'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={fillColor}
      width="36px"
      height="36px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}
