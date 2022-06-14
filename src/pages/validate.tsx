import validateTicket from '@/utils/validateTicket'

export default function Validate() {
  return (
    <button
      onClick={() =>
        validateTicket({
          id: '925d4f0d-53ad-4048-874c-8c8fd1d816',
          paid: true
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      }
    >
      validar
    </button>
  )
}
