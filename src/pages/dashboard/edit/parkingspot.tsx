import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/TextInput'
import { Event, ParkingSpot } from '@/types/types'
import clientApi from '@/utils/axios'
import { Blocks } from '@prisma/client'
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

  const [parking, setParking] = useState<ParkingSpot[]>([])
  const [blocks, setBlocks] = useState<Blocks[]>([])
  const [filteredParking, setFilteredParking] = useState<ParkingSpot[]>([
    {
      id: '',
      name: '',
      block: '',
      blockID: '',
      occupied: false,
      special: false,
      old: false
    }
  ])

  useEffect(() => {
    clientApi
      .get('api/blocks/all')
      .then((res) => {
        setBlocks(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    clientApi
      .get('api/parkingspot/all')
      .then((res) => {
        setParking(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleParkingspotSelect = (id: string) => {
    const filteredParkingspots = parking.filter((item) => item.blockID === id)
    filteredParkingspots && setFilteredParking([...filteredParkingspots])
  }
  const handleFindParkingspot = (id: string) => {
    const findParkingspots = parking.find((item) => item.id === id)
    findParkingspots && setState({ ...findParkingspots })
  }

  const inputArray = [
    {
      onChange: (e: Event) => handleParkingspotSelect(e.target.value),
      placeholder: 'Insira o bloco da vaga...',
      width: '75%',
      type: 'select',
      options: blocks.map((block) => ({
        value: block.id,
        name: `Bloco - ${block.name}`
      }))
    },
    {
      onChange: (e: Event) => handleFindParkingspot(e.target.value),
      placeholder: 'Insira o nome da vaga...',
      width: '75%',
      type: 'select',
      options:
        filteredParking &&
        filteredParking.map((item) => ({
          value: item.id,
          name: `Vaga - ${item.name}`
        }))
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

  return (
    <Container>
      <Header />
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
