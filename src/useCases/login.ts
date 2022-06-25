import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential
} from 'firebase/auth'

const login = async (
  email: string,
  password: string
): Promise<UserCredential | Error> => {
  const auth = getAuth()
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default login
