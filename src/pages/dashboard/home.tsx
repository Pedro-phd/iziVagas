import { getAuth } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const auth = getAuth()

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    auth.currentUser ? null : router.push('/login')
  }, [router])

  return (
    <>
      <li>
        <ul>
          <Link href="/dashboard/register/parkingspot">Cadastrar vaga</Link>
        </ul>
        <ul>
          <Link href="#">Cadastrar bloco</Link>
        </ul>
        <ul>
          <Link href="#">Cadastrar usuario</Link>
        </ul>
        <ul>
          <Link href="#">pagamento</Link>
        </ul>
      </li>
    </>
  )
}
