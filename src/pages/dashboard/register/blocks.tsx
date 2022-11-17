import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/TextInput'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useState } from 'react'
import { Card, Container, Title } from '../styles'

type StateBlocks = {
  name: string
  slots: number
}

export default function NewBlocks() {
  const [state, setState] = useState<StateBlocks>({
    name: '',
    slots: 0
  })

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
    clientApi.post('api/blocks/new', {
      name: state.name,
      slots: state.slots
    })
  }

  return (
    <Container>
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
              label: 'Cadastrar Bloco',
              width: '150px'
            }
          ]}
        />
      </Card>
    </Container>
  )
}
