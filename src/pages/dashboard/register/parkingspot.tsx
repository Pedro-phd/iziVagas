import { Blocks } from '.prisma/client'
import clientApi from '@/utils/axios'
import { useEffect, useState } from 'react'

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
    <>
      <h1>New parking spot</h1>
      <input
        placeholder="Nome"
        onChange={(e) => setState((old) => ({ ...old, name: e.target.value }))}
      />
      <h3>Selecione o bloco da vaga</h3>
      <select onChange={(e) => handleChange(e)}>
        {state.blocks.map((block) => {
          return (
            <option key={block.id} value={`${block.id}{split}${block.name}`}>
              {block.name}
            </option>
          )
        })}
      </select>
      <button onClick={handleCreate}> Cadastrar vaga </button>
      <button onClick={() => console.log(state)}> logar </button>
      <p> resultado </p>
      <p>Nome: {state.name}</p>
      <p>Bloco: {state.block}</p>
      <p>Id do bloco: {state.blockId}</p>
    </>
  )
}
