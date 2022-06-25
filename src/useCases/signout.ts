import { getAuth, signOut } from 'firebase/auth'

const logoff = async (): Promise<boolean> => {
  const auth = getAuth()
  try {
    await signOut(auth)
    return Promise.resolve(true)
  } catch (error) {
    return Promise.reject(error)
  }
}
export default logoff
