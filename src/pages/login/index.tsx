import { Logo } from '@/components/Icons'
import InputText from '@/components/TextInput'
import { Event } from '@/types/types'
import login from '@/useCases/login'

import { useRouter } from 'next/router'
import { useState } from 'react'
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

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, email: e.target.value })),
      placeholder: 'Insira seu email...',
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, pass: e.target.value })),
      placeholder: 'Insira sua senha...',
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
        toast.success('Login efetuado com sucesso!', {
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
        toast.error('Erro ao efetuar o login!', {
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
          <InputText
            inputArray={inputArray}
            hasButton
            buttonContent={[
              {
                onClick: () => handleLogin(state.email, state.pass),
                label: 'Login'
              }
            ]}
          />
          {state.error && <span>{state.errorMessage}</span>}
        </S.LoginCard>
      </S.Container>
    </>
  )
}
