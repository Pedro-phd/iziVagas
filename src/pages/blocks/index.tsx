import CardBlock from '@/components/CardBlock'
import Header from '@/components/Header'
import Indicator from '@/components/Indicator'
import { BoxSkeleton } from '@/styles/skeleton'
import { StateBlocks } from '@/types/Blocks'
import clientApi from '@/utils/axios'
import getColor from '@/utils/getColor'
import { useRouter, withRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'

function BlocksPage() {
  const router = useRouter()
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
      .then((res) => {
        setState((old) => ({ ...old, blocks: res.data, loading: false }))
        toast.warn(t('blocks.warn'), {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          onClose: () => {
            router.push('/')
          }
        })
      })
      .catch((error: Error) =>
        setState((old) => ({
          ...old,
          error: true,
          loading: false,
          errorMessage: error.message
        }))
      )
  }, [])

  useEffect(() => {
    if (router.query.previousPage === 'index') {
      toast.success(t('blocks.success'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined
      })
    }
  }, [])

  const { t } = useTranslation()

  return (
    <S.Container>
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
      <Header title={t('blocks.title')} />
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
            <CardBlock
              key={block.id}
              letter={block.name}
              color={getColor(block.occupied, block.slots)}
              number={block.slots - block.occupied}
            />
          )
        })}
      </S.BlocksContainer>
    </S.Container>
  )
}

export default withRouter(BlocksPage)
