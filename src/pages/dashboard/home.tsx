import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const auth = getAuth()

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    auth.currentUser ? null : router.push('/login')
  }, [])

  return (
    <>
      <li>
        <ul>
          <a href="/dashboard/register/parkingspot">Cadastrar vaga</a>
        </ul>
        <ul>
          <a>Cadastrar bloco</a>
        </ul>
        <ul>
          <a>Cadastrar usuario</a>
        </ul>
        <ul>
          <a>pagamento</a>
        </ul>
      </li>
    </>
  )
}
