import * as S from './styles'

interface IConfirmButtonProps {
  id: string
}

const ConfirmButton = ({ id }: IConfirmButtonProps) => {
  return <S.Button onClick={() => console.log(id)}>Confirmar vaga</S.Button>
}
export default ConfirmButton
