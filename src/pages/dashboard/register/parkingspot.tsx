import { Blocks } from '.prisma/client'
import Breadcrumbs from '@/components/Breadcrumbs'
import InputText from '@/components/TextInput'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useEffect, useState } from 'react'
import { Card, Container, Title } from '../styles'

type StateBlocks = {
  blocks: Blocks[]
  error: boolean
  loading: boolean
  errorMessage: string
  name: string
  block: string
  blockId: string
  occupied: boolean
  special: boolean
  old: boolean
}

export default function ParkingSpot() {
  const [state, setState] = useState<StateBlocks>({
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

  const inputArray = [
    {
      onChange: (e: Event) => handleChange(e),
      placeholder: 'Escolha o bloco...',
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
      placeholder: 'Insira o nome da vaga...',
      width: '75%'
    },
    {
      onChange: () =>
        setState((old) => ({ ...old, occupied: !state.occupied })),
      placeholder: 'Ocupada',
      type: 'checkbox',
      width: '75%'
    },
    {
      onChange: () => setState((old) => ({ ...old, special: !state.special })),
      placeholder: 'Vaga especial',
      type: 'checkbox',
      width: '75%'
    },
    {
      onChange: () => setState((old) => ({ ...old, old: !state.old })),
      placeholder: 'Vaga para idosos',
      type: 'checkbox',
      width: '75%'
    }
  ]

  const handleCreate = () => {
    clientApi.post('api/parkingspot/new', {
      name: state.name,
      block: state.block,
      blockID: state.blockId,
      occupied: state.occupied,
      special: state.special,
      old: state.old
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
      <Card>
        <Breadcrumbs editLink={'/dashboard/edit/parkingspot'} />
        <Title>Nova vaga</Title>
        <InputText
          inputArray={inputArray}
          hasButton
          buttonContent={[
            {
              label: 'Cadastrar vaga',
              onClick: handleCreate,
              width: '150px'
            }
          ]}
        />
      </Card>
    </Container>
  )
}
