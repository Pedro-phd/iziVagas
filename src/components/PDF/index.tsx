import { IPDFProps } from '@/types/PDF'
import { format } from 'date-fns'
import Barcode from 'react-barcode'
import QRCode from 'react-qr-code'
import { Logo } from '../Icons'
import * as S from './styles'

function PDF({ id }: IPDFProps) {
  const date = format(new Date(), "dd/MM/yyyy '-' HH'h'mm ")
  return (
    <S.Container>
      <S.TitleContainer>
        <Logo option={'header'} />
        <S.Title>IZI Vagas</S.Title>
      </S.TitleContainer>
      <S.Line />
      <S.ContentContainer>
        <h1>Ticket de Estacionamento</h1>
        <h2>{date}</h2>
        <S.Line />
        <QRCode value={id} />
        <p>{id}</p>
        <S.Line />
        <Barcode value={id} />
      </S.ContentContainer>
    </S.Container>
  )
}

export default PDF
