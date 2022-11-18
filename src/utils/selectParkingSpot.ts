import { ISelecParkingSpot } from '@/types/types'
import clientApi from './axios'
import validateParkingSpot from './validateParkingSpot'
import validateTicket from './validateTicket'

const selectParkingSpot = async (
  props: ISelecParkingSpot
): Promise<boolean | Error> => {
  const verifyTicket = async (): Promise<boolean | string> => {
    try {
      const res = await clientApi.get(`api/ticket/get/${props.id}`)
      if (res.data.parkingSpotId == '') {
        return Promise.resolve(true)
      } else {
        return Promise.reject('Erro! Ticket já possui uma vaga registrada.')
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
  try {
    await verifyTicket()
    await validateTicket({ id: props.id, parkingSpotId: props.parkingSpotId })
    await validateParkingSpot({
      id: props.parkingSpotId,
      occupied: true
    })
    return Promise.resolve(true)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default selectParkingSpot
