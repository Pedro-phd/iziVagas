import { ParkingSpot } from '.prisma/client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Input from '@/components/TextInput'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useEffect, useState } from 'react'
import { Card, Container, Title } from '../styles'

type StateParkingspot = {
  id: string
  name: string
  block: string
  blockID: string
  occupied: boolean
  special: boolean
  old: boolean
}

export default function Newparkingspot() {
  const [state, setState] = useState<StateParkingspot>({
    id: '',
    name: '',
    block: '',
    blockID: '',
    occupied: false,
    special: false,
    old: false
  })

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, id: e.target.value })),
      placeholder: 'Insira o ID da vaga...',
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, name: e.target.value })),
      placeholder: 'Insira o nome da vaga...',
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, block: e.target.value })),
      placeholder: 'Insira o bloco da vaga...',
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, blockID: e.target.value })),
      placeholder: 'Insira o ID do bloco  da vaga...',
      width: '75%'
    },
    {
      onChange: () =>
        setState((old) => ({ ...old, occupied: !state.occupied })),
      placeholder: 'Ocupada',
      type: 'checkbox',
      width: '75%',
      checked: state.occupied
    },
    {
      onChange: () => setState((old) => ({ ...old, special: !state.special })),
      placeholder: 'Vaga especial',
      type: 'checkbox',
      width: '75%',
      checked: state.special
    },
    {
      onChange: () => setState((old) => ({ ...old, old: !state.old })),
      placeholder: 'Vaga para idosos',
      type: 'checkbox',
      width: '75%',
      checked: state.old
    }
  ]

  const [parking, setParking] = useState<ParkingSpot[]>([])

  const handleUpdate = () => {
    clientApi.post(`api/parkingspot/update/${state.id}`, {
      ...state
    })
  }
  const handleDelete = () => {
    clientApi.post(`api/parkingspot/delete/${state.id}`, {
      ...state
    })
  }

  useEffect(() => {
    clientApi
      .get('api/parkingspot/all')
      .then((res) => {
        setParking(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container>
      <Card>
        <Breadcrumbs />
        <Title>Gerenciar Vagas</Title>
        <Input
          inputArray={inputArray}
          hasButton
          buttonContent={[
            {
              label: 'Atualizar vaga',
              onClick: handleUpdate,
              width: '150px'
            },
            {
              label: 'Deletar vaga',
              onClick: handleDelete,
              width: '150px'
            }
          ]}
        />
      </Card>
    </Container>
  )
}
