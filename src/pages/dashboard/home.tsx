import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const auth = getAuth()

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    auth.currentUser ? null : router.push('/login')
  }, [])

  return <h1>aa</h1>
}
