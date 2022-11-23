import { Blocks } from '.prisma/client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/Input'
import { IStateBlocksEdit } from '@/types/Dashboard'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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

  const { t } = useTranslation()

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
      placeholder: t('dashboard.blocks.inputs.block'),
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
      placeholder: t('dashboard.blocks.inputs.amount'),
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
        toast.success(t('dashboard.blocks.editSuccess'), {
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
        toast.error(t('dashboard.blocks.editError'), {
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
        toast.success(t('dashboard.blocks.deleteSuccess'), {
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
        toast.error(t('dashboard.blocks.deleteError'), {
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
        <Header homeLink="/dashboard" />
        <Card>
          <Breadcrumbs />
          <Title>{t('dashboard.blocks.inputs.editTitle')}</Title>
          <Input
            inputArray={inputArray}
            hasButton
            buttonContent={[
              {
                onClick: handleUpdate,
                label: t('dashboard.blocks.button.editTitle'),
                width: '150px',
                disabled: disabled
              },
              {
                onClick: handleDelete,
                label: t('dashboard.blocks.button.deleteTitle'),
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
