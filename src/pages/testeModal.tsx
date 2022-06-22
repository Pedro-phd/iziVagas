import WrapperModal from '@/components/Modal'

export default function Home() {
  return (
    <>
      <WrapperModal modalContent={<p>Teste de conteúdo</p>}>
        <h1>Abrir Modal</h1>
      </WrapperModal>
    </>
  )
}
