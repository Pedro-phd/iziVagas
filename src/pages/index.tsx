/* eslint-disable @typescript-eslint/no-explicit-any */
import { HandEmoji, Logo } from '@/components/Icons'
import Loader from '@/components/Loader'
import PDF from '@/components/PDF'
import * as S from '@/styles/home'
import clientApi from '@/utils/axios'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Pdf from 'react-to-pdf'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const router = useRouter()
  const date = format(new Date(), "dd/MM/yyyy '-' HH'h'mm ")
  const ref = useRef<HTMLDivElement>(null)
  const [id, setId] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div>
      <Pdf
        targetRef={ref}
        filename={`${date}.pdf`}
        x={10}
        y={10}
        scale={0.7}
        onComplete={() =>
          router.push(
            { pathname: '/blocks', query: { previousPage: 'index' } },
            '/blocks'
          )
        }
      >
        {({ toPdf }: any) => (
          <S.Container
            onClick={() => {
              setLoading(true)
              clientApi
                .post('api/ticket/new')
                .then((res) => {
                  setId(res.data.id)
                  toPdf()
                  setLoading(false)
                })
                .catch((err) => {
                  toast.error('Erro ao gerar o ticket!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                  setLoading(false)
                  console.log(err)
                })
            }}
          >
            {!loading ? (
              <>
                <S.Column>
                  <Logo option="startScreen" />
                </S.Column>
                <S.Column>
                  <S.CircleContainer>
                    <S.Circle size="275px" opacity={0.2} duration="1s" />
                    <S.Circle size="165px" opacity={0.5} duration="1.6s" />
                    <S.Circle size="103px" opacity={1} duration="1.3s" />
                    <HandEmoji />
                  </S.CircleContainer>
                  <S.Title>Toque para iniciar!</S.Title>
                </S.Column>
              </>
            ) : (
              <Loader />
            )}
          </S.Container>
        )}
      </Pdf>
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
      <div className="pdf-wrapper">
        <div ref={ref}>
          <PDF id={id} />
        </div>
      </div>
    </div>
  )
}
