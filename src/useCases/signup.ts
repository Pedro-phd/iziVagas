/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    createUserWithEmailAndPassword,
    getAuth,
    UserCredential
} from 'firebase/auth'

const signup = async (
  email: string,
  password: string
): Promise<UserCredential | string> => {
  const auth = getAuth()
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    return Promise.resolve(res)
  } catch (error: any) {
    return Promise.reject(error.message)
  }
}

export default signup
