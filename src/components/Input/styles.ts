import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%; 
    max-width: 320px;
    height: 30px;
    border-bottom: 2px solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px; 
`

export const IconContainer = styled.div`
    margin-right: 10px;
    color: rgb(134, 71, 173);
`

export const InputText = styled.input`
    background-color: transparent;
    width: 100%;
    color: #fff;
    font-size: 16px;
    border: 0;
    height: 30px;
    outline: none;
`


export const ErrorText = styled.p`
    color: #ff0000;
    font-size: 12px;
    margin: 5px 0;
    
`