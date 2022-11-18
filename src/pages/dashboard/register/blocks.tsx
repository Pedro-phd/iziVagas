import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/TextInput'
import { IStateBlocksRegister } from '@/types/Dashboard'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Container, Title } from '../styles'

export default function NewBlocks() {
  const [state, setState] = useState<IStateBlocksRegister>({
    name: '',
    slots: 0
  })

  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    state.name.length !== 0 && (state.slots > 0 || !isNaN(state.slots))
      ? setDisabled(false)
      : setDisabled(true)
  }, [state.name, state.slots])

  const router = useRouter()

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, name: e.target.value })),
      placeholder: 'Insira o nome do bloco...',
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, slots: parseInt(e.target.value) })),
      placeholder: 'Insira a quantidade de vagas...',
      width: '75%',
      type: 'number'
    }
  ]

  const handleCreate = () => {
    clientApi
      .post('api/blocks/new', {
        name: state.name,
        slots: state.slots
      })
      .then(() => {
        toast.success('Bloco criado com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined,
          onClose: () => {
            router.reload()
          }
        })
      })
      .catch(() => {
        toast.error('Erro ao criar o bloco!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined
        })
      })
  }

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
      />
      <Header />
      <Card>
        <Breadcrumbs editLink={'/dashboard/edit/blocks'} />
        <Title>Novo Bloco</Title>
        <Input
          inputArray={inputArray}
          hasButton
          buttonContent={[
            {
              onClick: handleCreate,
              label: 'Criar Bloco',
              width: '150px',
              disabled: disabled
            }
          ]}
        />
      </Card>
    </Container>
  )
}
