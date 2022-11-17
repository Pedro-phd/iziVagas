import { Blocks } from '.prisma/client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Input from '@/components/TextInput'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useEffect, useState } from 'react'
import { Card, Container, Text, Title } from '../styles'

type StateBlocks = {
  id: string
  name: string
  slots: number
}

export default function NewBlocks() {
  const [state, setState] = useState<StateBlocks>({
    id: '',
    name: '',
    slots: 0
  })

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, id: e.target.value })),
      placeholder: 'Insira o ID do bloco...',
      width: '75%'
    },
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

  const [blocks, setBlocks] = useState<Blocks[]>([])

  const handleUpdate = () => {
    clientApi.post(`api/blocks/update/${state.id}`, {
      ...state
    })
  }
  const handleDelete = () => {
    clientApi.post(`api/blocks/delete/${state.id}`, {
      ...state
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
    console.log(state)
  }, [])

  return (
    <Container>
      <Card>
        <Breadcrumbs links={{ backLink: '/dashboard/register/blocks' }} />
        <Title>Editar Bloco</Title>
        <Input
          inputArray={inputArray}
          hasButton
          buttonContent={[
            { onClick: handleUpdate, label: 'Atualizar Bloco', width: '150px' },
            { onClick: handleDelete, label: 'Deletar bloco', width: '150px' }
          ]}
        />
        <ul>
          {blocks?.map((block) => {
            return (
              <Text key={block.id}>
                ID: {block.id} - Nome: {block.name} - Slots: {block.slots}
              </Text>
            )
          })}
        </ul>
      </Card>
    </Container>
  )
}
