import { NONAME } from 'dns';
import { useState } from 'react'
import Modal from 'react-modal'

function WrapperModal(props: any) {
    const { children, isOpen, modalContent } = props

    const [modalIsOpen, setIsOpen] = useState(false)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: "none",
          borderRadius: '10px',
        },
      };

    const handleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    return (
        <>
            <div onClick={handleModal}>
                {children}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleModal}
                style={customStyles}
                contentLabel="Example Modal"
                overlayClassName="overlay-blur"
            >
                <button onClick={() => setIsOpen(false)}>X</button>
            {modalContent}
            </Modal>
        </>
    )
}

export default WrapperModal