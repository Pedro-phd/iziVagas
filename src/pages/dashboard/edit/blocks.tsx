import { Blocks } from '.prisma/client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/TextInput'
import { IStateBlocksEdit } from '@/types/Dashboard'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Container, Title } from '../styles'

export default function NewBlocks() {
  const [state, setState] = useState<IStateBlocksEdit>({
    id: '',
    name: '',
    slots: 0
  })

  const router = useRouter()

  const [blocks, setBlocks] = useState<Blocks[]>([])
  const [disabled, setDisabled] = useState<boolean>(true)

  const handleFindBlock = (id: string) => {
    const findBlock = blocks.find((block) => block.id === id)
    findBlock && setState({ ...findBlock })
  }

  useEffect(() => {
    state.id && (state.slots > 0 || !isNaN(state.slots))
      ? setDisabled(false)
      : setDisabled(true)
  }, [state.id, state.slots])

  const inputArray = [
    {
      onChange: (e: Event) => handleFindBlock(e.target.value),
      placeholder: 'Escolha o nome do bloco...',
      width: '75%',
      type: 'select',
      options: blocks.map((block) => ({
        value: block.id,
        name: `Bloco - ${block.name}`
      }))
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, slots: parseInt(e.target.value) })),
      placeholder: 'Insira a quantidade de vagas...',
      width: '75%',
      type: 'number',
      value: state.slots
    }
  ]

  const handleUpdate = () => {
    clientApi
      .post(`api/blocks/update/${state.id}`, {
        ...state
      })
      .then(() => {
        toast.success('Bloco editado com sucesso!', {
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
        toast.error('Erro ao editar o bloco!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined
        })
      })
  }
  const handleDelete = () => {
    clientApi
      .post(`api/blocks/delete/${state.id}`, {
        ...state
      })
      .then(() => {
        toast.success('Bloco deletado com sucesso!', {
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
        toast.error('Erro ao deletar o bloco!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined
        })
      })
  }

  useEffect(() => {
    clientApi
      .get('api/blocks/all')
      .then((res) => {
        setBlocks(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
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
          <Breadcrumbs />
          <Title>Gerenciar Bloco</Title>
          <Input
            inputArray={inputArray}
            hasButton
            buttonContent={[
              {
                onClick: handleUpdate,
                label: 'Editar Bloco',
                width: '150px',
                disabled: disabled
              },
              {
                onClick: handleDelete,
                label: 'Deletar bloco',
                width: '150px',
                disabled: disabled
              }
            ]}
          />
        </Card>
      </Container>
    </>
  )
}
