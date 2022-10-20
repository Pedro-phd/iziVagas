import { ParkingSpot } from '.prisma/client'
import clientApi from '@/utils/axios'
import { Button, Checkbox, MenuItem, Select, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

type StateParkingspot = {
  id: string
  name: string
  block: string
  blockID: string
  occupied: boolean

}

export default function Newparkingspot() {
  const [state, setState] = useState<StateParkingspot>({
    id: '',
    name: '', 
    block: '',
    blockID: '', 
    occupied: false
  })

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
    console.log(state)
  }, [])

  return (
    <div>
      <div>
        <h1>Gerenciar Vagas</h1>
        <input
          placeholder="Id da Vaga"
          onChange={(e) => 
            setState((old) => ({ ...old, id: e.target.value }))}
        />
        <input
          placeholder="Nome da Vaga"
          onChange={(e) =>
            setState((old) => ({ ...old, name: e.target.value }))
          }
        />
        <input
          placeholder="Id do Bloco"
          onChange={(e) =>
            setState((old) => ({ ...old, block: e.target.value }))
          }
        />

        <input
          placeholder="Nome do Bloco"
          onChange={(e) =>
            setState((old) => ({ ...old, blockID: e.target.value }))
          }
        />

      <h3>Disponibilidade</h3>
      <Checkbox
        checked={state.occupied}
        onChange={(e) =>
          setState((old) => ({ ...old, occupied: !!e.target.value }))
        }
      />

        <ul>
          {parking?.map((parking) => {
            return (
              <li key={parking.id}>
                ID: {parking.id} - NAME: {parking.name} - BLOCO: {parking.block} - BLOCOID: {parking.blockID} - BLOCOS: {parking.occupied}
              </li>
            )
          })}
        </ul>
        <Button variant="contained" onClick={handleUpdate}>
          Atualizar Vaga
        </Button>
        <Button variant="contained" onClick={handleDelete}>
          Deletar Vaga
        </Button>
        <Button variant="contained" onClick={() => console.log(state)}>
          Logar
        </Button>
      </div>
    </div>
    
  )}
