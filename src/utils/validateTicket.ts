import { IValidateTicket } from '@/types/types'
import clientApi from '@/utils/axios'
import { AxiosResponse } from 'axios'

const validateTicket = async (
  props: IValidateTicket
): Promise<AxiosResponse> => {
  try {
    const res = await clientApi.put('api/ticket/update', {
      ...props
    })
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default validateTicket
