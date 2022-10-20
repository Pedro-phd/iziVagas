import { ParkingSpot } from '.prisma/client'
import ConfirmButton from '@/components/ConfirmButton'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import WrapperModal from '@/components/Modal'
import ParkingSpotCard from '@/components/ParkingSpotCard'
import { BoxSkeleton } from '@/styles/skeleton'
import clientApi from '@/utils/axios'
import selectParkingSpot from '@/utils/selectParkingSpot'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
  const formattedUrl = router.asPath.split('/')
  useEffect(() => {
    setState((old) => ({ ...old, loading: true }))
    id &&
      clientApi
        .get(`api/parkingspot/blockid/${id}`)
        .then((res) =>
          setState((old) => ({ ...old, ParkingSpot: res.data, loading: false }))
        )
        .catch((error: Error) => {
          setState((old) => ({
            ...old,
            error: true,
            loading: false,
            errorMessage: error.message
          }))
          toast.error('Não foi possível completar sua solicitação', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        })
  }, [id])
  useEffect(() => {
    if (router.query?.validated) {
      toast.success('Ticket validado com sucesso', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }, [router])
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
    })
      .then(() => {
        console.log('deu certo')
        toast.success('Ticket validado com sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => {
            router.push(
              {
                pathname: `/parkingspot/${formattedUrl[1]}`,
                query: { validated: true }
              },
              `/parkingspot/${formattedUrl[2]}`
            )
          }
        })
      })
      .catch((err) => {
        toast.error(err, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <S.Container>
        <Header title="Vagas" />
        {state.error && <p>{state.errorMessage}</p>}
        {!state.loading && state.ParkingSpot.length && (
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
        )}
        {!state.loading && !state.ParkingSpot.length && (
          <h1>Não temos vagas cadastradas para esse bloco</h1>
        )}
        {state.loading && <Loader />}
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
                  <S.Text>1 - Realize a leitura do código</S.Text>
                  <S.Text>2 - Aguarde a confirmação da vaga</S.Text>
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
