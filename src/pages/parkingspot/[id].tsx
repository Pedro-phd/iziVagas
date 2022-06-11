import { useEffect, useState } from 'react'
import * as S from './styles'
import Header from '@/components/Header'
import clientApi from '@/utils/axios'
import { useRouter } from 'next/router'
import { ParkingSpot } from '.prisma/client'
import ParkingSpotCard from '@/components/ParkingSpotCard'
import { BoxSkeleton } from '@/styles/skeleton'

type StateBlocks = {
  ParkingSpot: ParkingSpot[]
  error: boolean
  loading: boolean
  errorMessage: string
}

export default function BlocksPage() {
  const [state, setState] = useState<StateBlocks>({
    ParkingSpot: [],
    error: false,
    loading: false,
    errorMessage: ''
  })

  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    setState((old) => ({ ...old, loading: true }))
    id &&
      clientApi
        .get(`api/parkingspot/blockid/${id}`)
        .then((res) =>
          setState((old) => ({ ...old, ParkingSpot: res.data, loading: false }))
        )
        .catch((error: Error) =>
          setState((old) => ({
            ...old,
            error: true,
            loading: false,
            errorMessage: error.message
          }))
        )
  }, [id])
  return (
    <S.Container>
      <Header title="Vagas" />
      {state.error && <p>{state.errorMessage}</p>}
      <S.SlotsContainer>
        {state.loading &&
          Array.from(Array(18)).map((_, i) => {
            return <BoxSkeleton width={'150px'} height={'150px'} key={i} />
          })}
        {state.ParkingSpot.map((slot) => {
          return (
            <ParkingSpotCard
              key={slot.id}
              disabled={slot.occupied}
              label={slot.name}
            />
          )
        })}
      </S.SlotsContainer>
    </S.Container>
  )
}
