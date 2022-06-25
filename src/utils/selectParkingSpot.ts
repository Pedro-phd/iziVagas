import validateParkingSpot from './validateParkingSpot'
import validateTicket from './validateTicket'

type Props = {
  parkingSpotId: string
  id: string
}

const selectParkingSpot = async (props: Props): Promise<boolean | Error> => {
  try {
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
