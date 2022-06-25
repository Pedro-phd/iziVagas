/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential
} from 'firebase/auth'

const login = async (
  email: string,
  password: string
): Promise<UserCredential | string> => {
  const auth = getAuth()
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    return Promise.resolve(res)
  } catch (error: any) {
    return Promise.reject(error.message)
  }
}

export default login
