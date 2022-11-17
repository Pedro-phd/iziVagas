/* eslint-disable react-hooks/exhaustive-deps */
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as S from './styles'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const login = await window.sessionStorage.getItem('login')
      if (login === 'false') router.push('/login')
    })()
  }, [router])

  const navArray = [
    {
      label: 'Cadastrar vaga',
      url: '/dashboard/register/parkingspot'
    },
    {
      label: 'Cadastrar bloco',
      url: '/dashboard/register/blocks'
    },
    {
      label: 'Editar vaga',
      url: '/dashboard/edit/parkingspot'
    },
    {
      label: 'Editar bloco',
      url: '/dashboard/edit/blocks'
    },
    {
      label: 'Pagamento',
      url: '/dashboard/payment'
    }
  ]

  return (
    <>
      <S.Container>
        <Header hasLogout />
        <S.Wrapper>
          {navArray.map((navArrayItem, index) => (
            <S.CustomCard
              key={index}
              onClick={() => router.push(navArrayItem.url)}
            >
              <S.Label>{navArrayItem.label}</S.Label>
              <S.Box />
            </S.CustomCard>
          ))}
        </S.Wrapper>
      </S.Container>
    </>
  )
}
