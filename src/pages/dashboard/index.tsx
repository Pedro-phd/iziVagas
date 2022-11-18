/* eslint-disable react-hooks/exhaustive-deps */
import DashboardCards from '@/components/DashboardCards'
import Header from '@/components/Header'
import {
  Blocks,
  Gate,
  ParkingSpot,
  Payment
} from '@/components/Icons/DashboardIcons'
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

  const handlePush = (link: string) => {
    router.push(link)
  }

  const dashboardCardsArray = [
    {
      icon: <ParkingSpot />,
      title: 'Vagas',
      text: 'Crie e gerencie suas vagas',
      buttons: [
        {
          label: 'Criar',
          onClick: () => handlePush('/dashboard/register/parkingspot')
        },
        {
          label: 'Editar',
          onClick: () => handlePush('/dashboard/edit/parkingspot')
        }
      ]
    },
    {
      icon: <Blocks />,
      title: 'Blocos',
      text: 'Crie e gerencie seus blocos',
      buttons: [
        {
          label: 'Criar',
          onClick: () => handlePush('/dashboard/register/blocks')
        },
        {
          label: 'Editar',
          onClick: () => handlePush('/dashboard/edit/blocks')
        }
      ]
    },
    {
      icon: <Payment />,
      title: 'Pagamento',
      text: 'Confirme o pagameto do tíquete',
      buttons: [
        {
          label: 'Entrar',
          onClick: () => handlePush('/dashboard/payment')
        }
      ]
    },
    {
      icon: <Gate />,
      title: 'Cancela',
      text: 'Libera a cancela',
      buttons: [
        {
          label: 'Entrar',
          onClick: () => handlePush('/gate')
        }
      ]
    }
  ]

  return (
    <>
      <S.Container>
        <Header hasLogout />
        <S.Wrapper>
          {dashboardCardsArray.map((item, index) => (
            <DashboardCards
              key={index}
              buttons={item.buttons}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </S.Wrapper>
      </S.Container>
    </>
  )
}
