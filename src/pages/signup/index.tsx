import { Logo } from '@/components/Icons'
import Input from '@/components/Input'
import { Event } from '@/types/types'
import signup from '@/useCases/signup'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container, LoginCard, LoginTitle } from '../login/styles'

function Signup() {
  const [state, setState] = useState({
    email: '',
    pass: '',
    confirmPass: '',
    error: false,
    errorMessage: ''
  })

  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    state.email && state.pass && state.pass === state.confirmPass
      ? setDisabled(false)
      : setDisabled(true)
  }, [state.email, state.pass, state.confirmPass])

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, email: e.target.value })),
      placeholder: 'Insira seu email...',
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, confirmPass: e.target.value })),
      placeholder: 'Insira sua senha...',
      type: 'password',
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, pass: e.target.value })),
      placeholder: 'Confirme sua senha...',
      type: 'password',
      width: '75%'
    }
  ]

  const router = useRouter()

  const handleSignup = (email: string, pass: string) => {
    signup(email, pass)
      .then(() => {
        setState((old) => ({ ...old, error: false, errorMessage: '' }))
        toast.success('Cadastro efetuado com sucesso!', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined,
          onClose: () => {
            router.push('/login')
          }
        })
      })
      .catch((err) => {
        setState((old) => ({
          ...old,
          error: true,
          errorMessage: err.toString().split('Firebase:')[1]
        }))
        toast.error('Erro ao efetuar o cadastro!', {
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
      <Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
        />
        <LoginCard>
          <Logo option="header" />
          <LoginTitle>Cadastro</LoginTitle>
          <Input
            inputArray={inputArray}
            hasButton
            buttonContent={[
              {
                onClick: () => handleSignup(state.email, state.pass),
                label: 'Cadastrar',
                disabled: disabled
              }
            ]}
          />
          {state.error && <span>{state.errorMessage}</span>}
        </LoginCard>
      </Container>
    </>
  )
}

export default Signup
