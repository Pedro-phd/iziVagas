import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/Input'
import { IStateParkingspotRegister } from '@/types/Dashboard'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Container, Title } from '../styles'

export default function ParkingSpot() {
  const [state, setState] = useState<IStateParkingspotRegister>({
    blocks: [],
    error: false,
    loading: false,
    errorMessage: '',
    name: '',
    block: '',
    blockId: '',
    occupied: false,
    special: false,
    old: false
  })

  const [disabled, setDisabled] = useState<boolean>(true)

  const router = useRouter()

  const { t } = useTranslation()

  useEffect(() => {
    state.blockId && state.name ? setDisabled(false) : setDisabled(true)
  }, [state.blockId, state.name])

  const inputArray = [
    {
      onChange: (e: Event) => handleChange(e),
      placeholder: t('dashboard.parkingspot.inputs.block'),
      type: 'select',
      width: '75%',
      options: state.blocks.map((block) => ({
        value: `${block.id}{split}${block.name}`,
        name: block.name
      }))
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, name: e.target.value })),
      placeholder: t('dashboard.parkingspot.inputs.name'),
      width: '75%'
    },
    {
      onChange: () =>
        setState((old) => ({ ...old, occupied: !state.occupied })),
      placeholder: t('dashboard.parkingspot.inputs.occupied'),
      type: 'checkbox',
      width: '75%'
    },
    {
      onChange: () => setState((old) => ({ ...old, special: !state.special })),
      placeholder: t('dashboard.parkingspot.inputs.special'),
      type: 'checkbox',
      width: '75%'
    },
    {
      onChange: () => setState((old) => ({ ...old, old: !state.old })),
      placeholder: t('dashboard.parkingspot.inputs.old'),
      type: 'checkbox',
      width: '75%'
    }
  ]

  const handleCreate = () => {
    clientApi
      .post('api/parkingspot/new', {
        name: state.name,
        block: state.block,
        blockID: state.blockId,
        occupied: state.occupied,
        special: state.special,
        old: state.old
      })
      .then(() => {
        toast.success(t('dashboard.parkingspot.success'), {
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
        toast.error(t('dashboard.parkingspot.error'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined
        })
      })
  }

  const handleChange = (e: Event) => {
    setState((old) => ({
      ...old,
      block: e.target.value.split('{split}')[1],
      blockId: e.target.value.split('{split}')[0]
    }))
  }

  useEffect(() => {
    clientApi
      .get('api/blocks/all')
      .then((res) =>
        setState((old) => ({ ...old, blocks: res.data, loading: false }))
      )
      .catch((error: Error) =>
        setState((old) => ({
          ...old,
          error: true,
          loading: false,
          errorMessage: error.message
        }))
      )
  }, [])

  return (
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
        <Breadcrumbs editLink={'/dashboard/edit/parkingspot'} />
        <Title>{t('dashboard.parkingspot.inputs.title')}</Title>
        <Input
          inputArray={inputArray}
          hasButton
          buttonContent={[
            {
              label: t('dashboard.parkingspot.button.title'),
              onClick: handleCreate,
              width: '150px',
              disabled: disabled
            }
          ]}
        />
      </Card>
    </Container>
  )
}
