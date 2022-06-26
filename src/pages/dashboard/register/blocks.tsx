import clientApi from '@/utils/axios'
import { useState } from 'react'

type StateBlocks = {
  name: string
  slots: number
}

export default function NewBlocks() {
  const [state, setState] = useState<StateBlocks>({
    name: '',
    slots: 0
  })

  const handleCreate = () => {
    clientApi.post('api/blocks/new', {
      name: state.name,
      slots: state.slots
    })
  }

  return (
    <>
      <h1>New block</h1>
      <input
        placeholder="Nome"
        onChange={(e) => setState((old) => ({ ...old, name: e.target.value }))}
      />
      <input
        placeholder="Quantidade de vagas"
        type="number"
        onChange={(e) =>
          setState((old) => ({ ...old, slots: parseInt(e.target.value) }))
        }
      />
      <button onClick={handleCreate}> Cadastrar bloco </button>
      <button onClick={() => console.log(state)}> logar </button>
      <p> resultado </p>
      <p>Nome: {state.name}</p>
      <p>Slots: {state.slots}</p>
    </>
  )
}
