import { ParkingSpot } from '.prisma/client'
import clientApi from '@/utils/axios'
import { Button, Checkbox, MenuItem, Select, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import * as S from './style'

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
    <S.Container>
      <S.Card>
      <S.Title>Gerenciar Vagas</S.Title>

      <TextField
          id="outlined-basic"
          label="Id da Vaga"
          variant="outlined"
          placeholder="Id da Vaga"
          onChange={(e) => 
            setState((old) => ({ ...old, id: e.target.value }))}
      /> 

      <TextField
          id="outlined-basic"
          label="Nome da Vaga"
          variant="outlined"
          placeholder="Nome da Vaga"
          onChange={(e) =>
            setState((old) => ({ ...old, name: e.target.value }))
          }
      /> 

      <TextField
          id="outlined-basic"
          label="Nome do Bloco"
          variant="outlined"
          placeholder="Nome do Bloco"
          onChange={(e) =>
            setState((old) => ({ ...old, blockID: e.target.value }))
          }
      />      

      <TextField
          id="outlined-basic"
          label="Id do Bloco"
          variant="outlined"
          placeholder="Id do Bloco"
          onChange={(e) =>
            setState((old) => ({ ...old, block: e.target.value }))
          }
      />       
 
      <S.Text>Disponibilidade</S.Text>
      <input 
        checked={state.occupied}
        type="checkbox"
        onChange={(e) => setState((old) => ({ ...old, occupied: !!e.target.value }))}
      />

        <S.SubTitle>Resultado</S.SubTitle>
        <S.Text>ID: {state.id}</S.Text>
        <S.Text>NAME: {state.name}</S.Text>
        <S.Text>BLOCOID: {state.blockID}</S.Text>
        <S.Text>BLOCO: {state.block}</S.Text>
        <S.Text>DISPONIBILIDADE: {state.occupied}</S.Text>

        <Button variant="contained" onClick={handleUpdate}>
          Atualizar Vaga
        </Button>
        <Button variant="contained" onClick={handleDelete}>
          Deletar Vaga
        </Button>
        <Button variant="contained" onClick={() => console.log(state)}>
          Logar
        </Button>

        </S.Card>
    </S.Container>
    
  )}
