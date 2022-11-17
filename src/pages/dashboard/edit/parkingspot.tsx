import { ParkingSpot } from '.prisma/client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Input from '@/components/TextInput'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useEffect, useState } from 'react'
import { Card, Container, Text, Title } from '../styles'

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
        <Breadcrumbs
          links={{
            backLink: '/dashboard/register/parkingspot'
          }}
        />
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

        <Text>Ocupada</Text>
        <input
          checked={state.occupied}
          type="checkbox"
          onChange={(e) =>
            setState((old) => ({ ...old, occupied: !!e.target.value }))
          }
        />
        <Text>Vaga especial</Text>
        <input
          checked={state.special}
          type="checkbox"
          onChange={(e) =>
            setState((old) => ({ ...old, special: !!e.target.value }))
          }
        />
        <Text>Vaga para idosos</Text>
        <input
          checked={state.old}
          type="checkbox"
          onChange={(e) =>
            setState((old) => ({ ...old, old: !!e.target.value }))
          }
        />
      </Card>
    </Container>
  )
}
