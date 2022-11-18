import { IDashboardCardsButtonProps } from '@/types/DashboardCards'
import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 285px;
  height: 150px;
`

export const Card = styled.div`
  background: ${(props) => props.theme.dashboardCardBackground};
  width: 100%;
  height: calc(100% - 50px);
  padding: 30px;
  display: flex;
  gap: 12px;
  border-radius: 12px 12px 0 0;
  border: 1px solid #c3c3c3;
`

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
`

export const ButtonContainer = styled.div`
  height: 50px;
  display: flex;
`

export const Button = styled.button<IDashboardCardsButtonProps>`
  width: 100%;
  background: ${(props) => props.theme.switchBg};
  border: none;
  color: ${(props) => props.theme.switchDot};
  font-weight: ${(props) => props.theme.bold};
  cursor: pointer;
  border-radius: ${(props) =>
    props.buttons === 1 && `0 0 12px 12px`} !important;
  :not(:first-of-type) {
    border-left: none;
    border-radius: 0 0 12px 0;
    border-left: 1px solid #c3c3c3;
  }
  :first-of-type {
    border-radius: 0 0 0 12px;
  }
  &:hover {
    background: ${(props) => props.theme.primaryLight};
    color: #fff;
  }
  &:active {
    background: ${(props) => props.theme.primaryDark};
    color: #fff;
  }
`

export const TextContainer = styled.div`
  color: ${(props: IThemesProps) => props.theme.dashboardCardText};
`
