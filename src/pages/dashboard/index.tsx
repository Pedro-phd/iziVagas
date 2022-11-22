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
import { useTranslation } from 'react-i18next'
import * as S from './styles'

export default function Home() {
  const router = useRouter()

  const { t } = useTranslation()

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
      title: t('dashboard.parkingspot.title'),
      text: t('dashboard.parkingspot.desc'),
      buttons: [
        {
          label: t('create'),
          onClick: () => handlePush('/dashboard/register/parkingspot')
        },
        {
          label: t('edit'),
          onClick: () => handlePush('/dashboard/edit/parkingspot')
        }
      ]
    },
    {
      icon: <Blocks />,
      title: t('dashboard.blocks.title'),
      text: t('dashboard.blocks.desc'),
      buttons: [
        {
          label: t('create'),
          onClick: () => handlePush('/dashboard/register/blocks')
        },
        {
          label: t('edit'),
          onClick: () => handlePush('/dashboard/edit/blocks')
        }
      ]
    },
    {
      icon: <Payment />,
      title: t('dashboard.payment.title'),
      text: t('dashboard.payment.desc'),
      buttons: [
        {
          label: t('go'),
          onClick: () => handlePush('/dashboard/payment')
        }
      ]
    },
    {
      icon: <Gate />,
      title: t('dashboard.gate.title'),
      text: t('dashboard.gate.desc'),
      buttons: [
        {
          label: t('go'),
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
