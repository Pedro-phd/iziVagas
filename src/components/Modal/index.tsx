import { CloseButton } from '@/components/Icons'
import Theme from '@/context/Theme'
import { WrapperModalProps } from '@/types/Modal'
import { useContext, useState } from 'react'
import Modal from 'react-modal'
import * as S from './styles'

function WrapperModal(props: WrapperModalProps) {
  const { children, modalContent } = props

  const [modalIsOpen, setIsOpen] = useState(false)

  const { theme } = useContext(Theme)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '10px',
      width: '900px',
      height: '500px',
      background: theme === 'dark' ? '#240036' : '#F2F2F2'
    }
  }

  const handleModal = () => {
    setIsOpen(!modalIsOpen)
  }

  return (
    <>
      <div onClick={handleModal}>{children}</div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="overlay-blur"
      >
        <S.Content>
          <S.Header>
            <S.Close onClick={() => setIsOpen(false)}>
              <CloseButton />
            </S.Close>
          </S.Header>
          <S.BodyModal>{modalContent}</S.BodyModal>
        </S.Content>
      </Modal>
    </>
  )
}
export default WrapperModal
