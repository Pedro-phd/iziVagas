import { Blocks } from '.prisma/client'
import Breadcrumbs from '@/components/Breadcrumbs'
import InputText from '@/components/TextInput'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useEffect, useState } from 'react'
import { Card, Container, SubTitle, Text, Title } from '../styles'

type StateBlocks = {
  blocks: Blocks[]
  error: boolean
  loading: boolean
  errorMessage: string
  name: string
  block: string
  blockId: string
}

export default function ParkingSpot() {
  const [state, setState] = useState<StateBlocks>({
    blocks: [],
    error: false,
    loading: false,
    errorMessage: '',
    name: '',
    block: '',
    blockId: ''
  })

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, name: e.target.value })),
      placeholder: 'Insira o nome da vaga...',
      width: '75%'
    },
    {
      onChange: (e: Event) => handleChange(e),
      placeholder: 'Escolha o bloco...',
      type: 'select',
      width: '75%',
      options: state.blocks.map((block) => ({
        value: `${block.id}{split}${block.name}`,
        name: block.name
      }))
    }
  ]

  const handleCreate = () => {
    clientApi.post('api/parkingspot/new', {
      name: state.name,
      block: state.block,
      blockID: state.blockId
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
        <SubTitle> Resultado </SubTitle>
        <Text>Nome: {state.name}</Text>
        <Text>Bloco: {state.block}</Text>
        <Text>Id do bloco: {state.blockId}</Text>
      </Card>
    </Container>
  )
}
