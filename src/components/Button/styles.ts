import styled, { css } from 'styled-components'
import { IButtonStyled } from './types'

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    border: none;
    padding: 2px 12px;
    min-width: 120px;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
    


    ${({variant}) => variant === "secondary" && css`
        min-width: 167px;
        height: 33px;
        background: #e4105d;
        border: none;
        font-weight: 700;
        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 20px;
        }
    `}

    ${({variant}) => variant === "login" && css`
        min-width: 167px;
        margin-top: 30px;
        margin-bottom: 20px;
        height: 33px;
        background: #e4105d;
        border: none;
        font-weight: 700;
        width: 100%;
        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 20px;
        }
    `}
`