import { Logo } from '@/components/Icons'
import Input from '@/components/Input'
import { Event } from '@/types/types'
import login from '@/useCases/login'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'

export default function Home() {
  const [state, setState] = useState({
    email: '',
    pass: '',
    error: false,
    errorMessage: ''
  })

  const { t } = useTranslation()

  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    state.email && state.pass ? setDisabled(false) : setDisabled(true)
  }, [state.email, state.pass])

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, email: e.target.value })),
      placeholder: t('login.inputs.name'),
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, pass: e.target.value })),
      placeholder: t('login.inputs.password'),
      type: 'password',
      width: '75%'
    }
  ]

  const router = useRouter()

  const handleLogin = (email: string, pass: string) => {
    login(email, pass)
      .then(() => {
        setState((old) => ({ ...old, error: false, errorMessage: '' }))
        window.sessionStorage.setItem('login', 'true')
        toast.success(t('login.success'), {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined,
          onClose: () => {
            router.push('/dashboard')
          }
        })
      })
      .catch((err) => {
        setState((old) => ({
          ...old,
          error: true,
          errorMessage: err.toString().split('Firebase:')[1]
        }))
        toast.error(t('login.error'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined
        })
      })
  }

  return (
    <>
      <S.Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
        />
        <S.LoginCard>
          <Logo option="header" />
          <S.LoginTitle>Login</S.LoginTitle>
          <Input
            inputArray={inputArray}
            hasButton
            buttonContent={[
              {
                onClick: () => handleLogin(state.email, state.pass),
                label: 'Login',
                disabled: disabled
              }
            ]}
          />
          {state.error && <span>{state.errorMessage}</span>}
        </S.LoginCard>
      </S.Container>
    </>
  )
}
