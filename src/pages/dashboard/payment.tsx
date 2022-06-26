import validateTicket from '@/utils/validateTicket'
import { useState } from 'react'

type StateBlocks = {
  id: string
}

export default function Payment() {
  const [state, setState] = useState<StateBlocks>({
    id: ''
  })

  const handlePayment = () => {
    validateTicket({
      id: state.id,
      paid: true
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h1>Payment</h1>
      <input
        placeholder="ticket id"
        onChange={(e) => setState((old) => ({ ...old, id: e.target.value }))}
      />
      <button onClick={handlePayment}>Registrar pagamento</button>
    </>
  )
}
