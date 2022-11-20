import { IConfirmButtonProps } from '@/types/ConfirmButton'
import * as S from './styles'

const ConfirmButton = ({ id }: IConfirmButtonProps) => {
  return <S.Button onClick={() => console.log(id)}>Confirmar vaga</S.Button>
}
export default ConfirmButton
