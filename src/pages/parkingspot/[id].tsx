import ConfirmButton from '@/components/ConfirmButton'
import Header from '@/components/Header'
import Input from '@/components/Input'
import Loader from '@/components/Loader'
import WrapperModal from '@/components/Modal'
import ParkingSpotCard from '@/components/ParkingSpotCard'
import { BoxSkeleton } from '@/styles/skeleton'
import { Event, IStateBlocks } from '@/types/types'
import clientApi from '@/utils/axios'
import selectParkingSpot from '@/utils/selectParkingSpot'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'

export default function BlocksPage() {
  const [state, setState] = useState<IStateBlocks>({
    ParkingSpot: [],
    error: false,
    loading: false,
    validateLoading: false,
    errorMessage: '',
    idSelected: '',
    ticketId: ''
  })

  const { t } = useTranslation()

  const handleChange = (e: Event) => {
    setState((old) => ({ ...old, ticketId: e.target.value }))
    console.log('errado', e.target.value.length)
    if (e.target.value.length === 24) {
      console.log('certo', e.target.value.length)
      handleValidate(e.target.value)
    }
  }

  const inputArray = [
    {
      onChange: (e: Event) => handleChange(e),
      placeholder: t('parkingspot.inputs.placeholder'),
      width: '50%',
      autoFocus: true
    }
  ]

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
      toast.success(t('parkingspot.success'), {
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
  const handleValidate = (id: string) => {
    setState((old) => ({ ...old, validateLoading: true }))
    selectParkingSpot({
      id: id,
      parkingSpotId: state.idSelected
    })
      .then(() => {
        setState((old) => ({ ...old, validateLoading: false }))
        console.log('deu certo')
        toast.success(t('parkingspot.success'), {
          position: 'top-right',
          autoClose: 2000,
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
      .catch(() => {
        setState((old) => ({ ...old, validateLoading: false }))
        toast.error(t('parkingspot.error'), {
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
        <Header title={t('parkingspot.title')} />
        {state.error && <p>{state.errorMessage}</p>}
        {!state.loading && state.ParkingSpot.length ? (
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
                  special={slot.special}
                  old={slot.old}
                />
              )
            })}
          </S.SlotsContainer>
        ) : (
          <h1>{t('parkingspot.empty')}</h1>
        )}
        {state.idSelected && (
          <WrapperModal
            modalContent={
              <>
                <S.Title>{t('parkingspot.modal.title')}</S.Title>
                <S.TextContainer>
                  <S.Text>{t('parkingspot.modal.subtitle1')}</S.Text>
                  <S.Text>{t('parkingspot.modal.subtitle2')}</S.Text>
                </S.TextContainer>
                <S.InputContainer>
                  <Input
                    inputArray={inputArray}
                    hasButton
                    buttonContent={[
                      {
                        onClick: () => handleValidate(state.ticketId),
                        label: t('parkingspot.button.title')
                      }
                    ]}
                  />
                  {state.validateLoading && <Loader />}
                </S.InputContainer>
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
