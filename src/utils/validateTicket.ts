import clientApi from '@/utils/axios'
import { AxiosResponse } from 'axios'

type Props = {
  id: string //id do ticket
  parkingSpotiD?: string
  paid?: boolean
  entryDate?: string
  exitDate?: string
}

const validateTicket = async (props: Props): Promise<AxiosResponse> => {
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
