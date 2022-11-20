import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/TextInput'
import { IParkingSpot, IStateParkingspotEdit } from '@/types/Dashboard'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { Blocks } from '@prisma/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Container, Title } from '../styles'

export default function Newparkingspot() {
  const [state, setState] = useState<IStateParkingspotEdit>({
    id: '',
    name: '',
    block: '',
    blockID: '',
    occupied: false,
    special: false,
    old: false
  })

  const [parking, setParking] = useState<IParkingSpot[]>([])
  const [blocks, setBlocks] = useState<Blocks[]>([])
  const [filteredParking, setFilteredParking] = useState<IParkingSpot[]>([
    {
      id: '',
      name: '',
      block: '',
      blockID: '',
      occupied: false,
      special: false,
      old: false
    }
  ])
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
  const [disabled, setDisabled] = useState<boolean>(true)

  const router = useRouter()

  useEffect(() => {
    state.blockID && state.name
      ? setButtonDisabled(false)
      : setButtonDisabled(true)
    filteredParking.map((item) => {
      item.blockID ? setDisabled(false) : setDisabled(true)
    })
  }, [filteredParking, state.blockID, state.name])

  useEffect(() => {
    clientApi
      .get('api/blocks/all')
      .then((res) => {
        setBlocks(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    clientApi
      .get('api/parkingspot/all')
      .then((res) => {
        setParking(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleParkingspotSelect = (id: string) => {
    const filteredParkingspots = parking.filter((item) => item.blockID === id)
    filteredParkingspots && setFilteredParking([...filteredParkingspots])
  }
  const handleFindParkingspot = (id: string) => {
    const findParkingspots = parking.find((item) => item.id === id)
    findParkingspots && setState({ ...findParkingspots })
  }

  const inputArray = [
    {
      onChange: (e: Event) => handleParkingspotSelect(e.target.value),
      placeholder: 'Escolha o bloco da vaga...',
      width: '75%',
      type: 'select',
      options: blocks.map((block) => ({
        value: block.id,
        name: `Bloco - ${block.name}`
      }))
    },
    {
      onChange: (e: Event) => handleFindParkingspot(e.target.value),
      placeholder: 'Escolha a vaga...',
      width: '75%',
      type: 'select',
      disabled: disabled,
      options:
        filteredParking &&
        filteredParking.map((item) => ({
          value: item.id,
          name: `Vaga - ${item.name}`
        }))
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, name: e.target.value })),
      placeholder: 'Insira o novo nome da vaga...',
      width: '75%',
      type: 'text'
    },
    {
      onChange: () =>
        setState((old) => ({ ...old, occupied: !state.occupied })),
      placeholder: 'Ocupada',
      type: 'checkbox',
      width: '75%',
      checked: state.occupied
    },
    {
      onChange: () => setState((old) => ({ ...old, special: !state.special })),
      placeholder: 'Vaga especial',
      type: 'checkbox',
      width: '75%',
      checked: state.special
    },
    {
      onChange: () => setState((old) => ({ ...old, old: !state.old })),
      placeholder: 'Vaga para idosos',
      type: 'checkbox',
      width: '75%',
      checked: state.old
    }
  ]

  const handleUpdate = () => {
    clientApi
      .post(`api/parkingspot/update/${state.id}`, {
        ...state
      })
      .then(() => {
        toast.success('Vaga editada com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined,
          onClose: () => {
            router.reload()
          }
        })
      })
      .catch(() => {
        toast.error('Erro ao editar a vaga!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined
        })
      })
  }
  const handleDelete = () => {
    clientApi
      .post(`api/parkingspot/delete/${state.id}`, {
        ...state
      })
      .then(() => {
        toast.success('Vaga deletada com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined,
          onClose: () => {
            router.reload()
          }
        })
      })
      .catch(() => {
        toast.error('Erro ao deletar a vaga!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined
        })
      })
  }

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
      />
      <Header />
      <Card>
        <Breadcrumbs />
        <Title>Gerenciar Vagas</Title>
        <Input
          inputArray={inputArray}
          hasButton
          buttonContent={[
            {
              label: 'Atualizar vaga',
              onClick: handleUpdate,
              width: '150px',
              disabled: buttonDisabled
            },
            {
              label: 'Deletar vaga',
              onClick: handleDelete,
              width: '150px',
              disabled: buttonDisabled
            }
          ]}
        />
      </Card>
    </Container>
  )
}
