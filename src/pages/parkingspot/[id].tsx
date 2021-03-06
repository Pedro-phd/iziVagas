import { ParkingSpot } from '.prisma/client'
import ConfirmButton from '@/components/ConfirmButton'
import Header from '@/components/Header'
import WrapperModal from '@/components/Modal'
import ParkingSpotCard from '@/components/ParkingSpotCard'
import { BoxSkeleton } from '@/styles/skeleton'
import clientApi from '@/utils/axios'
import selectParkingSpot from '@/utils/selectParkingSpot'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './styles'

type StateBlocks = {
  ParkingSpot: ParkingSpot[]
  error: boolean
  loading: boolean
  errorMessage: string
  idSelected: string
  ticketId: string
}

export default function BlocksPage() {
  const [state, setState] = useState<StateBlocks>({
    ParkingSpot: [],
    error: false,
    loading: false,
    errorMessage: '',
    idSelected: '',
    ticketId: ''
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
  const handleClick = (id: string) => {
    state.idSelected == id
      ? setState((old) => ({ ...old, idSelected: '' }))
      : setState((old) => ({ ...old, idSelected: id }))
  }
  const handleSelected = (id: string, occupied: boolean) => {
    return state.idSelected == id && !occupied ? true : false
  }
  const handleValidate = () => {
    selectParkingSpot({
      id: state.ticketId,
      parkingSpotId: state.idSelected
    }).then(() => {
      console.log('deu certo')
      window.location.reload()
    })
  }
  return (
    <>
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
                onClick={() => handleClick(slot.id)}
                selected={handleSelected(slot.id, slot.occupied)}
                key={slot.id}
                disabled={slot.occupied}
                label={slot.name}
              />
            )
          })}
        </S.SlotsContainer>
        {state.idSelected && (
          <WrapperModal
            modalContent={
              <>
                <S.Title>Valide sua vaga!</S.Title>
                <S.TextContainer>
                  <input
                    onChange={(e) =>
                      setState((old) => ({ ...old, ticketId: e.target.value }))
                    }
                    placeholder="ticketId"
                    type="text"
                  />
                  <S.Text>1 - Realize a leitura do c??digo</S.Text>
                  <S.Text>2 - Aguarde a confirma????o da vaga</S.Text>
                </S.TextContainer>
                <button onClick={handleValidate}>Validar</button>
              </>
            }
          >
            <ConfirmButton id={state.idSelected} />
          </WrapperModal>
        )}
      </S.Container>
    </>
  )
}
