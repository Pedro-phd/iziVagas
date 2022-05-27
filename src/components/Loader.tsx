import { HashLoader } from 'react-spinners'
import { css } from '@emotion/react'
import { useContext } from 'react'
import Theme from '@/context/Theme'

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Loader = () => {
  const { theme } = useContext(Theme)

  return (
    <HashLoader
      size={50}
      color={theme === 'dark' ? '#FFF' : '#7A00B5'}
      css={override}
    />
  )
}

export default Loader
