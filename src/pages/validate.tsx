import selectParkingSpot from '@/utils/selectParkingSpot'
import validateTicket from '@/utils/validateTicket'

export default function Validate() {
  return (
    <>
      <button
        onClick={() =>
          validateTicket({
            id: '925d4f0d-53ad-4048-874c-8c8fd1d81600',
            parkingSpotId: ''
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      >
        validar ticket
      </button>
      <button
        onClick={() =>
          selectParkingSpot({
            id: '925d4f0d-53ad-4048-874c-8c8fd1d81600',
            parkingSpotId: '3992d8be-87ae-485e-9110-f15bccf760ef'
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      >
        ocupar vaga
      </button>
    </>
  )
}
