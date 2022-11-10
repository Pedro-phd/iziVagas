import { Blocks } from '.prisma/client'
import clientApi from '@/utils/axios'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

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
    <div>
      <div>
        <h1>Novo Bloco</h1>
        <input
          placeholder="id do block"
          onChange={(e) => setState((old) => ({ ...old, id: e.target.value }))}
        />
        <input
          placeholder="Nome do bloco"
          onChange={(e) =>
            setState((old) => ({ ...old, name: e.target.value }))
          }
        />
        <input
          placeholder="Quantidade de vagas"
          onChange={(e) =>
            setState((old) => ({ ...old, slots: parseInt(e.target.value) }))
          }
        />
        <ul>
          {blocks?.map((block) => {
            return (
              <li key={block.id}>
                ID: {block.id} - NAME: {block.name} - SLOTS: {block.slots}
              </li>
            )
          })}
        </ul>
        <Button variant="contained" onClick={handleUpdate}>
          Atualizar Bloco
        </Button>
        <Button variant="contained" onClick={handleDelete}>
          Deletar Bloco
        </Button>
      </div>
    </div>
  )
}
