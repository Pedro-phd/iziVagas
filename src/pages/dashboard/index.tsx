import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as S from './styles'

const auth = getAuth()

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    auth.currentUser ? null : router.push('/login')
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
      label: 'Pagamento',
      url: '/dashboard/payment'
    },
    {
      label: 'Editar vaga',
      url: '/dashboard/edit/parkingspot'
    },
    {
      label: 'Editar bloco',
      url: '/dashboard/edit/blocks'
    }
  ]

  return (
    <S.Container>
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
  )
}
