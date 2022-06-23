/* eslint-disable @typescript-eslint/no-explicit-any */
import { HandEmoji, Logo } from '@/components/Icons'
import PDF from '@/components/PDF'
import * as S from '@/styles/home'
import clientApi from '@/utils/axios'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Pdf from 'react-to-pdf'

export default function Home() {
  const router = useRouter()
  const date = format(new Date(), "dd/MM/yyyy '-' HH'h'mm ")
  const ref = useRef<HTMLDivElement>(null)
  const [id, setId] = useState<string>('')
  useEffect(() => {
    clientApi.post('api/ticket/new').then((res) => {
      setId(res.data.id)
    })
  }, [])

  return (
    <div>
      <Pdf
        targetRef={ref}
        filename={`${date}.pdf`}
        x={10}
        y={10}
        scale={0.7}
        onComplete={() => router.push('/blocks')}
      >
        {({ toPdf }: any) => (
          <S.Container onClick={toPdf}>
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
          </S.Container>
        )}
      </Pdf>
      <div className="pdf-wrapper">
        <div ref={ref}>
          <PDF id={id} />
        </div>
      </div>
    </div>
  )
}
