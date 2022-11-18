import { IValidateParkingSpot } from '@/types/types'
import { AxiosResponse } from 'axios'
import clientApi from './axios'

const validateParkingSpot = async (
  props: IValidateParkingSpot
): Promise<AxiosResponse> => {
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
