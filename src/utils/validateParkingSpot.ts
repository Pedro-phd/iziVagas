import { AxiosResponse } from 'axios'
import clientApi from './axios'

type Props = {
  id: string
  occupied?: boolean
}

const validateParkingSpot = async (props: Props): Promise<AxiosResponse> => {
  try {
    const res = await clientApi.put('api/parkingspot/update', {
      ...props
    })
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default validateParkingSpot
