import { Blocks } from '.prisma/client'
import clientApi from '@/utils/axios'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import * as S from './style'

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

  const handleCreate = () => {
    clientApi.post('api/parkingspot/new', {
      name: state.name,
      block: state.block,
      blockID: state.blockId
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    <S.Container>
      <S.Card>
        <S.Title>New parking spot</S.Title>
        <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            placeholder="Nome"
            onChange={(e) => setState((old) => ({ ...old, name: e.target.value }))}
          />

        <S.SubTitle>Selecione o bloco da vaga</S.SubTitle>

        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bloco"
            placeholder="Selecione um Bloco"
            value="Selecione um Bloco"
            onChange={(e:any) => handleChange(e)}
            >
              {state.blocks.map((block) => {
                return (
                  <MenuItem key={block.id} value={`${block.id}{split}${block.name}`}>{block.name}
                  </MenuItem>
                )
              })}
        </Select>

        <Button variant="contained" onClick={handleCreate}>
          Cadastrar vaga
        </Button>    

        <Button variant="contained" onClick={() => console.log(state)}>
          Logar
        </Button>   

        <S.SubTitle> Resultado </S.SubTitle>
        <S.Text>Nome: {state.name}</S.Text>
        <S.Text>Bloco: {state.block}</S.Text>
        <S.Text>Id do bloco: {state.blockId}</S.Text>
      </S.Card>
    </S.Container>
  )
}
