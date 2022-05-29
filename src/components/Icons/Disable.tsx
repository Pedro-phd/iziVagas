import Theme from '@/context/Theme'
import { useContext } from 'react'

export const Disable = () => {
  const { theme } = useContext(Theme)

  const borderColor = theme === 'light' ? '#F2F2F2' : '#550080'
  const fillColor = theme === 'light' ? '#B7B7B7' : '#FFFFFF'
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.0447 45.7678L84.2145 78.9375L78.9375 84.2145L45.7678 51.0447L44 49.277L42.2322 51.0447L9.0625 84.2145L3.78554 78.9375L36.9553 45.7678L38.723 44L36.9553 42.2322L3.78553 9.0625L9.0625 3.78553L42.2322 36.9553L44 38.723L45.7678 36.9553L78.9375 3.78554L84.2145 9.0625L51.0447 42.2322L49.277 44L51.0447 45.7678Z"
        fill={fillColor}
        stroke={borderColor}
        strokeWidth="5"
      />
    </svg>
  )
}
