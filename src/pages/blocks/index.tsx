import { useEffect, useState } from 'react'
import * as S from './styles'
import CardBlock from '@/components/CardBlock'
import Header from '@/components/Header'
import Indicator from '@/components/Indicator'
import clientApi from '@/utils/axios'
import { Blocks } from '.prisma/client'
import getColor from '@/utils/getColor'
import { BoxSkeleton } from '@/styles/skeleton'
interface IBlocksOccupied extends Blocks {
  occupied: number
}

type StateBlocks = {
  blocks: IBlocksOccupied[]
  error: boolean
  loading: boolean
  errorMessage: string
}

export default function BlocksPage() {
  const [state, setState] = useState<StateBlocks>({
    blocks: [],
    error: false,
    loading: false,
    errorMessage: ''
  })

  useEffect(() => {
    setState((old) => ({ ...old, loading: true }))
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
      <Header title="Blocos" />
      <Indicator ClassName="indicator" />
      {state.error && <p>{state.errorMessage}</p>}
      <S.BlocksContainer>
        {/* <BoxSkeleton width={250} height={250} /> */}
        {state.loading &&
          Array.from(Array(18)).map((_, i) => {
            return <BoxSkeleton width={'25=70px'} height={'250px'} key={i} />
          })}
        {state.blocks.map((block) => {
          return (
            <a key={block.id} href={`/parkingspot/${block.id}`}>
              <CardBlock
                letter={block.name}
                color={getColor(block.occupied, block.slots)}
                number={block.slots - block.occupied}
              />
            </a>
          )
        })}
      </S.BlocksContainer>
    </S.Container>
  )
}
